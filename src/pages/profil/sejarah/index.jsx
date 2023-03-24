import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import styles from "@/styles/Home.module.css";
import DetailProfil from "../components/detailprofile";

export default function Page() {
  return (
    <div className={styles.base}>
      <Breadcrumb />
      <DetailProfil title="Sejarah" />
    </div>
  );
}
