import axios from "axios";

export async function getArticleById(id) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/articles/${id}?populate=*`
  );
  const article = res.data.data;
  await axios.put(`${process.env.NEXT_PUBLIC_STRAPI_API}/articles/${id}`, {
    data: {
      views: article.attributes.views + 1,
    },
  });
  return article;
}
