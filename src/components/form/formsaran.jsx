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
        .then(alert("check"))
        .then(checkStatus)
        .then(parseJSON);
    } catch (error) {
      setErrorUploads(error);
    }
  };
  return (
    <div className="flex flex-col items-center gap-8 mt-16 bg-white py-12">
      <div className="text-base-blue font-bold text-4xl flex flex-col items-center gap-2">
        <div>Ingin kami berkembang lebih baik lagi?</div>
        <div>Tulis Kritik dan Saran Untuk Kami</div>
      </div>
      <div className="w-1/2">
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
          <button
            type="submit"
            className="bg-base-green text-white border-2 py-3 px-6 rounded-full items-end text-base"
          >
            Posting Buletin
          </button>
          <div className="text-sm text-ftitle">
            Dengan memberikan kritik dan saran kamu telah menyetujui{" "}
            <a href="#" className="font-semibold text-base-blue">
              Kebijakan Privasi
            </a>{" "}
            yang berlaku
          </div>
        </form>
      </div>
    </div>
  );
}
