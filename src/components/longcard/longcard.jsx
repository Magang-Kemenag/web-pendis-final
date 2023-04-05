import { formatDateEn } from "@/utils/formatter";
import Link from "next/link";
import Image from "next/image";

export default function LongCard({
  title,
  image,
  date,
  alt,
  slug,
  unit,
  type,
}) {
  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-1 items-start gap-2 border-2 rounded-lg p-2">
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI}${image}`}
        width={500}
        height={500}
        alt={alt}
        className={`rounded-lg w-full`}
        priority
      />
      <div className="col-span-2">
        <div className="text-ftitle">{unit}</div>
        <Link href={`/media/${type}/${slug}`}>
          <div className="text-ftitle text-xl font-bold">{title}</div>
        </Link>
        <div>{formatDateEn(date)}</div>
      </div>
    </div>
  );
}
