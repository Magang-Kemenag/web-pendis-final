import Reccent from "./components/reccent";
import ArticlePopular from "./components/articlepopular";
import Infografis from "../../components/infografis/infografis";
import ReccentBuletin from "./components/reccentbuletin";
import ReccentPengumuman from "./components/reccentpengumuman";
import Twitter from "../../components/media-sosial/twitter";
import FormSaran from "../../components/form/formsaran";
import PopularComponent from "@/components/article/popularcomponent";
import ReccentOpini from "./components/reccentopini";

export default function Media({ data }) {
  return (
    <>
      <div className="px-12 bg-white pt-12">
        {/* <HeaderMedia /> */}
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4">
          <div className="lg:col-span-2 flex flex-col gap-12">
            <Reccent type="articles" />
            <ReccentPengumuman type="announcements" />
            <ReccentBuletin type="buletins" />
            <ReccentOpini type="kolom-opinis" />
          </div>
          <div>
            <PopularComponent />
            <Infografis />
            <Twitter />
          </div>
        </div>
        <FormSaran />
      </div>
    </>
  );
}
