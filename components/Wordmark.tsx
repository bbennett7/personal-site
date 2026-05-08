import styles from './Wordmark.module.css';

type WordmarkSize = 'md' | 'lg';

type Props = {
  size?: WordmarkSize;
};

export function Wordmark({ size = 'md' }: Props) {
  return (
    <span className={`${styles.wordmark} ${styles[size]}`}>
      <span className={styles.bryn}>BRYN</span>
      <span className={styles.bennett}>BENNETT</span>
    </span>
  );
}
