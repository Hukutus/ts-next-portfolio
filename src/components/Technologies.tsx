import styles from './Technologies.module.css';

type Props = {
  list: string[];
}

export default function Technologies({list}: Props) {
  return (
    <div className={styles.container}>
      {list.map(item => {
        return <p key={item}>{item}</p>
      })}
    </div>
  );
}
