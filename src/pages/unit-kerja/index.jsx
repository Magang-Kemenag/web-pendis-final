import Link from "next/link";
import "aos/dist/aos.css";
import styles from "@/styles/Home.module.css";
import UnitComponent from "./components/unitcomponent";
import PopularComponent from "@/components/article/popularcomponent";
import FormSaran from "@/components/form/formsaran";
import Twitter from "../../components/media-sosial/twitter";

export default function Page({ data }) {
  return (
    <div>
      <div className="grid grid-cols-3 max-md:grid-cols-1 mt-12 gap-4 px-12">
        <div className="col-span-2">
          <UnitComponent />
        </div>
        <div className="flex flex-col gap-4">
          <PopularComponent />
          <Twitter />
        </div>
      </div>
      <FormSaran />
    </div>
  );
}
