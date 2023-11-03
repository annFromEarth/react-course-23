import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>&copy;</span> 2023
    </footer>
  );
}
