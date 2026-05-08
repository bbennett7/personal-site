import type { ReactNode } from 'react';
import styles from './PageHeader.module.css';

type PageHeaderProps = {
  label: string;
  heading: ReactNode;
  tagline: string;
  status?: string;
  children?: ReactNode;
  variant?: 'home' | 'default';
};

export function PageHeader({
  label,
  heading,
  tagline,
  status,
  children,
  variant = 'default',
}: PageHeaderProps) {
  return (
    <section className={styles.header} data-variant={variant}>
      <div className={styles.grid}>
        {/* Row 1 */}
        <div className={styles.label}>{label}</div>
        {status && <div className={styles.status}>{status}</div>}
        {/* Row 2 */}
        <h1 className={styles.heading}>{heading}</h1>
        <div className={styles.intro}>
          <p className={styles.tagline}>{tagline}</p>
          {children && <div className={styles.prose}>{children}</div>}
        </div>
      </div>
    </section>
  );
}
