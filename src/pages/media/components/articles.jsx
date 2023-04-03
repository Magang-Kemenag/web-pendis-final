import Card from "@/components/card/card";
import { useEffect, useState } from "react";

export default function Articles({ category, searchParams, type }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let search = "";
    let un = "";
    let page = "";
    let url = "";

    if (searchParams?.query) {
      search = `&filters[title][$containsi]=${searchParams.query}`;
    }

    if (searchParams?.unit) {
      un = `&filters[unit][slug][$eq]=${searchParams.unit}`;
    }

    if (searchParams?.page) {
      page = `&pagination[page]=${searchParams.page}&pagination[pageSize]=9`;
    }

    if (type == "articles" || type == "announcements") {
      url = `${process.env.NEXT_PUBLIC_STRAPI_API}/${type}?${un}${search}${page}&populate=*`;
    } else if (type == "buletins" || type == "kolom-opinis") {
      url = `${process.env.NEXT_PUBLIC_STRAPI_API}/${type}?${search}&populate=*`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, [searchParams]);

  if (data && Array.from(data).length > 0) {
    return data.map((article, index) => {
      if (type == "articles") {
        return (
          <div key={article.id}>
            <Card
              image={article.attributes.image.data.attributes.url}
              title={article.attributes.title}
              date={article.attributes.updatedAt}
              slug={article.attributes.slug}
              alt={article.attributes.image.data.attributes.alternativeText}
              unit={article.attributes.unit.data.attributes.name}
              type={type}
            />
          </div>
        );
      } else if (type == "announcements") {
        return (
          <div key={article.id}>
            <Card
              image={article.attributes.image.data[0].attributes.url}
              title={article.attributes.title}
              date={article.attributes.updatedAt}
              slug={article.attributes.slug}
              alt={article.attributes.image.data[0].attributes.alternativeText}
              unit={article.attributes.unit.data.attributes.name}
              type={type}
            />
          </div>
        );
      } else if (type == "buletins" || type == "kolom-opinis") {
        return (
          <div key={article.id}>
            <Card
              image={article.attributes.image.data.attributes.url}
              title={article.attributes.title}
              date={article.attributes.updatedAt}
              slug={article.attributes.slug}
              alt={article.attributes.image.data.attributes.alternativeText}
              type={type}
            />
          </div>
        );
      }
    });
  }
  return <div>Is Empty</div>;
}
