import Card from "@/components/card/card";
import CardGaleri from "@/components/galeri/cardgaleri";
import { useEffect, useState } from "react";

export default function Galeries({ searchParams, type }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let search = "";
    let page = "";
    let url = "";

    if (searchParams?.query) {
      search = `&filters[title][$containsi]=${searchParams.query}`;
    }

    if (searchParams?.page) {
      page = `&pagination[page]=${searchParams.page}&pagination[pageSize]=9`;
    }

    url = `${process.env.NEXT_PUBLIC_STRAPI_API}/${type}?${search}&populate=*`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, [searchParams]);

  if (data && Array.from(data).length > 0) {
    return data.map((video, index) => (
      <div key={video.id}>
        <CardGaleri
          image={video.attributes.image.data.attributes.url}
          alt={video.attributes.image.data.attributes.alternativeText}
          title={video.attributes.title}
          slug={video.attributes.slug}
        />
      </div>
    ));
  }
  return <div>Is Empty</div>;
}
