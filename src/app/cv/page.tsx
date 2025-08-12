'use client';

import styles from '../page.module.css';
// import Description from '@/mdx/Description.mdx';
import CV from '@/mdx/CV.mdx';

export default function Home() {
  return (
    <main className={styles.page}>
      {/*<div className={`${styles.container} ${styles['no-stretch']}`}>
        <Description />
      </div>*/}
      <div className={styles.container}>
        <CV />
      </div>
    </main>
  );
}
