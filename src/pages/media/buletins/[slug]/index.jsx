import Detail from "../../../../components/detail/detail";

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/buletins`);
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
    `${process.env.NEXT_PUBLIC_STRAPI_API}/buletins?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const data = await res.json();
  return {
    props: { data: data },
  };
}
export default function Page({ data }) {
  const article = data.data;
  return (
    <div>
      <Detail
        title={article[0].attributes.title}
        date={article[0].attributes.updatedAt}
        category="Buletin"
        writer={article[0].attributes.writer}
        content={article[0].attributes.content}
        tag={article[0].attributes.tag}
        image={article[0].attributes.image.data.attributes.url}
        alt={article[0].attributes.image.data.attributes.alternativeText}
      />
    </div>
  );
}
