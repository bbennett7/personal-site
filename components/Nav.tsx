'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/nav-links';
import styles from './Nav.module.css';
import { Wordmark } from './Wordmark';

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Main">
      <Link href="/" className={styles.wordmarkLink} aria-label="Bryn Bennett — home">
        <Wordmark size="md" />
      </Link>
      <ul className={styles.links}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`${styles.link} ${pathname === href || pathname.startsWith(`${href}/`) ? styles.active : ''}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
