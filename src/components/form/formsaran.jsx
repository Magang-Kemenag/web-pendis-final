import { useState } from "react";

const parseJSON = (resp) => (resp.json ? resp.json() : resp);

const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }
  return parseJSON(resp).then((resp) => {
    throw resp;
  });
};
const headers = {
  "Content-Type": "application/json",
};
export default function FormSaran() {
  const [modifiedData, setModifiedData] = useState({
    title: "",
    writer: "",
    content: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setModifiedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:1337/api/critics", {
        method: "POST",
        headers,
        body: JSON.stringify({ data: modifiedData }),
      })
        .then(checkStatus)
        .then(parseJSON);
      console.log(response);
      setModalOpen(false);
      setModifiedData({
        title: "",
        writer: "",
        content: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 bg-white p-12">
      <div className="text-base-blue font-bold text-4xl flex flex-col items-center gap-2">
        <div className="text-center w-3/4">
          Ingin kami berkembang lebih baik lagi? Tulis Kritik dan Saran Untuk
          Kami
        </div>
      </div>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            name="title"
            placeholder="Judul"
            className="input input-bordered w-full bg-white col-span-3"
            value={modifiedData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="writer"
            placeholder="Penulis"
            className="input input-bordered w-full bg-white col-span-3"
            value={modifiedData.writer}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <textarea
            className="textarea textarea-bordered h-24 bg-white"
            name="content"
            placeholder="Konten"
            value={modifiedData.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <a
          href="#my-modal-2"
          className="btn bg-base-green text-white border-2 py-3 px-6 rounded-full items-end text-base hover:bg-dark-green border-none"
          onClick={() => setModalOpen(true)}
        >
          Submit
        </a>
        {modalOpen && (
          <div className="modal" id="my-modal-2">
            <div className="modal-box bg-white flex flex-col items-center">
              <h3 className="font-bold text-lg">Yakin ingin mengirimkan?</h3>
              <div className="modal-action flex">
                <a
                  className="btn btn-error w-24"
                  onClick={() => setModalOpen(false)}
                >
                  Batal
                </a>
                <button type="submit" className="btn btn-success w-24">
                  Ya
                </button>
              </div>
            </div>
          </div>
        )}
        {/* <button
          type="submit"
          className="bg-base-green text-white border-2 py-3 px-6 rounded-full items-end text-base hover:bg-dark-green"
        >
          Kirim
        </button> */}
        <div className="text-sm text-ftitle">
          Dengan memberikan kritik dan saran kamu telah menyetujui{" "}
          <a href="#" className="font-semibold text-base-blue">
            Kebijakan Privasi
          </a>{" "}
          yang berlaku
        </div>
      </form>
    </div>
  );
}
