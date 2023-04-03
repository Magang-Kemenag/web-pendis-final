import FormSaran from "@/components/form/formsaran";
import PublikasiComponent from "./components/publikasicomponent";
import RegulasiComponent from "./components/regulasicomponent";

export default function Page({ data }) {
  return (
    <div className="flex flex-col gap-12">
      <PublikasiComponent />
      <RegulasiComponent />
      <FormSaran />
    </div>
  );
}
