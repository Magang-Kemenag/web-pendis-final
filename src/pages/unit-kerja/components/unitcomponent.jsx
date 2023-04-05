import Link from "next/link";
import "aos/dist/aos.css";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import DataNull from "@/components/datanull/datanull";
export default function UnitComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/unit-kerjas?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <div className={`${styles.title_center}`}>Unit Kerja</div>
      <div className="grid grid-cols-3 gap-4">
        {data && data.length > 0 ? (
          data.map((unit, index) => (
            <Link key={unit.id} href={`/unit-kerja/${unit.attributes.slug}`}>
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI}${unit.attributes.image.data.attributes.url}`}
                alt=""
                className="rounded-lg m-auto"
              />
            </Link>
          ))
        ) : (
          <DataNull />
        )}
      </div>
      <div className="flex mt-8 justify-center">
        <Link
          href="/profil/struktur"
          className="flex border-ffield border-2 py-5 px-9 rounded-full bg-transparent hover:bg-ffield"
        >
          <div className="max-sm:m-auto flex gap-2">
            <div className="text-ftitle font-semibold">Lihat Struktur</div>
            <div className="icon">
              <img src="/assets/arrow-right-black.svg" alt="" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
