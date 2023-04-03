import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import stylesgaleri from "./galeri.module.css";
import Image from "next/image";
import DataNull from "@/components/datanull/datanull";

export default function ReccentVideo() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/videos?sort[0]=updatedAt%3Adesc&sort[1]=updatedAt%3Adesc&pagination[page]=1&pagination[pageSize]=4&populate=*`
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
        <div className={styles.section_title}>Video</div>
        <Link href="/galeri/video" className={styles.btn_standard}>
          Selengkapnya
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data &&
          data.map((image) => (
            <div className="">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI}${image.attributes.image.data.attributes.url}`}
                width={500}
                height={500}
                alt={data[0].attributes.alternativeText}
                className={stylesgaleri.image}
              />
              <p className="font-bold text-ftitle">{image.attributes.title}</p>
            </div>
          ))}
      </div>

      <Link href="/profil">
        <div className={styles.btn_standard_responsive}>Selengkapnya</div>
      </Link>
    </section>
  );
}
