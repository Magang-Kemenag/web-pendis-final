// Active navbar belum beres

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { getActive } from "@/utils/navactiver";
import Drawer from "../drawer/drawer";

export default function Navbar() {
  const currentUrl = usePathname();
  return (
    <div className="navbar bg-white px-16 max-md:px-8 max-sm:px-2 flex justify-between w-full top-0 border-b ">
      <Link href="/" className="flex px-2 gap-4">
        <img src="/assets/pendis-kemenag.png" alt="" className=" p-0" />
        <div className="bg-ftitle h-16 w-[3px]"></div>
        <div className="text-title text-ftitle font-bold leading-9 max-md:leading-6 w-[307px]  max-sm:hidden">
          Direktorat Jenderal Pendidikan Islam Kementrian Agama
        </div>
      </Link>
      <div className="max-md:hidden">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <Link
              href="/"
              className={`${getActive("/", currentUrl, 0)} ${styles.navLink}`}
            >
              Beranda
            </Link>
          </li>
          <li tabIndex={0}>
            <Link
              href="/profil"
              className={`${getActive("profil", currentUrl)} ${styles.navLink}`}
            >
              Profil
            </Link>
          </li>
          <li tabIndex={0}>
            <Link
              href="/media"
              className={`${getActive("media", currentUrl)} ${styles.navLink}`}
            >
              Media
            </Link>
          </li>
          <li tabIndex={0}>
            <Link
              href="/unit-kerja"
              className={`${getActive("unit-kerja", currentUrl)} ${
                styles.navLink
              }`}
            >
              Unit Kerja
            </Link>
          </li>
          <li>
            <Link
              href="/publikasi"
              className={`${getActive("publikasi", currentUrl)} ${
                styles.navLink
              }`}
            >
              Publikasi
            </Link>
          </li>
          <li tabIndex={0}>
            <Link
              href="/galeri"
              className={`${getActive("galeri", currentUrl)} ${styles.navLink}`}
            >
              Galeri
            </Link>
          </li>
        </ul>
      </div>
      <Drawer />
    </div>
  );
}
