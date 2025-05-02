import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="header">
      <h1>CANADIAN OWNED & MADE - Goodfood</h1>
      <nav className={styles.nav}>
        <Link href="/meals">Meals</Link>
        <Link href="/meals/share">Share Meals</Link>
        <Link href="/community">Community</Link>
      </nav>
    </div>
  );
}
