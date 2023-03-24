import Image from "next/image";
import { formatDateEn } from "@/utils/formatter";
import styles from "@/styles/Home.module.css";
import React from "react";
import ReactMarkdown from "react-markdown";
import ArticlePopular from "./articlepopular";
import RelatedArticle from "./relatedarticle";

export default function Detail({
  title,
  date,
  unit,
  category,
  writer,
  content,
  tag,
  image,
  alt,
  relateds,
}) {
  const tags = tag ? tag.split(",") : [];

  return (
    <div className={styles.base}>
      <div className="text-ftitle flex flex-col">
        <div className="flex flex-col">
          <div className="title font-bold text-4xl">{title}</div>
          <div className="date mt-8 text-xs">{formatDateEn(date)}</div>
          <div className="flex mt-4 gap-14 text-base font-semibold max-md:gap-8 max-sm:flex-col max-sm:gap-4">
            <div className="flex gap-2">
              <img src="/assets/jenis.svg" alt="" />
              <div>{category}</div>
            </div>
            {category === "Buletin" ? null : (
              <div className="flex gap-2">
                <img src="/assets/unit-kerja.svg" alt="" />
                <div>{unit}</div>
              </div>
            )}
            <div className="flex gap-2">
              <img src="/assets/penulis.svg" alt="" />
              <div>{writer}</div>
            </div>
          </div>
        </div>
        <div className="content mt-16 grid grid-cols-3 gap-6 max-md:grid-cols-1 max-md:grid-rows-2">
          <div className="artikel-content col-span-2 max-md:col-span-1">
            <div className="rounded-lg" alt="">
              <picture>
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI}${image}`}
                  alt={alt}
                  width={500}
                  height={500}
                  className="w-full rounded-lg"
                />
              </picture>
            </div>
            <div className="mt-16 flex flex-col gap-3">
              <div>
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
            <div className="tag flex mt-16">
              <img src="" alt="" />
              <div className="mr-4 font-bold">Tag:</div>
              <div className="flex flex-row-5 gap-2">
                {tag &&
                  tags.map((tag) => (
                    <div className="bg-white border rounded-md px-2">
                      #{tag}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="side-menu">
            <div className="share">
              <div className="text-2xl font-bold">Bagikan Postingan ini</div>
              <div className="flex gap-5 mt-6">
                <img src="/assets/facebook-fill.svg" alt="" />
                <img src="/assets/twitter-fill.svg" alt="" />
                <img src="/assets/youtube-fill.svg" alt="" />
                <img src="/assets/instagram-fill.svg" alt="" />
              </div>
            </div>
            <ArticlePopular />
          </div>
        </div>
      </div>
      {relateds && (
        <div className="mt-32 flex flex-col gap-8">
          <div className={styles.section_title} data-aos="fade-right">
            Artikel Terkait
          </div>
          <div className={styles.article_base}>
            {relateds.map((related, index) => (
              <div
                key={related.id}
                data-aos="fade-up"
                data-aos-delay={index * 100 + 100}
              >
                <RelatedArticle slug={related.attributes.slug} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
