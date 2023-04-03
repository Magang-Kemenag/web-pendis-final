import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import DataNull from "@/components/datanull/datanull";

export default function Beasiswa() {
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
    <div className="px-12 flex flex-col gap-12">
      <div className="text-3xl font-bold text-base-blue">Beasiswa</div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 justify-between">
        <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-8">
          {data &&
            data.map((beasiswa, index) => (
              <div key={beasiswa.id} className="rounded-lg flex flex-col gap-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI}${beasiswa.attributes.image.data.attributes.url}`}
                  alt={
                    beasiswa.attributes.image.data.attributes.alternativeText
                  }
                  width={250}
                  height={250}
                />
                <a
                  href={beasiswa.attributes.link}
                  className={styles.beasiswa_publikasi}
                >
                  {beasiswa.attributes.name}
                </a>
              </div>
            ))}
        </div>
        <div className="flex flex-col items-end gap-4 max-sm:hidden">
          <div className="logo bg-base-blue h-12 w-12 p-2 rounded-lg">
            <img src="/assets/toga.png" alt="" />
          </div>
          <div className="copy text-right w-80 text-ftitle">
            Direktorat Jenderal Pendidikan Islam mendukung pengembangan
            pendidikan dengan memberikan berbagai peluang bantuan beasiswa
          </div>
        </div>
      </div>
    </div>
  );
}
