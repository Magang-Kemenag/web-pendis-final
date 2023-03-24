import { formatDateEn } from "@/utils/formatter";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ArticlePopular() {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/articles?sort[0]=views%3Adesc&sort[1]=updatedAt%3Aasc&pagination[pageSize]=3&populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="postingan-terkait mt-8">
      <div className="text-2xl font-bold">Populer</div>
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
                article.attributes.image.data.attributes.formats.thumbnail.width
              }
              height={
                article.attributes.image.data.attributes.formats.thumbnail
                  .height
              }
              className="rounded-md"
            />
            <div className="col-span-2">
              <Link
                href={`/media/${article.attributes.category.data.attributes.slug}/${article.attributes.slug}`}
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
    </div>
  );
}
