import Detail from "../../../../components/detail/detail";
import DetailAnnounce from "../../components/detailannounce";

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/announcements`
  );
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
    `${process.env.NEXT_PUBLIC_STRAPI_API}/announcements?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const data = await res.json();
  return {
    props: { data: data },
  };
}

export default function Post({ data }) {
  const announce = data.data;
  return (
    <>
      <DetailAnnounce
        title={announce[0].attributes.title}
        date={announce[0].attributes.updatedAt}
        unit={announce[0].attributes.unit.data.attributes.name}
        image={announce[0].attributes.image.data}
        link={announce[0].attributes.link}
      />
    </>
  );
}
