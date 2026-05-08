import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.srOnly}>Page not found</h1>
          <div className={styles.eyebrow}>{'// Not found'}</div>
          <div className={styles.number} aria-hidden="true">
            4
            <span className={styles.flowerZero} aria-hidden="true">
              ✻
            </span>
            4
          </div>
          <p className={styles.message}>This page doesn&apos;t exist.</p>
          <Link href="/" className={styles.homeLink}>
            <span className={styles.homeArrow} aria-hidden="true">
              ←
            </span>
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
