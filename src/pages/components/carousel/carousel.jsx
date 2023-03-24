import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { formatDateEn } from "@/utils/formatter";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

function Carousel() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/articles?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-full">
      <div className="container w-full m-auto" data-aos="zoom-in">
        <Slider {...settings}>
          {data &&
            data.map((article) => (
              <Link
                href={`/media/${article.attributes.category.data.attributes.slug}/${article.attributes.slug}`}
                className="relative h-1/2"
                key={article.id}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI}${article.attributes.image.data.attributes.url}`}
                  alt={article.attributes.image.data.attributes.alternativeText}
                  width={500}
                  height={500}
                  priority
                  className="w-full rounded-lg lg:h-[480px] max-md:h-[279px] max-sm:h-[138px] relative"
                />
                <div className="text-white absolute left-10 top-80 text-4xl">
                  {article.attributes.title}
                </div>
                <div className="text-white absolute left-10 top-96">
                  {formatDateEn(article.attributes.updatedAt)}
                </div>
              </Link>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
