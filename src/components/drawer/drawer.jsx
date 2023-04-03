"use client";

import { getActive } from "@/utils/navactiver";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Drawer() {
  const currentUrl = usePathname();
  return (
    <div className="drawer drawer-end h-16 lg:hidden flex z-50">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-ghost overflow-hidden hover:bg-transparent"
        >
          <img src="/assets/menu.svg" />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-white border text-base-content fixed right-0 h-screen top-0">
          <li>
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-ghost hover:bg-transparent flex justify-end"
            >
              <img src="/assets/cross.svg" />
            </label>
          </li>
          <li>
            <Link href="/" className={getActive("/", currentUrl, 0)}>
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/profil" className={getActive("profil", currentUrl)}>
              Profil
            </Link>
          </li>
          <li>
            <Link href="/media" className={getActive("media", currentUrl)}>
              Media
            </Link>
          </li>
          <li>
            <Link
              href="/unit-kerja"
              className={getActive("unit-kerja", currentUrl)}
            >
              Unit Kerja
            </Link>
          </li>
          <li>
            <Link
              href="/publikasi"
              className={getActive("publikasi", currentUrl)}
            >
              Publikasi
            </Link>
          </li>
          <li>
            <Link href="/galeri" className={getActive("galeri", currentUrl)}>
              Galeri
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
