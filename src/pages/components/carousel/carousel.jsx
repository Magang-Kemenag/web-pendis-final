import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { formatDateEn } from "@/utils/formatter";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import DataNull from "@/components/datanull/datanull";

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
    <div className="mx-12">
      <div className="w-full">
        <Slider {...settings}>
          {data &&
            data.map((article) => (
              <Link
                href={`/media/articles/${article.attributes.slug}`}
                className="relative h-1/2 w-full rounded-xl bg-slate-900"
                key={article.id}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI}${article.attributes.image.data.attributes.url}`}
                  alt={article.attributes.image.data.attributes.alternativeText}
                  width={500}
                  height={500}
                  priority
                  className="w-full lg:h-[480px] rounded-xl max-md:h-[279px] max-sm:h-[138px] relative"
                />
                <div className="text-white absolute left-10 top-80 flex flex-col gap-4">
                  <div className=" top-80 text-4xl">
                    {article.attributes.title}
                  </div>
                  <div>{formatDateEn(article.attributes.updatedAt)}</div>
                </div>
              </Link>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
