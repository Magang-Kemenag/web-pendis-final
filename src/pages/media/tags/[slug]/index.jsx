import PopularComponent from "@/components/article/popularcomponent";
import LongCard from "@/components/longcard/longcard";
import { Capital } from "@/utils/capital";

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/articles`);
  const posts = await res.json();
  const data = posts.data;

  const tags = data.map((post) => post.attributes.tag.split(","));
  const mergedTags = [].concat.apply([], tags);
  console.log(mergedTags);
  const paths = mergedTags.map((tag) => ({
    params: {
      slug: tag,
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
  const articles = data.data;

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <div className="font-bold text-base-blue text-3xl">
          Hasil Untuk Tag "{Capital(3)}"
        </div>
        <div className="flex flex-col gap-2"></div>
        {articles.map((article) => (
          <LongCard
            key={article.id}
            title={article.attributes.title}
            image={article.attributes.image.data.attributes.url}
            date={article.attributes.updatedAt}
            alt={article.attributes.image.data.attributes.alternativeText}
            slug={article.attributes.slug}
            type="articles"
          />
        ))}
      </div>
      <PopularComponent />
    </div>
  );
}
