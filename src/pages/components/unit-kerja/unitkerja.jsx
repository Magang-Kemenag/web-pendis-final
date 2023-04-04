import DataNull from "@/components/datanull/datanull";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UnitKerja() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/unit-kerjas?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="px-12">
      <div className="grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 mt-16 max-md:mt-8 gap-16 max-sm:gap-4">
        <>
          {data &&
            data.map((unit, index) => (
              <Link key={unit.id} href={`/unit-kerja/${unit.attributes.slug}`}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI}${unit.attributes.image.data.attributes.url}`}
                  alt=""
                  className="rounded-lg"
                  priority
                />
              </Link>
            ))}
        </>
      </div>
    </div>
  );
}
