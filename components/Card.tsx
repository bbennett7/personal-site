import Link from 'next/link';
import type { ReactNode } from 'react';
import styles from './Card.module.css';

type CardProps = {
  variant: 'ochre' | 'olive';
  num: string;
  title: ReactNode;
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
};

export function Card({ variant, num, title, children, href, target, rel }: CardProps) {
  const inner = (
    <>
      <div className={styles.cardHeader}>
        <span className={styles.cardNum}>
          {'// '}
          <span className={styles.cardNumValue}>{num}</span>
        </span>
        <span className={styles.cardTitle}>{title}</span>
      </div>
      {children}
    </>
  );

  if (href?.startsWith('/')) {
    return (
      <Link href={href} className={styles.card} data-variant={variant} data-interactive>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={styles.card}
        data-variant={variant}
        data-interactive
      >
        {inner}
      </a>
    );
  }

  return (
    <div className={styles.card} data-variant={variant}>
      {inner}
    </div>
  );
}
