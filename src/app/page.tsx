'use client';

import Description from '@/mdx/Description.mdx';
import Projects from '@/mdx/Projects.mdx';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={`${styles.container} ${styles['no-stretch']}`}>
        <Description />
      </div>
      <div className={`${styles.container} projects-container`}>
        <Projects />
      </div>
    </main>
  );
}
