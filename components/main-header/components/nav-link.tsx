"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import classes from "./nav-link.module.css";

interface Props {
  href: any;
  children: ReactNode;
}

export const NavLinkItem = ({ href, children }: Props) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
};
