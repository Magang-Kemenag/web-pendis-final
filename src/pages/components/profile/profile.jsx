import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import Infografis from "../../../components/infografis/infografis";

function Profile() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/profiles?filters[Title][$eq]=Sejarah&populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <section className="mt-16 mb-16">
      <div className="profil grid grid-cols-2 max-md:grid-cols-1 gap-4 bg-base-blue p-12">
        <div className=" flex flex-col items-center">
          <Image
            src="/assets/Dirjen.png"
            height={300}
            width={300}
            className="rounded-lg"
            priority
          />
          <div className="bg-white rounded-sm p-4 buttom-0 text-ftitle text-center">
            <div className="text-lg font-semibold">DIREKTUR JENDERAL</div>
            <div>Prof. Dr. H. Muhammad Ali Ramdhani, S.TP., M.T</div>
          </div>
        </div>
        <div className="text-white">
          <div className="title text-4xl font-bold">Profil</div>
          {data && data[0] && (
            <p className=" mt-4 leading-9 line-clamp-6">
              {data[0].attributes.content}
            </p>
          )}

          <div className="flex flex-row-reverse mt-8">
            <Link
              href="/profil"
              className="flex bg-base-green p-6 max-md:px-4 max-md:py-3 max-sm:w-full rounded-full gap-2 hover:bg-dark-green"
            >
              <div className="max-sm:m-auto flex gap-2">
                <div className="text-[#ffffff] font-semibold">
                  Baca Selengkapnya
                </div>
                <div className="icon">
                  <img src="/assets/arrow-right-white.png" alt="" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
