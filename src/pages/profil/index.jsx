import Link from "next/link";
import styles from "@/styles/Home.module.css";
import stylesprofil from "./profile.module.css";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function Page({ data }) {
  return (
    <div className={styles.base}>
      {data &&
        data.map((profile) => (
          <>
            <div key={profile.id}>
              <div className="mb-16 mt-8 max-md:mt-4 max-md:mb-8 max-sm:mt-2 max-sm:mb-4">
                <div
                  className="title text-base-blue text-4xl font-bold"
                  data-aos="fade-down"
                >
                  {profile.attributes.title}
                </div>
              </div>
              <div
                className="text-ftitle line-clamp-6 leading-9"
                data-aos="fade-left"
              >
                <ReactMarkdown>{profile.attributes.content}</ReactMarkdown>
              </div>
            </div>
            <div data-aos="fade-up">
              <Link
                href={`/profil/${profile.attributes.slug}`}
                className={stylesprofil.link}
              >
                <div className={stylesprofil.text_link}>Baca Selengkapnya</div>
                <img src="/assets/Arrow-forward.svg" alt="" />
              </Link>
            </div>
          </>
        ))}
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
