import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import stylesgaleri from "./galeri.module.css";
import Image from "next/image";
import DataNull from "@/components/datanull/datanull";

export default function ReccentImage() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/images?sort[0]=updatedAt%3Adesc&sort[1]=updatedAt%3Adesc&pagination[page]=1&pagination[pageSize]=4&populate=*`
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
        <div className={styles.section_title}>Foto</div>
        <Link href="/galeri/image" className={styles.btn_standard}>
          Selengkapnya
        </Link>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-3">
        {data && data.length > 0 ? (
          data.map((image) => (
            <div className="flex flex-col gap-2" key={image.id}>
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI}${image.attributes.image.data.attributes.url}`}
                width={500}
                height={500}
                alt={image.attributes.image.data.attributes.alternativeText}
                className={stylesgaleri.image}
                priority
              />
              <p className="font-bold text-ftitle">{image.attributes.title}</p>
            </div>
          ))
        ) : (
          <DataNull />
        )}
      </div>
      <Link href="/profil">
        <div className={styles.btn_standard_responsive}>Selengkapnya</div>
      </Link>
    </section>
  );
}
