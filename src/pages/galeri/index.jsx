import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Galeri({ data }) {
  const dataVideo = {
    id: 1,
    link: "https://www.youtube.com/embed/P9tKTxbgdkk",
  };
  return (
    <div className={styles.base}>
      <div className={styles.base_section}>
        <iframe
          width="664"
          height="279"
          src={dataVideo.link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg m-auto"
        ></iframe>
      </div>
      <section className={styles.base_section}>
        <div className="flex gap-6 lg:items-center mb-16 mt-8 max-md:mt-4 max-md:mb-8 max-sm:mt-2 max-sm:mb-4 max-md:flex-col">
          <div className="title text-base-blue text-4xl font-bold">Foto</div>
        </div>
        <div className="artikel grid grid-cols-3 gap-16 max-md:grid-cols-1">
          {data.map((image, index) => (
            <div
              className="artikel-content flex flex-col gap-6"
              key={image.id}
              data-aos="fade-up"
              data-aos-delay={index * 100 + 100}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI}${image.attributes.image.data.attributes.url}`}
                width={500}
                height={500}
                alt={image.attributes.alternativeText}
                priority
                className="rounded-lg"
              />
              <div className="font-bold text-lg text-ftitle">
                {image.attributes.description}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/images?populate=*`
  );
  const images = await res.json();
  const data = images.data;

  return { props: { data } };
}
