import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Pagination from "@/components/pagination/pagination";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Search from "@/pages/media/components/search";
import Galeries from "../components/galeries";

export default function Page() {
  const type = "videos";
  const router = useRouter();
  return (
    <>
      <div className="px-12">
        <Breadcrumb />
        <section>
          <Search type={type} />
          <div className={styles.article_base}>
            <Galeries searchParams={router.query} type={type} />
          </div>
        </section>
        <Pagination type={type} />
      </div>
    </>
  );
}
