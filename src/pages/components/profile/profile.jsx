import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import Infografis from "../infografis/infografis";

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
    <div>
      <div
        className="title text-base-blue text-4xl font-bold"
        data-aos="fade-down"
      >
        Profil
      </div>
      <p
        className="text-ftitle mt-4 leading-9 line-clamp-6"
        data-aos="fade-left"
      >
        {data && data[0].attributes.content}
      </p>

      <div className="flex flex-row-reverse mt-8">
        <Link
          href="/profil"
          className="flex bg-base-green p-6 max-md:px-4 max-md:py-3 max-sm:w-full rounded-full gap-2 hover:bg-dark-green"
          data-aos="fade-up"
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
  );
}

export default Profile;
