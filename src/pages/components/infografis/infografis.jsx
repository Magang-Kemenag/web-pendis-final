import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Infografis() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/infografis?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };

  return (
    <div data-aos="zoom-in">
      <Slider {...settings}>
        {data &&
          data.map((infografi) => (
            <div key={infografi.id}>
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI}${infografi.attributes.image.data.attributes.url}`}
                alt={infografi.attributes.image.data.attributes.alternativeText}
                width={500}
                height={500}
                className="rounded-lg h-96 w-full"
                priority
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}
