import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import DataNull from "@/components/datanull/datanull";
import Image from "next/image";

export default function Publikasi() {
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
    <section className="mx-16 flex flex-col gap-12">
      <div className="text-3xl font-bold text-base-blue text-end">
        Publikasi
      </div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1">
        <div className="flex flex-col items-start gap-4 max-sm:hidden">
          <div className="logo bg-base-blue h-12 w-12 p-2 rounded-lg">
            <img src="/assets/lampu.png" alt="" />
          </div>
          <div className="copy text-left w-80 text-ftitle">
            Direktorat Jenderal Pendidikan Islam mendukung pengembangan
            pendidikan dengan memberikan berbagai peluang bantuan beasiswa
          </div>
        </div>
        {data && data.length > 0 ? (
          <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-4">
            {data.map((publikasi, index) => (
              <div
                key={publikasi.id}
                className="rounded-lg flex flex-col justify-center gap-2"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI}${publikasi.attributes.image.data.attributes.url}`}
                  alt={
                    publikasi.attributes.image.data.attributes.alternativeText
                  }
                  width={500}
                  height={500}
                  priority
                />
                <a
                  href={publikasi.attributes.link}
                  className={styles.beasiswa_publikasi}
                >
                  {publikasi.attributes.name}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <DataNull />
        )}
      </div>
    </section>
  );
}
