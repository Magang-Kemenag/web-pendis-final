import Link from "next/link";
import "aos/dist/aos.css";
import styles from "@/styles/Home.module.css";

export default function Page({ data }) {
  return (
    <div className={styles.base}>
      <div
        className={`${styles.title_center} ${styles.title_gap}`}
        data-aos="fade-down"
      >
        Unit Kerja
      </div>
      <div className="grid grid-cols-5 max-md:grid-cols-2 max-sm:grid-cols-1 mt-16 max-md:mt-8 gap-16 max-sm:gap-4">
        {data.map((unit, index) => (
          <Link
            key={unit.id}
            href={`/unit-kerja/${unit.attributes.slug}`}
            data-aos="fade-up"
            data-aos-delay={index * 100 + 100}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_STRAPI}${unit.attributes.image.data.attributes.url}`}
              alt=""
              className="rounded-lg m-auto"
            />
          </Link>
        ))}
      </div>
      <div className="flex mt-8 justify-center">
        <Link
          href="/profil/struktur"
          className="flex border-ffield border-2 py-5 px-9 rounded-full bg-transparent hover:bg-ffield"
          data-aos="fade-up"
        >
          <div className="max-sm:m-auto flex gap-2">
            <div className="text-ftitle font-semibold">Lihat Struktur</div>
            <div className="icon">
              <img src="/assets/arrow-right-black.svg" alt="" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/unit-kerjas?populate=*`
  );
  const units = await res.json();
  const data = units.data;

  return { props: { data } };
}
