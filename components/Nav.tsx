import Link from 'next/link';
import { NAV_LINKS } from '@/lib/nav-links';
import styles from './Nav.module.css';
import { NavLink } from './NavLink';
import { Wordmark } from './Wordmark';

export function Nav() {
  return (
    <nav className={styles.nav} aria-label="Main">
      <Link href="/" className={styles.wordmarkLink} aria-label="Bryn Bennett — home">
        <Wordmark size="md" />
      </Link>
      <ul className={styles.links}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <NavLink href={href} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
