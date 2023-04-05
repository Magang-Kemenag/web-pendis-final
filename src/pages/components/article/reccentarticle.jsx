import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { formatDateEn } from "@/utils/formatter";
import Image from "next/image";
import DataNull from "@/components/datanull/datanull";

export default function ReccentArticle() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/articles?${process.env.NEXT_PUBLIC_STRAPI_RECCENT}&populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <section className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-8">
        <div className="text-2xl text-base-blue font-bold">Terkini</div>
        <div className="w-full h-0.5 bg-ftitle"></div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2">
          <Suspense fallback={<div>loading...</div>}>
            {data && data.length > 0 ? (
              data.map((article) => (
                <div key={article.id}>
                  <div
                    className="mt-6 grid grid-cols-3 max-sm:grid-cols-1 items-start  gap-2"
                    key={article.id}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI}${article.attributes.image.data.attributes.url}`}
                      alt={
                        article.attributes.image.data.attributes.alternativeText
                      }
                      width={
                        article.attributes.image.data.attributes.formats
                          .thumbnail.width
                      }
                      height={
                        article.attributes.image.data.attributes.formats
                          .thumbnail.height
                      }
                      className="rounded-md w-full"
                      priority
                    />
                    <div className="col-span-2">
                      <div className="date text-sm">
                        {formatDateEn(article.attributes.updatedAt)}
                      </div>
                      <Link
                        href={`/media/articles/${article.attributes.slug}`}
                        className="title pt-0 text-ftitle font-bold text-base hover:text-base-blue"
                      >
                        {article.attributes.title}
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <DataNull />
            )}
          </Suspense>
        </div>
      </div>
      <Link href="/media/artikel" className="flex gap-1 justify-end items-end">
        <div className="font-bold text-base-blue">Lihat Selengkapnya</div>
        <img src="/assets/Arrow-forward.svg" alt="" />
      </Link>
    </section>
  );
}
