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
          <div key={profile.id}>
            <div className="mb-16 mt-8 max-md:mt-4 max-md:mb-8 max-sm:mt-2 max-sm:mb-4">
              <div className="title text-base-blue text-4xl font-bold">
                <p className="leading-8">{profile.attributes.title}</p>
              </div>
            </div>
            <ReactMarkdown>{profile.attributes.content}</ReactMarkdown>
          </div>
        ))}
    </div>
  );
}
