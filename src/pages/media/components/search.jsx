import { Capital } from "@/utils/capital";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search({ category, type }) {
  const router = useRouter();
  const pathname = usePathname();
  const path = pathname.split("/");
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [unit, setUnit] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/units?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };

  const changeUnit = (e) => {
    setUnit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/media/${path[2]}?query=${search}&unit=${unit}`);
  };

  return (
    <div className="flex gap-6 lg:items-center mb-16 mt-8 max-md:mt-4 max-md:mb-8 max-sm:mt-2 max-sm:mb-4 max-md:flex-col">
      <div
        className="title text-base-blue text-4xl font-bold"
        data-aos="fade-right"
      >
        {Capital(2)}
      </div>
      <form
        className="search flex gap-4 md:gap-2 lg:flex-row max-sm:flex-col w-full justify-end max-md:justify-between"
        onSubmit={handleSubmit}
        data-aos="fade-left"
      >
        {type === "buletins" ? null : (
          <div className="filter" onChange={changeUnit}>
            <select
              className="select select-bordered border-2 bg-[#ffffff] border-ffield rounded-md h-12 max-md:w-full"
              defaultValue=""
            >
              <option value="">Semua</option>
              {data &&
                data.map((unit) => (
                  <option key={unit.id} value={unit.attributes.slug}>
                    {unit.attributes.name}
                  </option>
                ))}
            </select>
          </div>
        )}

        <input
          type="text"
          placeholder="Search"
          className="input input-bordered bg-[#ffffff] border-2 border-ffield h-12"
          value={search}
          onChange={changeSearch}
        />
        <div className="button flex bg-base-green rounded-full py-2 px-6 hover:bg-dark-green">
          <button className="flex m-auto gap-2 items-center" type="submit">
            <div className="text-[#ffffff] text-base font-semibold">Cari</div>
            <img src="/assets/search.svg" alt="" className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
