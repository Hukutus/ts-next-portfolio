import React from 'react';
import Image from 'next/image';
import styles from './ProjectEntry.module.css';

type Props = {
  title: string;
  image?: string;
  children: React.ReactNode;
}

export default function ProjectEntry({title, image, children}: Props) {
  return (
    <article className={styles.article}>
      <h3>{title}</h3>

      <div>
        {image ? <Image src={image} alt="" height={200} width={150} /> : null}

        {children}
      </div>
    </article>
  );
}
