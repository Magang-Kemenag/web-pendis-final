import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import DetailProfil from "../components/detailprofile";
import SideMenu from "../components/sidemenu";

export default function Page() {
  return (
    <div className="bg-white px-12 flex flex-col gap-16 pt-8">
      <Breadcrumb />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <DetailProfil title="Arah Kebijakan" />
        </div>
        <SideMenu />
      </div>
    </div>
  );
}
