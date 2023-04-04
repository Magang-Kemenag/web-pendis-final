import { getArticleById } from "@/utils/services";
import Detail from "../../../../components/detail/detail";

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/articles`);
  const posts = await res.json();
  const data = posts.data;

  const paths = data.map((post) => ({
    params: { slug: post.attributes.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/articles?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const data = await res.json();
  const article = await getArticleById(data.data[0].id);
  return {
    props: { data: article },
  };
}

export default function Post({ data }) {
  console.log(data.data);
  return (
    <>
      <Detail
        title={data.attributes.title}
        date={data.attributes.updatedAt}
        unit={data.attributes.unit.data.attributes.name}
        writer={data.attributes.author.data.attributes.name}
        content={data.attributes.content}
        tag={data.attributes.tag}
        image={data.attributes.image.data.attributes.url}
        alt={data.attributes.image.data.attributes.alternativeText}
        relateds={data.attributes.relateds.data}
      />
    </>
  );
}
