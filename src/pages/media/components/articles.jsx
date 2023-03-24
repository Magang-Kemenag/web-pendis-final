import Card from "@/components/card/card";
import { useEffect, useState } from "react";

export default function Articles({ category, searchParams, type }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let filter = `filters[category][slug][$eq]=${category}`;
    let search = "";
    let un = "";
    let url = "";

    if (searchParams?.query) {
      search = `&filters[title][$containsi]=${searchParams.query}`;
    }

    if (searchParams?.unit) {
      un = `&filters[unit][slug][$eq]=${searchParams.unit}`;
    }

    if (type == "articles") {
      url = `${process.env.NEXT_PUBLIC_STRAPI_API}/${type}?${filter}${un}${search}&populate=*`;
    } else if (type == "buletins") {
      url = `${process.env.NEXT_PUBLIC_STRAPI_API}/${type}?${search}&populate=*`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  if (data && Array.from(data).length > 0) {
    return data.map((article, index) => {
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
      } else if (type == "buletins") {
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
  return <div>Is Empty</div>;
}
