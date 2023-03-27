import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import styles from "@/styles/Home.module.css";
import stylesform from "./form.module.css";

export default function Page() {
  return (
    <div className={styles.base}>
      <Breadcrumb />
      <div className="font-bold text-4xl text-ftitle mb-16">Buletin Form</div>
      <div className=" text-2xl font-semibold text-ftitle">
        <form className="flex flex-col gap-10">
          <div className={stylesform.grid_form}>
            <label htmlFor="">Judul</label>
            <input
              type="text"
              name="title"
              placeholder="Type here"
              className="input input-bordered w-full bg-white col-span-3"
            />
          </div>
          <div className={stylesform.grid_form}>
            <label htmlFor="">Penulis</label>
            <input
              type="text"
              name="writer"
              placeholder="Type here"
              className="input input-bordered w-full bg-white col-span-3"
            />
          </div>
          <div className={stylesform.grid_form}>
            <label htmlFor="">Konten</label>
            <textarea
              placeholder="Konten"
              name="content"
              className="textarea textarea-bordered textarea-lg w-full bg-white col-span-3"
            ></textarea>
          </div>
          <div className={stylesform.grid_form}>
            <label htmlFor="">Tag</label>
            <input
              type="text"
              name="tag"
              placeholder="Gunakan tanda koma “,” untuk menambahkan tag baru"
              className="input input-bordered bg-white col-span-3 w-full"
            />
          </div>
          <div className={stylesform.grid_form}>
            <label>Upload Gambar</label>
            <div className="w-full bg-white h-64 border rounded-md">
              <label
                htmlFor="pic"
                className=" flex justify-center items-center"
              >
                <img src="/assets/panorama-variant-outline.png" alt="" />
              </label>
              <input
                type="file"
                id="pic"
                name="image"
                placeholder="Type here"
                className="w-3/4 col-span-3 hidden"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-base-green text-white border-2 py-3 px-6 rounded-full items-end text-base"
          >
            Posting Buletin
          </button>
        </form>
      </div>
    </div>
  );
}
