import { formatDateEn } from "@/utils/formatter";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Buletin() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/buletins?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <div className=" bg-white rounded-xl border">
      <div className="border-b">
        <div className="text-ftitle text-lg font-bold py-2.5 px-2">Buletin</div>
      </div>
      <div className="overflow-y-auto overflow-x-hidden mb-2">
        {data &&
          data.map((buletin) => (
            <div className="flex gap-2 mx-2 mt-2">
              <Image
                height={120}
                width={120}
                priority
                src={`${process.env.NEXT_PUBLIC_STRAPI}${buletin.attributes.image.data.attributes.url}`}
                className="rounded-md"
              />
              <div>
                <div className="font-bold text-ftitle text-lg w-full">
                  {buletin.attributes.title}
                </div>
                <div className="text-fbody text-sm">
                  {formatDateEn(buletin.attributes.updatedAt)}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
