import { useEffect, useState } from "react";

export default function Data() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/schools?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <section className="flex flex-col gap-4 bg-white py-12">
      <div className="text-3xl text-center font-bold text-base-blue">Data</div>
      <div className="text-2xl font-bold text-ftitle overflow-auto">
        {data && (
          <table className="mr-auto ml-auto">
            <thead className="border-b-2">
              <tr>
                <td className="border-r-2"></td>
                {data.map((dt) => (
                  <td key={dt.id} className="px-8 py-4">
                    {dt.attributes.name}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r-2">Sekolah</td>
                {data.map((dt) => (
                  <td key={dt.id} className="px-8 py-4">
                    {dt.attributes.data_beranda.data.attributes.sekolah}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-r-2">Siswa/i</td>
                {data.map((dt) => (
                  <td key={dt.id} className="px-8 py-4">
                    {dt.attributes.data_beranda.data.attributes.siswa}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-r-2">Pengajar</td>
                {data.map((dt) => (
                  <td key={dt.id} className="px-8 py-4">
                    {dt.attributes.data_beranda.data.attributes.pengajar}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <div className="flex mt-8 justify-center">
        <a
          href="http://emispendis.kemenag.go.id/dashboard/"
          className="flex border-ffield border-2 py-5 px-9 rounded-full bg-transparent hover:bg-ffield"
          data-aos="fade-up"
        >
          <div className="max-sm:m-auto flex gap-2">
            <div className="text-ftitle font-semibold">Lihat Selengkapnya</div>
            <div className="icon">
              <img src="/assets/arrow-right-black.svg" alt="" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
