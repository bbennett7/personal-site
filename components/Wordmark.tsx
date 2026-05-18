import styles from './Wordmark.module.css';

type WordmarkSize = 'sm' | 'md' | 'lg' | 'xl';

type Props = {
  size?: WordmarkSize;
  'aria-hidden'?: boolean;
};

export function Wordmark({ size = 'md', 'aria-hidden': ariaHidden }: Props) {
  return (
    <span className={`${styles.wordmark} ${styles[size]}`} aria-hidden={ariaHidden}>
      <span className={styles.bryn}>BRYN</span>
      <span className={styles.bennett}>BENNETT</span>
    </span>
  );
}
