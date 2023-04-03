import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import SideMenu from "../../components/sidemenu";
import SidemenuStruktur from "../components/sidemenustruktur";
import StrukturComponent from "../components/strukturcomponent";

export default function Page({ data }) {
  return (
    <div className="bg-white px-12 flex flex-col gap-16 pt-8">
      <Breadcrumb />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <StrukturComponent category="gtk" />
        </div>
        <div className="flex flex-col gap-4">
          <SidemenuStruktur />
          <SideMenu />
        </div>
      </div>
    </div>
  );
}
