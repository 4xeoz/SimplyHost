"use client";
import React from "react";
import { headerLInks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col items-start w-full gap-5 md:flex-between md:flex-row ">
      {headerLInks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li
            key={link.href}
            className={`${
              isActive && "text-primary-500"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
