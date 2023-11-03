import { useState } from 'react';

import styles from './errorButton.module.css';

export default function ErrorButton() {
  const [generateError, setGenerateError] = useState<boolean>(false);

  if (generateError) {
    throw new Error();
  }

  return (
    <button
      onClick={() => setGenerateError(true)}
      type="submit"
      className={styles.errorButton}
    >
      Generate Error
    </button>
  );
}
