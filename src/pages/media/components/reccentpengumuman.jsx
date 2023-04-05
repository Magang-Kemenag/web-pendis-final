import DataNull from "@/components/datanull/datanull";
import LongCard from "@/components/longcard/longcard";
import { formatDateEn } from "@/utils/formatter";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ReccentPengumuman({ type }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/announcements?sort[0]=updatedAt%3Adesc&sort[1]=title%3Adesc&pagination[page]=1&pagination[pageSize]=3&populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <div className="font-bold text-base-blue text-3xl">Pengumuman</div>
      <div className="flex flex-col gap-2">
        {data && data.length > 0 ? (
          data.map((announce) => (
            <LongCard
              title={announce.attributes.title}
              image={announce.attributes.image.data[0].attributes.url}
              date={announce.attributes.updatedAt}
              alt={announce.attributes.image.data[0].attributes.alternativeText}
              slug={announce.attributes.slug}
              unit={announce.attributes.unit.data.attributes.name}
              type={type}
            />
          ))
        ) : (
          <DataNull />
        )}
      </div>
      <div className="flex mt-8 justify-center">
        <Link
          href={`/media/${type}`}
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
