import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      star wars
      <br />
      <span className={styles.select}>planet</span> searcher
    </header>
  );
}
