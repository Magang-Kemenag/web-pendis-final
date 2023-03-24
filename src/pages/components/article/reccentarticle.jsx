import Card from "@/components/card/card";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

export default function ReccentArticle() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/articles?${process.env.NEXT_PUBLIC_STRAPI_RECCENT}&populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <section>
      <div className={styles.section_base}>
        <div className={styles.section_title} data-aos="fade-right">
          Terkini
        </div>
        <Link
          href="/media"
          className={styles.btn_standard}
          data-aos="fade-left"
        >
          Selengkapnya
        </Link>
      </div>
      <div className={styles.article_base}>
        <Suspense fallback={<div>loading...</div>}>
          {data?.map((article, index) => (
            <div
              key={article.id}
              data-aos="fade-up"
              data-aos-delay={index * 100 + 100}
            >
              <Card
                image={article.attributes.image.data.attributes.url}
                title={article.attributes.title}
                category={article.attributes.category.data.attributes.name}
                slugcategory={article.attributes.category.data.attributes.slug}
                date={article.attributes.updatedAt}
                slug={article.attributes.slug}
                alt={article.attributes.image.data.attributes.alternativeText}
              />
            </div>
          ))}
        </Suspense>
      </div>
      <Link href="/media">
        <div className={styles.btn_standard_responsive}>Selengkapnya</div>
      </Link>
    </section>
  );
}
