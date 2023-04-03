import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ImageComponent from "./components/imagecomponent";
import PopularComponent from "@/components/article/popularcomponent";
import FormSaran from "@/components/form/formsaran";
import VideoComponent from "./components/videocomponent";

export default function Galeri() {
  return (
    <div>
      <div className="grid grid-cols-3 px-12 gap-4 mt-12">
        <div className="col-span-2">
          <VideoComponent />
          <ImageComponent />
        </div>
        <PopularComponent />
      </div>
      <FormSaran />
    </div>
  );
}
