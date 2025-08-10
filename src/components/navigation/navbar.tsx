'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';
import localFont from 'next/font/local';
import { usePathname } from 'next/navigation';

const croquete = localFont({
  src: '../../../public/Daily Croquete.otf',
});

export default function Navbar() {
  const pathname = usePathname();

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

      <h1 className={`${styles.title} ${croquete.className}`}>Topi Salonen</h1>

      <nav aria-label="Main navigation" className={styles['nav-bar']}>
        <Link
          href="/"
          className={`${styles['nav-button']} ${pathname === '/' && styles['nav-selected']}`}
        >
          Projects
        </Link>
        <Link
          href="/cv"
          className={`${styles['nav-button']} ${pathname === '/cv' && styles['nav-selected']}`}
        >
          CV
        </Link>
      </nav>
    </header>
  );
}
