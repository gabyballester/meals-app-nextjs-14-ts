import Link from "next/link";

const links = [
  { href: "/meals", text: "Meals" },
  { href: "/meals/share", text: "Share" },
  { href: "/community", text: "Community" },
];

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      {links.map(({href, text}) => (
        <p key={href}>
          <Link href={href}>{text}</Link>
        </p>
      ))}
    </main>
  );
}
