import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

export default function Pagination({ type }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/${type}?pagination[pageSize]=9`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.meta);
        setLoading(false);
      });
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    setPage(e.target.value);
    router.push(`${pathname}?page=${page}`);
  };
  return (
    <div className="btn-group text-ftitle">
      {data &&
        Array.from({ length: data.pagination.pageCount }, (_, index) => (
          <button
            className="btn bg-white"
            onClick={handleClick}
            value={index + 1}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
}
