import styles from "@/styles/Home.module.css";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Search from "../components/search";
import Articles from "../components/articles";

export default function Artikel({ searchParams }) {
  const type = "buletins";
  return (
    <>
      <div className={styles.base}>
        <Breadcrumb />
        <section>
          <Search type={type} />
          <div className={styles.article_base}>
            <Articles
              category="buletin"
              searchParams={searchParams}
              type={type}
            />
          </div>
        </section>
      </div>
    </>
  );
}
