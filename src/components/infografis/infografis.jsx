import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import DataNull from "@/components/datanull/datanull";

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
    <div className="bg-white rounded-xl border p-4 w-full">
      <div className="border-b">
        <div className="text-ftitle text-lg font-bold py-2.5 px-2">
          Infografis
        </div>
      </div>
      <Slider {...settings}>
        {data && data.length > 0 ? (
          data.map((infografi) => (
            <div key={infografi.id}>
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI}${infografi.attributes.image.data.attributes.url}`}
                alt={infografi.attributes.image.data.attributes.alternativeText}
                width={500}
                height={500}
                className="rounded-lg "
                priority
              />
            </div>
          ))
        ) : (
          <DataNull />
        )}
      </Slider>
    </div>
  );
}
