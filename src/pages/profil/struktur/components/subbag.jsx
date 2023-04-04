import Image from "next/image";
import { useEffect, useState } from "react";

export default function Subbag({ id }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/strukturs?filters[id][$eq]=${id}&populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    data &&
    data.map((struktur) => (
      <div className="flex flex-col gap-4 items-center">
        <div className="font-bold text-lg text-ftitle text-center h-10">
          {struktur.attributes.title}
        </div>
        <div className="flex flex-col bg-white p-4 rounded-lg gap-4 shadow-md">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI}${struktur.attributes.image.data.attributes.url}`}
            height={500}
            width={500}
            className="rounded-md"
            alt={struktur.attributes.image.data.attributes.alternativeText}
            priority
          />
          <div className="text-center text-ftitle font-semibold h-20">
            {struktur.attributes.name}
          </div>
        </div>
      </div>
    ))
  );
}
