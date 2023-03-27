import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Page({ data }) {
  console.log(data);
  return (
    <div className={styles.base}>
      {data.map((struktur) => (
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI}${struktur.attributes.Image.data.attributes.url}`}
          width={500}
          height={500}
          alt=""
        />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/strukturs?populate=*`
  );
  const articles = await res.json();
  const data = articles.data;
  console.log(data);

  return { props: { data } };
}
