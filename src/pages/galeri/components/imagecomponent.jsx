import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import Pagination from "@/components/pagination/pagination";
import Link from "next/link";
import CardGaleri from "@/components/galeri/cardgaleri";

export default function ImageComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/images?sort[0]=updatedAt%3Adesc&sort[1]=title%3Adesc&pagination[page]=1&pagination[pageSize]=3&populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <section className={styles.base_section}>
        <div className="title text-base-blue text-4xl font-bold">Foto</div>
        <div className="artikel grid grid-cols-2 gap-4">
          {data &&
            data.map((image) => (
              <CardGaleri
                image={image.attributes.image.data.attributes.url}
                alt={image.attributes.image.data.attributes.alternativeText}
                title={image.attributes.title}
              />
            ))}
        </div>
      </section>
      <div className="flex mt-8 justify-center">
        <Link
          href={`/galeri/image`}
          className="flex border-ffield border-2 py-5 px-9 rounded-full bg-transparent hover:bg-ffield"
        >
          <div className="max-sm:m-auto flex gap-2">
            <div className="text-ftitle font-semibold">Lihat Selengkapnya</div>
            <div className="icon">
              <img src="/assets/arrow-right-black.svg" alt="" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
