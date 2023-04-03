import { formatDateEn } from "@/utils/formatter";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

export default function PopularComponent() {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/articles?sort[0]=views%3Adesc&sort[1]=updatedAt%3Aasc&pagination[pageSize]=5&populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white rounded-xl border h-[550px] p-4 mt-12">
      <div className="border-b">
        <div className="text-ftitle text-lg font-bold py-2.5 px-2">Popular</div>
      </div>
      <Suspense fallback={<div>loading...</div>}>
        {data &&
          data.map((article) => (
            <div
              className="mt-6 grid grid-cols-3 items-start gap-2"
              key={article.id}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI}${article.attributes.image.data.attributes.url}`}
                alt={article.attributes.image.data.attributes.alternativeText}
                width={
                  article.attributes.image.data.attributes.formats.thumbnail
                    .width
                }
                height={
                  article.attributes.image.data.attributes.formats.thumbnail
                    .height
                }
                className="rounded-md"
              />
              <div className="col-span-2">
                <Link
                  href={`/media/articles/${article.attributes.slug}`}
                  className="title pt-0 text-ftitle font-bold text-base hover:text-base-blue"
                >
                  {article.attributes.title}
                </Link>
                <div className="date">
                  {formatDateEn(article.attributes.updatedAt)}
                </div>
              </div>
            </div>
          ))}
      </Suspense>
    </div>
  );
}
