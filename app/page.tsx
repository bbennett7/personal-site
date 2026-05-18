import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/Card';
import { CurrentQuarter } from '@/components/CurrentQuarter';
import { PageHeader } from '@/components/PageHeader';
import { SectionLabel } from '@/components/SectionLabel';
import { careerStart, yearsSince } from '@/lib/dates';
import { lastRevised, now } from '@/lib/now';
import { projects } from '@/lib/portfolio';
import { features } from '@/lib/work';
import styles from './Home.module.css';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <PageHeader
        variant="home"
        label="// Hi, I'm Bryn"
        heading={
          <>
            Senior fullstack
            <br />
            engineer.
          </>
        }
        tagline="Senior fullstack engineer building AI-driven product systems."
        status={
          <>
            Engineering @ WellTheory · <CurrentQuarter />
          </>
        }
      >
        <p>
          {yearsSince(careerStart)} years shipping production code — currently <em>WellTheory</em>,
          previously <em>Digg</em> and <em>Sensible Weather</em>. Based in Los Angeles.
        </p>
      </PageHeader>

      {/* Now */}
      <section className={styles.nowSection}>
        <div className={'section-header'}>
          <SectionLabel>Now</SectionLabel>
          <h2 className={'section-title'}>What I&apos;m into.</h2>
          <p className={styles.sectionMeta}>Updated monthly · last revised {lastRevised}</p>
        </div>
        <div className={styles.nowList}>
          {now
            .filter((item) => item.entries.length > 0)
            .map((item, i) => (
              <div
                key={item.type}
                className={`${styles.nowItem}${i === 0 ? ` ${styles.nowItemFirst}` : ''}`}
              >
                <div className={styles.nowType}>{item.type}</div>
                <div className={styles.nowBody}>
                  <ul>
                    {item.entries.map((entry) => {
                      if (typeof entry === 'string') {
                        return <li key={entry}>{entry}</li>;
                      }
                      const e = entry;
                      const content = (
                        <>
                          <strong>{e.title}</strong>
                          {e.author && <> — {e.author}</>}
                          {e.note && (
                            <>
                              {' '}
                              <em>({e.note})</em>
                            </>
                          )}
                        </>
                      );
                      return (
                        <li key={e.title}>
                          {e.url ? (
                            <a href={e.url} target="_blank" rel="noopener noreferrer">
                              {content}
                            </a>
                          ) : (
                            content
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  {item.aside && <p className={styles.nowAside}>{item.aside}</p>}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Featured */}
      <section className={styles.featuredSection}>
        <div className={'section-header'}>
          <SectionLabel>Featured</SectionLabel>
          <h2 className={'section-title'}>What I&apos;m up to.</h2>
        </div>
        <div className={styles.featuredGrid}>
          <Card variant="ochre" num="work" title={features[0].title} href="/work">
            <div className={styles.snapshotBody}>
              <div className={styles.snapshotMeta}>{features[0].company}</div>
              <p className={styles.snapshotDesc}>{features[0].description}</p>
              <span className={styles.snapshotLink}>View all work ↗︎</span>
            </div>
          </Card>
          <Card
            variant="ochre"
            num="portfolio"
            title={
              <>
                {projects[0].domain.replace(/\.ai$/, '')}
                <span className={styles.domainAi}>.ai</span>
              </>
            }
            href="/portfolio"
          >
            <div className={styles.snapshotBody}>
              <div className={styles.snapshotTagline}>{projects[0].tagline}</div>
              <p className={styles.snapshotDesc}>{projects[0].description}</p>
              <span className={styles.snapshotLink}>View portfolio ↗︎</span>
            </div>
          </Card>
        </div>
      </section>

      {/* About teaser */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutGrid}>
          <div className={'section-header'}>
            <SectionLabel>About</SectionLabel>
            <h2 className={'section-title'}>A bit about me.</h2>
          </div>
          <div className={styles.aboutProse}>
            <p>
              I&apos;m a senior fullstack engineer based in <strong>Los Angeles, CA</strong>.
              I&apos;ve spent the last {yearsSince(careerStart).toLowerCase()} years shipping real
              production code — currently <strong>WellTheory</strong>, previously{' '}
              <strong>Digg</strong> and <strong>Sensible Weather</strong>.
            </p>
            <p>
              I spend most of my energy right now on what good engineering actually looks like when
              an agent is doing the writing — what practices hold up, what paradigms break, and what
              changes when you&apos;re reviewing code you didn&apos;t write but are responsible for.
              A lot of what made me good at the job before is still useful, some of it is in the
              way, and most of the work right now is figuring out how to use the good parts in this
              new iteration of the job.
            </p>
            <p>
              Outside of work, you can usually find me hiking, reading, listening to records or
              playing with my dog.
            </p>
            <p>
              <Link href="/about">More about me ↗︎</Link>
              {' · '}
              <Link href="/contact">Get in touch ↗︎</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
