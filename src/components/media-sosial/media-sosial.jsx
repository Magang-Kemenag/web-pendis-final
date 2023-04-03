import styles from "@/styles/Home.module.css";
import Buletin from "./buletin";
import Facebook from "./facebook";
import Twitter from "./twitter";
export default function MediaSosial() {
  return (
    <div>
      <div className={`${styles.title_center} ${styles.title_gap}`}>
        Sosial Media
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Twitter />
        <Buletin />
        <Facebook />
      </div>
    </div>
  );
}
