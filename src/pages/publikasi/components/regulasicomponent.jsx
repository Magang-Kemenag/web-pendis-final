import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function RegulasiComponent() {
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
    <section className="flex flex-col gap-8 px-12">
      <div className={`${styles.title_center}`}>Regulasi</div>
      <div className="">
        {data &&
          data.map((regulasi) => (
            <div key={regulasi.id}>
              <div className="font-bold text-2xl text-ftitle mb-4">
                {regulasi.attributes.name}
              </div>
              {regulasi.attributes.regulasis.data.map((dataregulasi, index) => (
                <div key={dataregulasi.id} className="mb-4">
                  <div className="grid grid-cols-5 gap-4">
                    <div className="bg-base-blue rounded-md px-4">
                      <img
                        className="m-auto py-4"
                        src="/assets/folder.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-lg font-semibold text-ftitle col-span-3">
                      {dataregulasi.attributes.judul}
                    </div>
                    <a
                      href={dataregulasi.attributes.document}
                      className="w-full border text-center p-4 rounded-full text-ftitle border-ffield  bg-transparent font-semibold hover:bg-ffield"
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
