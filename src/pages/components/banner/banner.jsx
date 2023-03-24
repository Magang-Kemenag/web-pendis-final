import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function Banner() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/banners?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };
  return (
    <div data-aos="fade-down">
      <Slider {...settings}>
        {data &&
          data.map((banner) => (
            <Image
              height={banner.attributes.image.data.attributes.height}
              width={banner.attributes.image.data.attributes.width}
              src={`${process.env.NEXT_PUBLIC_STRAPI}${banner.attributes.image.data.attributes.url}`}
              alt={banner.attributes.image.data.attributes.alternativeText}
              priority
              className="rounded-lg"
            />
          ))}
      </Slider>
    </div>
  );
}
