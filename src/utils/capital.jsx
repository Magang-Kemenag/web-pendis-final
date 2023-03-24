import { usePathname } from "next/navigation";

export function Capital(index) {
  const pathname = usePathname();
  const words = pathname.split("/");
  return words[index].charAt(0).toUpperCase() + words[index].slice(1);
}
