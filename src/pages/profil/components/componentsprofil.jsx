import Link from "next/link";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ComponentsProfil() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/profiles?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="flex flex-col gap-12 px-12 bg-white py-12">
      {data &&
        data.map((profile) => (
          <>
            <div key={profile.id} className="flex flex-col gap-8">
              <div className="">
                <div className="title text-base-blue text-4xl font-bold">
                  {profile.attributes.title}
                </div>
              </div>
              <div className="text-ftitle line-clamp-6 leading-9">
                <ReactMarkdown>{profile.attributes.content}</ReactMarkdown>
              </div>
            </div>
            <div>
              <Link
                href={`/profil/${profile.attributes.slug}`}
                className="flex justify-end gap-3 mt-9"
              >
                <div className="text-base-blue font-bold text-base">
                  Baca Selengkapnya
                </div>
                <img src="/assets/Arrow-forward.svg" alt="" />
              </Link>
            </div>
          </>
        ))}
    </div>
  );
}
