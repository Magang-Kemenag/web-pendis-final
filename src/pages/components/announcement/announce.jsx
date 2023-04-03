import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDateEn } from "@/utils/formatter";
import DataNull from "@/components/datanull/datanull";

export default function Announce() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/announcements?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="flex flex-col  h-full justify-between">
      <div className="flex flex-col gap-8">
        <div className="text-2xl text-base-blue font-bold">Pengumuman</div>
        <div className="w-full h-0.5 bg-ftitle"></div>
        <div className="grid grid-cols-1 gap-2">
          <Suspense fallback={<div>loading...</div>}>
            {data?.map((article, index) => (
              <div key={article.id}>
                <div
                  className="mt-6 grid grid-cols-3 items-start gap-2"
                  key={article.id}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI}${article.attributes.image.data[0].attributes.url}`}
                    alt={
                      article.attributes.image.data[0].attributes
                        .alternativeText
                    }
                    width={
                      article.attributes.image.data[0].attributes.formats
                        .thumbnail.width
                    }
                    height={
                      article.attributes.image.data[0].attributes.formats
                        .thumbnail.height
                    }
                    className="rounded-md"
                  />
                  <div className="col-span-2">
                    <div className="date text-sm">
                      {formatDateEn(article.attributes.updatedAt)}
                    </div>
                    <Link
                      href={`/media/announcements/${article.attributes.slug}`}
                      className="title pt-0 text-ftitle font-bold text-base hover:text-base-blue"
                    >
                      {article.attributes.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Suspense>
        </div>
      </div>
      <Link href="/media/announcements" className="flex gap-1 justify-end">
        <div className="font-bold text-base-blue">Lihat Selengkapnya</div>
        <img src="/assets/Arrow-forward.svg" alt="" />
      </Link>
    </section>
  );
}
