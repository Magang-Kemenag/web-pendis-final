"use client";
import { Capital } from "@/utils/capital";
import { useRouter, usePathname } from "next/navigation";

export default function Breadcrumb() {
  const router = useRouter();
  const pathname = usePathname();
  const path = pathname.split("/");

  return (
    <div className="flex text-base text-fbody font-bold gap-2">
      <button
        onClick={() => router.replace(`/${path[1]}`)}
        className="text-base-blue"
      >
        {Capital(1)}
      </button>
      <div>/</div>
      <div>{Capital(2)}</div>
    </div>
  );
}
