import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilMenu() {
  const pathname = usePathname();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const path = pathname.split("/");

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/profiles`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="flex flex-col gap-2 bg-white p-4 rounded-md border">
      <div className="text-base-blue font-bold text-xl text-center">Profil</div>
      <Link href="/profil/struktur">
        {path[2] === "struktur" ? (
          <div className="border rounded-lg p-4 bg-base-green text-white text-base">
            <div>Struktur Organisasi</div>
          </div>
        ) : (
          <div className="bg-white border rounded-lg text-ftitle p-4 hover:bg-base-green hover:text-white text-base">
            <div>Struktur Organisasi</div>
          </div>
        )}
      </Link>
      {data &&
        data.map((profile) => (
          <Link href={`/profil/${profile.attributes.slug}`}>
            {profile.attributes.slug === path[2] ? (
              <div className="border rounded-lg p-4 bg-base-green text-white text-base">
                <div>{profile.attributes.title}</div>
              </div>
            ) : (
              <div className="bg-white border rounded-lg text-ftitle p-4 hover:bg-base-green hover:text-white text-base">
                <div>{profile.attributes.title}</div>
              </div>
            )}
          </Link>
        ))}
    </div>
  );
}
