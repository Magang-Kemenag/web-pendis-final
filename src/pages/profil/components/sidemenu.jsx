import Buletin from "@/components/media-sosial/buletin";
import Facebook from "@/components/media-sosial/facebook";
import Twitter from "@/components/media-sosial/twitter";
import ProfilMenu from "./profilmenu";

export default function SideMenu() {
  return (
    <div className="flex flex-col gap-4">
      <ProfilMenu />
      <Twitter />
      <Facebook />
    </div>
  );
}
