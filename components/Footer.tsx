import Link from 'next/link';
import { NAV_LINKS } from '@/lib/nav-links';
import styles from './Footer.module.css';
import { Wordmark } from './Wordmark';

export function Footer() {
  return (
    <div className="container">
      <footer className={styles.footer}>
        <div className={styles.grid}>
          <div>
            <div className={styles.mark}>
              <Wordmark size="lg" aria-hidden />
            </div>
            <p className={styles.tagline}>
              Senior fullstack engineer based in Los Angeles. Building AI-driven product systems.
            </p>
          </div>

          <nav aria-label="Footer">
            <div className={styles.colTitle}>{'// Site'}</div>
            <ul className={styles.links}>
              {NAV_LINKS.filter(({ href }) => href !== '/contact').map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <div className={styles.colTitle}>{'// Reach me'}</div>
            <ul className={styles.links}>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/brynbennett"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/bbennett7" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 Bryn Bennett</span>
          <span>brynbennett.dev</span>
        </div>
      </footer>
    </div>
  );
}
