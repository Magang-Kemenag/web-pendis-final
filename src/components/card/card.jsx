import { formatDateEn } from "@/utils/formatter";
import Link from "next/link";
import Image from "next/image";
import stylescard from "./card.module.css";

export default function Card({ title, image, date, alt, slug, unit, type }) {
  console.log(image);
  return (
    <div className="flex flex-col gap-6 pt-4 px-4 pb-8 bg-white rounded-lg shadow-sm border">
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI}${image}`}
        width={500}
        height={500}
        alt={alt}
        className={`rounded-lg w-full h-[180px] ${stylescard.img}`}
      />
      <div className="flex justify-between items-center text-fbody text-xs">
        <div className="flex gap-2 border px-4 py-2 rounded-full">
          <img src="/assets/book.png" alt="" />
          <div className="text-base">{unit}</div>
        </div>
        <div>{formatDateEn(`${date}`)}</div>
      </div>

      <Link href={`/media/${type}/${slug}`}>
        <div className="title text-ftitle text-xl font-bold h-16 hover:text-base-blue">
          {title}
        </div>
      </Link>
    </div>
  );
}
