import styles from "@/styles/Home.module.css";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Search from "../components/search";
import Articles from "../components/articles";
import { useRouter } from "next/router";

export default function Artikel() {
  const type = "articles";
  const router = useRouter();
  return (
    <>
      <div className={styles.base}>
        <Breadcrumb />
        <section>
          <Search type={type} />
          <div className={styles.article_base}>
            <Articles
              category="artikel"
              searchParams={router.query}
              type={type}
            />
          </div>
        </section>
        <div className="btn-group text-ftitle">
          <button className="btn bg-white">1</button>
          <button className="btn bg-white">2</button>
          <button className="btn bg-white">99</button>
          <button className="btn bg-white">100</button>
        </div>
      </div>
    </>
  );
}
