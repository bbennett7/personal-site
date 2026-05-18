import type { Metadata } from 'next';
import { Card } from '@/components/Card';
import { PageHeader } from '@/components/PageHeader';
import { type Project, projects } from '@/lib/portfolio';
import styles from './Portfolio.module.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Side projects, experiments, and things I build — insidethe.ai, askdumbquestions.ai, and more.',
  alternates: { canonical: '/portfolio' },
};

function FillerCard() {
  return (
    <div className={styles.filler}>
      <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="lava-gooey" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
            />
          </filter>
        </defs>
      </svg>
      <div className={styles.lava} aria-hidden="true">
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
        <div className={`${styles.blob} ${styles.blob4}`} />
      </div>
      <div className={styles.fillerContent}>
        <div className={styles.fillerHeading}>
          More
          <br />
          coming <em>soon.</em>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ domain, url, tagline, description, index }: Project & { index: number }) {
  const dot = domain.lastIndexOf('.');
  return (
    <Card
      variant="olive"
      num={String(index + 1).padStart(2, '0')}
      title={
        <>
          {domain.slice(0, dot)}
          <span className={styles.tld}>{domain.slice(dot)}</span>
        </>
      }
    >
      <div className={styles.body}>
        <div className={styles.tagline}>{tagline}</div>
        <p className={styles.description}>{description}</p>
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className={styles.visit}>
            Visit ↗
          </a>
        ) : (
          <span className={styles.comingSoon}>Coming Soon</span>
        )}
      </div>
    </Card>
  );
}

export default function Portfolio() {
  return (
    <>
      <PageHeader
        label="// Portfolio"
        heading={
          <>
            Things I make
            <br />
            on my own time.
          </>
        }
        tagline="Side projects, experiments, and things I build just for fun."
      >
        <p>
          Building is more fun than ever. Some of these are live, some in progress, but all have
          been a blast.
        </p>
      </PageHeader>
      <section>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.domain} {...project} index={i} />
          ))}
          {projects.length % 2 !== 0 && <FillerCard />}
        </div>
      </section>
    </>
  );
}
