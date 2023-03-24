import Link from "next/link";
import { Suspense } from "react";
import styles from "@/styles/Home.module.css";
import Reccent from "./components/reccent";

export default function Media({ data }) {
  return (
    <div className={styles.base}>
      <Link
        href="/media/buletin/form"
        className="absolute right-12 bottom-12 bg-base-green text-white border-2 py-3 px-6 rounded-full"
      >
        Tulis Buletin
      </Link>
      <Suspense fallback={<div>loading...</div>}>
        {data.map((category, delay = 100) => (
          <>
            <div className={styles.section_base} key={category.data}>
              <div className={styles.section_title} data-aos="fade-right">
                {category.attributes.name}
              </div>
              <Link
                href={`/media/${category.attributes.slug}`}
                className={styles.btn_standard}
                data-aos="fade-left"
              >
                Selengkapnya
              </Link>
            </div>
            <div className={styles.article_base}>
              <Reccent categories={category.attributes.name} type="articles" />
            </div>
          </>
        ))}
        <div>
          <div className={styles.section_base}>
            <div className={styles.section_title} data-aos="fade-right">
              Buletin
            </div>
            <Link
              href={`/media/buletin`}
              className={styles.btn_standard}
              data-aos="fade-left"
            >
              Selengkapnya
            </Link>
          </div>
          <div className={styles.article_base}>
            <Reccent type="buletins" />
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/categories?populate=*`
  );
  const articles = await res.json();
  const data = articles.data;

  return { props: { data } };
}
