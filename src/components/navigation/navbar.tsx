'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';
import localFont from 'next/font/local';
import ThemeButton from '@/components/ThemeButton';

const croquete = localFont({
  src: '../../../public/Daily Croquete.otf',
});

export default function Navbar() {
  return (
    <header className={styles['nav-flex']}>
      <div className={styles['sticker-container']}>
        <Image
          className={`sticker ${styles.sticker}`}
          src="/topi_500x500.png"
          alt=""
          width={100}
          height={100}
        />
      </div>

      <h1 className={`${styles.title} ${croquete.className}`}>Topi Salonen</h1>

      <ThemeButton />

      <nav aria-label="Main navigation" className={styles['nav-bar']}>
        <Link href="/" className={`${styles['nav-button']}`}>
          Projects
        </Link>
        <Link href="/cv" className={`${styles['nav-button']}`}>
          CV
        </Link>
      </nav>
    </header>
  );
}
