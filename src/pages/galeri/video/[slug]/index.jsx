import { getArticleById } from "@/utils/services";
import Detail from "../../../../components/detail/detail";

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/videos`);
  const posts = await res.json();
  const data = posts.data;

  const paths = data.map((post) => ({
    params: { slug: post.attributes.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params.slug);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/videos?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: { data: data.data[0] },
  };
}

export default function Post({ data }) {
  console.log(data);
  return (
    <>
      <Detail
        title={data.attributes.title}
        date={data.attributes.updatedAt}
        content={data.attributes.content}
        tag={data.attributes.tag}
        image={data.attributes.image.data.attributes.url}
        alt={data.attributes.image.data.attributes.alternativeText}
        id={data.attributes.link.split("/")[3]}
        category="video"
      />
    </>
  );
}
