import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

export default function DetailProfil({ title }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/profiles?filters[title][$eq]=${title}&populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {data &&
        data.map((profile) => (
          <div key={profile.id} className="flex flex-col gap-8">
            <div>
              <div className="title text-base-blue text-4xl font-bold">
                <p className="leading-8">{profile.attributes.title}</p>
              </div>
            </div>
            <div className="text-ftitle">
              <ReactMarkdown>{profile.attributes.content}</ReactMarkdown>
            </div>
          </div>
        ))}
    </div>
  );
}
