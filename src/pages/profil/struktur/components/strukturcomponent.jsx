import Image from "next/image";
import { useEffect, useState } from "react";
import Subbag from "./subbag";

export default function StrukturComponent({ category }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/strukturs?filters[struktur_category][slug][$eq]=${category}&populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center gap-12">
        <div className="font-bold text-3xl text-center text-base-blue">
          {data &&
            data[0]?.attributes?.struktur_category?.data?.attributes?.title}
        </div>
        {data &&
          data.map((struktur) => {
            if (struktur.attributes.level === "level1") {
              return (
                <div
                  key={struktur.id}
                  className="flex flex-col gap-4 items-center"
                >
                  <div className="font-bold text-2xl text-ftitle">
                    {struktur.attributes.title}
                  </div>
                  <div className="flex flex-col bg-white p-4 w-48 rounded-lg gap-4 shadow-md">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI}${struktur.attributes.image.data.attributes.url}`}
                      height={500}
                      width={500}
                      className="rounded-md"
                      alt={
                        struktur.attributes.image.data.attributes
                          .alternativeText
                      }
                      priority
                    />
                    <div className="text-center text-ftitle font-semibold">
                      {struktur.attributes.name}
                    </div>
                  </div>
                </div>
              );
            }
            if (struktur.attributes.level === "level2") {
              return (
                <div
                  key={struktur.id}
                  className="flex flex-col gap-4 items-center"
                >
                  <div className="font-bold text-2xl text-ftitle">
                    {struktur.attributes.title}
                  </div>
                  <div className="flex flex-col bg-white p-4 w-48 rounded-lg gap-4 shadow-md">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI}${struktur.attributes.image.data.attributes.url}`}
                      height={500}
                      width={500}
                      className="rounded-md"
                      alt={
                        struktur.attributes.image.data.attributes
                          .alternativeText
                      }
                      priority
                    />
                    <div className="text-center text-ftitle font-semibold">
                      {struktur.attributes.name}
                    </div>
                  </div>
                </div>
              );
            }
          })}

        <div className="flex gap-4 items-start">
          {data &&
            data.map((struktur) => {
              if (struktur.attributes.level === "level3") {
                return (
                  <div
                    key={struktur.id}
                    className="flex flex-col gap-4 items-center"
                  >
                    <div className="font-bold text-lg text-ftitle text-center h-10">
                      {struktur.attributes.title}
                    </div>
                    <div className="flex flex-col bg-white p-4 rounded-lg gap-4 shadow-md">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI}${struktur.attributes.image.data.attributes.url}`}
                        height={500}
                        width={500}
                        className="rounded-md"
                        alt={
                          struktur.attributes.image.data.attributes
                            .alternativeText
                        }
                        priority
                      />
                      <div className="text-center text-ftitle font-semibold h-20">
                        {struktur.attributes.name}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
        {data &&
          data.map((struktur) => {
            if (struktur.attributes.level === "bagian") {
              return (
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-1 flex gap-4">
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
                          alt={
                            struktur.attributes.image.data.attributes
                              .alternativeText
                          }
                          priority
                        />
                        <div className="text-center text-ftitle font-semibold h-20">
                          {struktur.attributes.name}
                        </div>
                      </div>
                    </div>
                    <div className="bg-ftitle h-auto w-1"></div>
                  </div>
                  <div className="grid col-span-3 grid-cols-4 gap-4">
                    {struktur.attributes.subbagians.data.map((subbag) => (
                      <Subbag id={subbag.id} />
                    ))}
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
