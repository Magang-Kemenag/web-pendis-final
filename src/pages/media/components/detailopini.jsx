import { formatDateEn } from "@/utils/formatter";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import ArticlePopular from "./articlepopular";

export default function DetailOpini({
  title,
  date,
  unit,
  category,
  content,
  tag,
  image,
  alt,
  link,
}) {
  const tags = tag ? tag.split(",") : [];

  return (
    <div className="px-12">
      <div className="text-ftitle flex flex-col">
        <div className="flex flex-col">
          <div className="title font-bold text-4xl">{title}</div>
          <div className="date mt-8 text-xs">{formatDateEn(date)}</div>
          <div className="flex mt-4 gap-14 text-base font-semibold max-md:gap-8 max-sm:flex-col max-sm:gap-4">
            {category === "Buletin" ? null : (
              <div className="flex gap-2">
                <img src="/assets/unit-kerja.svg" alt="" />
                <div>{unit}</div>
              </div>
            )}
          </div>
        </div>
        <div className="content mt-16 grid grid-cols-3 gap-6 max-md:grid-cols-1 max-md:grid-rows-2">
          <div className="artikel-content col-span-2 max-md:col-span-1">
            <div className="rounded-lg" alt="">
              {image.map((img) => (
                <div key={img.id}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI}${img.attributes.url}`}
                    alt={alt}
                    width={500}
                    height={500}
                    className="w-full rounded-lg"
                    priority
                  />
                </div>
              ))}
            </div>
            <div className="mt-16 flex flex-col gap-3">
              <div>
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
            <div className="flex justify-center align-middle">
              <a
                href={link}
                className="btn bg-base-blue border-none text-white rounded-full"
              >
                Button
              </a>
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
    </div>
  );
}
