import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SidemenuStruktur() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const pathname = usePathname();
  const path = pathname.split("/");
  console.log(path[3]);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/struktur-categories`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col gap-2 bg-white p-4 rounded-md border">
      <div className="text-base-blue font-bold text-xl text-center">
        Struktur Organisasi
      </div>
      <div className="grid grid-cols-2 gap-4">
        {data &&
          data.map((struktur) =>
            struktur.attributes.slug === path[3] ? (
              <Link
                key={struktur.id}
                href={`/profil/struktur/${struktur.attributes.slug}`}
                className="px-6 py-2 border rounded-full text-center bg-base-green text-white"
              >
                {struktur.attributes.name}
              </Link>
            ) : (
              <Link
                key={struktur.id}
                href={`/profil/struktur/${struktur.attributes.slug}`}
                className="text-ftitle px-6 py-2 border rounded-full text-center hover:bg-base-green hover:text-white"
              >
                {struktur.attributes.name}
              </Link>
            )
          )}
      </div>
    </div>
  );
}
