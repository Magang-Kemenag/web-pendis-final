import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

export default function Publikasi() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/beasiswas?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <section>
      <div
        className={`${styles.section_title} ${styles.title_gap} text-end`}
        data-aos="fade-down"
      >
        Publikasi
      </div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1">
        <div
          className="flex flex-col items-start gap-4 max-sm:hidden"
          data-aos="fade-right"
        >
          <div className="logo bg-base-blue h-12 w-12 p-2 rounded-lg">
            <img src="/assets/lampu.png" alt="" />
          </div>
          <div className="copy text-left w-80 text-ftitle">
            Direktorat Jenderal Pendidikan Islam mendukung pengembangan
            pendidikan dengan memberikan berbagai peluang bantuan beasiswa
          </div>
        </div>
        <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-4">
          {data &&
            data.map((publikasi, index) => (
              <div
                key={publikasi.id}
                className="rounded-lg flex flex-col justify-center gap-2"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 100}
              >
                <picture>
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI}${publikasi.attributes.image.data.attributes.url}`}
                    alt={
                      publikasi.attributes.image.data.attributes.alternativeText
                    }
                    width={500}
                    height={500}
                  />
                </picture>
                <a
                  href={publikasi.attributes.link}
                  className={styles.beasiswa_publikasi}
                >
                  {publikasi.attributes.name}
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
