import classes from "./page.module.css";
import { perksData } from "./data";
import { PerkItem } from "./components/perk-item";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>
        <ul className={classes.perks}>
          {perksData.map((perk, index) => (
            <PerkItem key={index} {...perk} />
          ))}
        </ul>
      </main>
    </>
  );
}
