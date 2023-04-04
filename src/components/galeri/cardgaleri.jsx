import Image from "next/image";
import Link from "next/link";

export default function CardGaleri({ image, alt, title, slug }) {
  return (
    <div className="artikel-content flex flex-col gap-6">
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI}${image}`}
        width={500}
        height={500}
        alt={alt}
        className={`rounded-lg w-full h-[180px]`}
        priority
      />
      <Link href={`/galeri/video/${slug}`}>
        <div className="font-bold text-lg text-ftitle">{title}</div>
      </Link>
    </div>
  );
}
