import styles from "@/styles/Home.module.css";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Search from "../components/search";
import Articles from "../components/articles";
import { useRouter } from "next/router";

export default function Artikel({ searchParams }) {
  const type = "buletins";
  const router = useRouter();
  return (
    <>
      <div className={styles.base}>
        <Breadcrumb />
        <section>
          <Search type={type} />
          <div className={styles.article_base}>
            <Articles
              category="buletin"
              searchParams={router.query}
              type={type}
            />
          </div>
        </section>
      </div>
    </>
  );
}
