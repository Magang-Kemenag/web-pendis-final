import { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Layanan() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/layanans?populate=*`)
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
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div
        className={`${styles.title_center} ${styles.title_gap}`}
        data-aos="fade-down"
      >
        Layanan
      </div>
      <div data-aos="fade-up">
        <Slider {...settings}>
          {data &&
            data.map((layanan) => (
              <div key={layanan.id}>
                <a href={layanan.attributes.link}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI}${layanan.attributes.image.data.attributes.url}`}
                    alt={
                      layanan.attributes.image.data.attributes.alternativeText
                    }
                    width={500}
                    height={500}
                    priority
                    className="rounded-lg lg:w-44 max-md:w-52 m-auto"
                  />
                </a>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}
