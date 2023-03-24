import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Regulasi() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/jenis-regulasis?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <section className="mt-16">
      <div
        className={`${styles.title_center} ${styles.title_gap}`}
        data-aos="fade-down"
      >
        Regulasi
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 max-md:gap-2">
        {data &&
          data.map((regulasi) => (
            <div key={regulasi.id}>
              <div
                className="font-bold text-2xl text-ftitle mb-4"
                data-aos="fade-right"
              >
                {regulasi.attributes.name}
              </div>
              {regulasi.attributes.regulasis.data.map((dataregulasi, index) => (
                <div
                  key={dataregulasi.id}
                  className="flex items-center justify-between mb-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100 + 100}
                >
                  <div className="grid lg:grid-cols-6 grid-flow-row-dense items-center mb-4 gap-2">
                    <div className="icon bg-base-blue rounded-md lg:col-span-1 flex w-3/4">
                      <img
                        className="m-auto py-4"
                        src="/assets/folder.svg"
                        alt=""
                      />
                    </div>
                    <div className="Judul text-lg font-semibold text-ftitle lg:col-span-4 col-span-2">
                      {dataregulasi.attributes.judul}
                    </div>
                    <a
                      href={dataregulasi.attributes.document}
                      className="lg:col-span-1 col-span-3 border text-center p-4 rounded-full text-ftitle border-ffield  bg-transparent font-semibold hover:bg-ffield"
                    >
                      Unduh
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </section>
  );
}
