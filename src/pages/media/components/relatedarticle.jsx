import Card from "@/components/card/card";
import { Suspense, useEffect, useState } from "react";

export default function RelatedArticle({ slug }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/articles?filters[slug][$eq]=${slug}&populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <section>
      <Suspense fallback={<div>loading...</div>}>
        {data?.map((article, index) => (
          <div
            key={article.id}
            data-aos="fade-up"
            data-aos-delay={index * 100 + 100}
          >
            <Card
              image={article.attributes.image.data.attributes.url}
              title={article.attributes.title}
              category={article.attributes.category.data.attributes.name}
              slugcategory={article.attributes.category.data.attributes.slug}
              date={article.attributes.updatedAt}
              slug={article.attributes.slug}
              alt={article.attributes.image.data.attributes.alternativeText}
            />
          </div>
        ))}
      </Suspense>
    </section>
  );
}
