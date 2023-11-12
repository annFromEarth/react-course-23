import styles from './spinner.module.css';

export default function Spinner() {
  return (
    <div className={styles.spinner__container}>
      <span className={styles.spinner} />
      <div className={styles.spinner__text}>Loading...</div>
    </div>
  );
}
