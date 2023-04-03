import Link from "next/link";
import styles from "@/styles/Home.module.css";
import React from "react";
import VideoProfil from "./components/videoprofil";
import ComponentsProfil from "./components/componentsprofil";
import StrukturComponent from "./struktur/components/strukturcomponent";

export default function Page({ data }) {
  return (
    <div className="flex flex-col gap-12">
      <VideoProfil />
      <div className="px-12">
        <StrukturComponent category="pendis" />
        <div className="flex mt-8 justify-center">
          <Link
            href={`/profil/struktur/pendis`}
            className="flex border-ffield border-2 py-5 px-9 rounded-full bg-transparent hover:bg-ffield"
          >
            <div className="max-sm:m-auto flex gap-2">
              <div className="text-ftitle font-semibold">
                Lihat Selengkapnya
              </div>
              <div className="icon">
                <img src="/assets/arrow-right-black.svg" alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <ComponentsProfil />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/profiles?populate=*`
  );
  const profiles = await res.json();
  const data = profiles.data;

  return { props: { data } };
}
