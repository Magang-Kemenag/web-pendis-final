import LongCard from "@/components/longcard/longcard";
import { getArticleById } from "@/utils/services";
import Detail from "../../../../components/detail/detail";

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/articles`);
  const posts = await res.json();
  const data = posts.data;
  console.log(data);

  const paths = data.map((post) => ({
    params: {
      slug: "guru",
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/articles?filters[tag][$containsi]=${params.slug}&populate=*`
  );
  const data = await res.json();
  return {
    props: { data: data },
  };
}

export default function Post({ data }) {
  console.log(data);
  const articles = data.data;
  return (
    <div>
      {articles.map((article) => (
        <LongCard
          title={article.attributes.title}
          image={article.attributes.image.data.attributes.url}
          date={article.attributes.updatedAt}
          alt={article.attributes.image.data.attributes.alternativeText}
          slug={article.attributes.slug}
          type="articles"
        />
      ))}
    </div>
  );
}
