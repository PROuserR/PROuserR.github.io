"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded p-1 ${pathName === link.url && "bg-red-950 text-red-200 dark:bg-red-200 dark:text-red-950"}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
