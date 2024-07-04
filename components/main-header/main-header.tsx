import Link from "next/link";
import Image from "next/image";
import { MainHeaderBackground } from "./main-header-background";
import { logo } from "@/assets";

import classes from "./main-header.module.css";

const navItems = [
  { href: "/meals", text: "Browse Meals" },
  { href: "/community", text: "Foodies Community" },
];

export const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />

      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo.src} alt={logo.alt} />
          Meals Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            {navItems.map(({ href, text }) => (
              <li key={href}>
                <Link href={href}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
