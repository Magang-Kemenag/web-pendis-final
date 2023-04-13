import Image from "next/image";
import { formatDateEn } from "@/utils/formatter";
import styles from "@/styles/Home.module.css";
import React from "react";
import ReactMarkdown from "react-markdown";
import ArticlePopular from "../../pages/media/components/articlepopular";
import RelatedArticle from "../../pages/media/components/relatedarticle";
import YouTube from "react-youtube";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import Share from "@/pages/media/components/share";

const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }
  return parseJSON(resp).then((resp) => {
    throw resp;
  });
};
const headers = {
  "Content-Type": "application/json",
};
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
  id,
}) {
  const tags = tag ? tag.split(",") : [];
  return (
    <div className="px-12">
      <div className="text-ftitle flex flex-col">
        <div className="flex flex-col">
          <div className="title font-bold text-4xl">{title}</div>
          <div className="date mt-8 text-xs">{formatDateEn(date)}</div>
          {category === "video" ? null : (
            <div className="flex mt-4 gap-14 text-base font-semibold max-md:gap-8 max-sm:flex-col max-sm:gap-4">
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
          )}
        </div>
        <div className="content mt-16 grid grid-cols-3 gap-6 max-md:grid-cols-1 max-md:grid-rows-2">
          <div className="artikel-content col-span-2 max-md:col-span-1">
            <div className="rounded-lg" alt="">
              {category === "video" ? (
                <YouTube
                  videoId={id}
                  opts={{
                    height: "390",
                    width: "640",
                    playerVars: {
                      autoplay: 0,
                    },
                  }}
                />
              ) : (
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI}${image}`}
                  alt={alt}
                  width={500}
                  height={500}
                  priority
                  className="w-full rounded-lg"
                />
              )}
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
                    <Link href={`/media/tags/${tag}`} key={tag.id}>
                      <div className="bg-white border rounded-md px-2 hover:bg-base-green hover:text-white">
                        #{tag}
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <div className="side-menu">
            <Share />
            <ArticlePopular />
          </div>
        </div>
      </div>
      {relateds && relateds.length > 0 && (
        <div className="mt-32 flex flex-col gap-8">
          <div className={styles.section_title}>Artikel Terkait</div>
          <div className={styles.article_base}>
            {relateds.map((related) => (
              <div key={related.id}>
                <RelatedArticle slug={related.attributes.slug} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
