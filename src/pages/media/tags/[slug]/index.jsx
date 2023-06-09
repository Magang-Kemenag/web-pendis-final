import PopularComponent from "@/components/article/popularcomponent";
import LongCard from "@/components/longcard/longcard";
import { Capital } from "@/utils/capital";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const path = pathname.split("/");

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-1 bg-white gap-4 p-12">
      <div className="lg:col-span-2 flex flex-col gap-4">
        <div className="font-bold text-base-blue text-3xl">
          Hasil Untuk Tag "{path[path.length - 1]}"
        </div>
        <div className="flex flex-col gap-2">
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
      </div>
      <PopularComponent />
    </div>
  );
}
