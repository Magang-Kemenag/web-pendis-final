import styles from "@/styles/Home.module.css";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Search from "../components/search";
import Articles from "../components/articles";
import { useRouter } from "next/router";
import Pagination from "@/components/pagination/pagination";

export default function Page() {
  const type = "kolom-opinis";
  const router = useRouter();
  return (
    <>
      <div className="px-12">
        <Breadcrumb />
        <section>
          <Search type={type} />
          <div className={styles.article_base}>
            <Articles searchParams={router.query} type={type} />
          </div>
        </section>
        <Pagination type={type} />
      </div>
    </>
  );
}
