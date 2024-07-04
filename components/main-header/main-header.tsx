import Link from "next/link";

import classes from "./main-header.module.css";
import Image from "next/image";
import { MainHeaderBackground } from "./main-header-background";
import { logo } from "@/assets/images";

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
          <Image src={logo} alt="A plate with foot on it" />
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
