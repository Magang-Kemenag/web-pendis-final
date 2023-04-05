import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import Pagination from "@/components/pagination/pagination";
import YouTube from "react-youtube";
import CardGaleri from "@/components/galeri/cardgaleri";
import Link from "next/link";
import DataNull from "@/components/datanull/datanull";

export default function VideoComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/videos?sort[0]=updatedAt%3Adesc&sort[1]=title%3Adesc&pagination[page]=1&pagination[pageSize]=3&populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <section className="flex flex-col gap-4">
        <div className="title text-base-blue text-4xl font-bold">Video</div>
        <div className="artikel grid grid-cols-2 max-md:grid-cols-1 gap-4">
          {data && data.length > 0 ? (
            data.map((video) => (
              <div key={video.id}>
                <CardGaleri
                  image={video.attributes.image.data.attributes.url}
                  alt={video.attributes.image.data.attributes.alternativeText}
                  title={video.attributes.title}
                  slug={video.attributes.slug}
                />
              </div>
            ))
          ) : (
            <DataNull />
          )}
        </div>
      </section>
      <div className="flex mt-8 justify-center">
        <Link
          href={`/galeri/video`}
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
