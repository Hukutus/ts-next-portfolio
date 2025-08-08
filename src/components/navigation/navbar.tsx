import { Lobster } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

const lobster = Lobster({
  subsets: ['latin'],
  weight: "400",
});

export default function Navbar() {
  return (
    <header className={styles['nav-flex']}>
      <div className={styles['sticker-container']}>
        <Image
          className={styles.sticker}
          src="/topi_500x500.png"
          alt=""
          width={100}
          height={100}
        />
      </div>

      <h1 className={`${styles.title} ${lobster.className}`}>Topi Salonen</h1>

      <nav aria-label="Main navigation" className={styles['nav-bar']}>
        <Link href="/">Home</Link>
        <Link href="/cv">CV</Link>
        <Link href="/portfolio">Portfolio</Link>
      </nav>
    </header>
  );
}
