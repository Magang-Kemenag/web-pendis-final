import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import stylesgaleri from "./galeri.module.css";
import Image from "next/image";

export default function ReccentGaleri() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/images?sort[0]=updatedAt%3Adesc&sort[1]=updatedAt%3Adesc&pagination[page]=1&pagination[pageSize]=3&populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <section>
      <div className={styles.section_base}>
        <div className={styles.section_title} data-aos="fade-right">
          Galeri
        </div>
        <Link
          href="/galeri"
          className={styles.btn_standard}
          data-aos="fade-left"
        >
          Selengkapnya
        </Link>
      </div>
      {data && (
        <div className="grid grid-rows-2 grid-flow-col grid-cols-3 gap-2 items-center max-md:grid-rows-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-3">
          <div
            className={`row-span-2 col-span-2 max-sm:row-span-1 ${stylesgaleri.container}`}
            data-aos="flip-right"
            data-aos-delay="100"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI}${data[0].attributes.image.data.attributes.url}`}
              width={500}
              height={500}
              alt={data[0].attributes.alternativeText}
              className={stylesgaleri.image}
            />
            <div className={stylesgaleri.overlay}>
              <p className={stylesgaleri.text}>
                {data[0].attributes.description}
              </p>
            </div>
          </div>
          <div
            className={`max-sm:row-span-1 ${stylesgaleri.container}`}
            data-aos="flip-right"
            data-aos-delay="200"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI}${data[1].attributes.image.data.attributes.url}`}
              width={500}
              height={500}
              alt={data[1].attributes.alternativeText}
              className={stylesgaleri.image}
            />
            <div className={stylesgaleri.overlay}>
              <p className={stylesgaleri.text}>
                {data[1].attributes.description}
              </p>
            </div>
          </div>
          <div
            className={`max-sm:row-span-1 ${stylesgaleri.container}`}
            data-aos="flip-right"
            data-aos-delay="300"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI}${data[2].attributes.image.data.attributes.url}`}
              width={500}
              height={500}
              alt={data[2].attributes.alternativeText}
              className={stylesgaleri.image}
            />
            <div className={stylesgaleri.overlay}>
              <p className={stylesgaleri.text}>
                {data[2].attributes.description}
              </p>
            </div>
          </div>
        </div>
      )}
      <Link href="/profil">
        <div className={styles.btn_standard_responsive}>Selengkapnya</div>
      </Link>
    </section>
  );
}
