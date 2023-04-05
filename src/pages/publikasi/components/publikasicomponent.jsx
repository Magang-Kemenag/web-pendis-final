import DataNull from "@/components/datanull/datanull";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PublikasiComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/publikasis?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <section className="flex flex-col gap-8 bg-white p-12">
      <div className={`${styles.title_center}`}>Publikasi</div>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
        {data && data.length > 0 ? (
          data.map((publikasi, index) => (
            <div
              key={publikasi.id}
              className="rounded-lg flex items-center gap-3 border"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI}${publikasi.attributes.image.data.attributes.url}`}
                alt={publikasi.attributes.image.data.attributes.alternativeText}
                width={120}
                height={120}
                className="rounded-lg"
                priority
              />
              <a
                href={publikasi.attributes.link}
                className="text-center font-semibold text-ftitle text-lg hover:text-base-blue"
              >
                {publikasi.attributes.name}
              </a>
            </div>
          ))
        ) : (
          <DataNull />
        )}
      </div>
    </section>
  );
}
