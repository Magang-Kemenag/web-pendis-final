import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Regulasi from "./components/regulasi";

export default function Page({ data }) {
  return (
    <div className={styles.base}>
      <section>
        <div
          className={`${styles.title_center} ${styles.title_gap}`}
          data-aos="fade-down"
        >
          Publikasi
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
          {data &&
            data.map((publikasi, index) => (
              <div
                key={publikasi.id}
                className="rounded-lg flex items-center gap-3 border"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 100}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI}${publikasi.attributes.image.data.attributes.url}`}
                  alt={
                    publikasi.attributes.image.data.attributes.alternativeText
                  }
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
                <a
                  href={publikasi.attributes.link}
                  className="text-center font-semibold text-ftitle text-lg hover:text-base-blue"
                >
                  {publikasi.attributes.name}
                </a>
              </div>
            ))}
        </div>
      </section>
      <Regulasi />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/publikasis?populate=*`
  );
  const publikasi = await res.json();
  const data = publikasi.data;

  return { props: { data } };
}
