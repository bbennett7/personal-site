import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/Card';
import { PageHeader } from '@/components/PageHeader';
import { SectionLabel } from '@/components/SectionLabel';
import { influences, personalItems } from '@/lib/about';
import styles from './About.module.css';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Engineer, reader, hiker, dog-mom — from artist management to fullstack engineering.',
  alternates: { canonical: '/about' },
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            mainEntity: {
              '@type': 'Person',
              name: 'Bryn Bennett',
              url: 'https://brynbennett.dev',
              jobTitle: 'Senior Fullstack Engineer',
              description:
                'Engineer, reader, hiker, dog-mom — from artist management to fullstack engineering.',
            },
          }),
        }}
      />
      <PageHeader
        label="// About"
        heading={
          <>
            A bit more
            <br />
            about me.
          </>
        }
        tagline="Engineer, reader, hiker, dog-mom, and more."
      >
        <p>
          Hi 👋 thanks for taking the time to stop by my site. If you&apos;re interested in what
          you&apos;ve seen here, <Link href="/contact">drop me a line</Link> — I&apos;d love to
          connect.
        </p>
      </PageHeader>

      {/* Story */}
      <section className={styles.storySection}>
        <SectionLabel>Story</SectionLabel>
        <div className={styles.proseGrid}>
          <div className={styles.storyLeft}>
            <h2 className={'section-title'}>How I got here.</h2>
            <div className={styles.headshot}>
              <Image
                src="/images/headshot.webp"
                alt="Bryn Bennett"
                width={400}
                height={400}
                priority
              />
            </div>
          </div>
          <div className={styles.prose}>
            <p>
              I started my career in music, not in tech. The Bitcoin and blockchain explosion
              happened while I was working in artist management, and part of my job became vetting
              the various applications of the technology that we were being pitched for our clients,
              then making recommendations on pursuing them. This meant that I had to actually
              understand Bitcoin and the blockchain — a journey that started with total naivety and
              ended with writing my first lines of code (though admittedly, still pretty naive).
            </p>
            <p>
              As soon as I started, I fell in love with engineering. My background in product and
              marketing, which initially made me feel inadequate in my new field, ended up making it
              particularly fun to build. My experience gave me what I needed to have a specific but
              valuable role on teams. I could speak both the language of product/business, and of
              engineering, allowing me to be a bridge between the two.
            </p>
            <p>
              With AI now changing my field faster than I could have imagined, I&apos;m more
              grateful than ever to have had a less traditional background. Every new model release
              shifts my role as an engineer further from wrestling with the nuances of a language or
              framework, and closer to problem solving through communication with and orchestration
              of agents. The result is the same, but the skillsets required really are nothing
              alike. And with each step, my first career feels more and more like preparation for
              this one.
            </p>
          </div>
        </div>
      </section>

      {/* Influences */}
      <section className={styles.influencesSection}>
        <div className={'section-header'}>
          <SectionLabel>Influences</SectionLabel>
          <h2 className={'section-title'}>What&apos;s shaped my thinking.</h2>
          <p className={styles.sectionIntro}>
            The books, papers, podcasts, talks, writing, and people that have most shaped how I
            think about engineering, AI, and craft.
          </p>
        </div>
        <div className={styles.favsGrid}>
          {influences.map((cat, i) => (
            <Card
              key={cat.name}
              variant="ochre"
              num={String(i + 1).padStart(2, '0')}
              title={cat.name}
            >
              <div className={styles.favList}>
                {cat.items.map((item) => (
                  <div key={item.name} className={styles.favItem}>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.favName}
                      >
                        {item.name}
                        {item.by && <span className={styles.favBy}> — {item.by}</span>}
                      </a>
                    ) : (
                      <div className={styles.favName}>
                        {item.name}
                        {item.by && <span className={styles.favBy}> — {item.by}</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Personal */}
      <section className={styles.personalSection}>
        <div className={'section-header'}>
          <SectionLabel>Personal</SectionLabel>
          <h2 className={'section-title'}>Outside of work.</h2>
        </div>
        <div className={styles.personalGrid}>
          {personalItems.map((item) => (
            <div key={item.title} className={styles.personalItem}>
              <h3 className={styles.personalItemTitle}>{item.title}</h3>
              <p className={styles.personalItemBody}>
                {item.href ? (
                  <>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.linkText}
                    </a>
                    {item.body}
                  </>
                ) : (
                  item.body
                )}
              </p>
              {item.image && (
                <figure
                  className={
                    item.image.height > item.image.width
                      ? styles.personalImagePortrait
                      : styles.personalImage
                  }
                >
                  {item.image.height > item.image.width ? (
                    <div className={styles.personalImagePortraitFrame}>
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        width={item.image.width}
                        height={item.image.height}
                      />
                    </div>
                  ) : (
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.image.width}
                      height={item.image.height}
                    />
                  )}
                  <figcaption className={styles.personalImageCaption}>
                    {item.image.caption ?? ' '}
                  </figcaption>
                </figure>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
