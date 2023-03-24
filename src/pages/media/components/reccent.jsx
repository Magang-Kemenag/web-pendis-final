import Card from "@/components/card/card";
import React, { useEffect, useState } from "react";

export default function Reccent({ categories, type }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let url = "";
    if (type == "articles") {
      url = `${process.env.NEXT_PUBLIC_STRAPI_API}/${type}?${process.env.NEXT_PUBLIC_STRAPI_RECCENT}&filters[category][name][$eq]=${categories}&populate=*`;
    } else if (type == "buletins") {
      url = `${process.env.NEXT_PUBLIC_STRAPI_API}/${type}?${process.env.NEXT_PUBLIC_STRAPI_RECCENT}&populate=*`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return data?.map((article, index) => {
    if (type == "articles") {
      return (
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
      );
    } else {
      return (
        <div
          key={article.id}
          data-aos="fade-up"
          data-aos-delay={index * 100 + 100}
        >
          <Card
            image={article.attributes.image.data.attributes.url}
            title={article.attributes.title}
            category="buletin"
            slugcategory="buletin"
            date={article.attributes.updatedAt}
            slug={article.attributes.slug}
            alt={article.attributes.image.data.attributes.alternativeText}
          />
        </div>
      );
    }
  });
}
