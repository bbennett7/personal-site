import { Card } from '@/components/Card';
import { PageHeader } from '@/components/PageHeader';
import { SectionLabel } from '@/components/SectionLabel';
import { careerStart, yearsSince } from '@/lib/dates';
import { type Company, companies, companyStats, features, press, timelineStart } from '@/lib/work';
import styles from './Work.module.css';

function renderLinkedText(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/);
  return parts.map((part) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      return (
        <a
          key={match[2]}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inlineLink}
        >
          {match[1]}
        </a>
      );
    }
    return part;
  });
}

function timelinePosition(company: Company) {
  const now = new Date();
  const total = now.getTime() - timelineStart.getTime();
  const elapsed = company.start.getTime() - timelineStart.getTime();
  const timeRatio = elapsed / total;
  const rankRatio = companies.indexOf(company) / (companies.length - 1);
  return `${(0.65 * timeRatio + 0.35 * rankRatio) * 100}%`;
}

function TimelineItem({ company }: { company: Company }) {
  return (
    <div className={styles.timelineEntry} style={{ left: timelinePosition(company) }}>
      <div className={styles.timelineDot} />
      <div className={styles.timelineEntryContent}>
        <div className={styles.timelineNameRow}>
          <span className={styles.timelineCompany}>{company.name}</span>
        </div>
        <span className={styles.timelineRole}>{company.title}</span>
        <span className={styles.timelinePeriod}>{company.period}</span>
      </div>
    </div>
  );
}

function TimelineSubItem({ company }: { company: Company }) {
  return (
    <div className={styles.timelineSubEntry} style={{ left: timelinePosition(company) }}>
      {company.blurb && <span className={styles.timelineSubBlurb}>{company.blurb}</span>}
      <div className={styles.timelineSubDot} />
      <div className={styles.timelineSubContent}>
        <span className={styles.timelineSubName}>{company.name}</span>
        {company.blurb && <span className={styles.timelineSubBlurbMobile}>{company.blurb}</span>}
      </div>
    </div>
  );
}

const digg = companies.find((c) => c.name === 'Digg') as Company;
const basicIntel = companies.find((c) => c.name === 'Basic Intelligence') as Company;

export default function Work() {
  return (
    <>
      <PageHeader
        label="// Work"
        heading={<>Work I&apos;ve owned on teams.</>}
        tagline={`${yearsSince(careerStart)} years of production code across four teams, domains, and stacks.`}
      >
        <p>
          Since pivoting from artist management, I&apos;ve covered a lot of ground — climate risk to
          social media to healthcare, Go to TypeScript, AWS to GCP.
        </p>
      </PageHeader>

      {/* Companies — timeline */}
      <section className={styles.companiesSection}>
        <SectionLabel>Companies</SectionLabel>
        <div className={styles.timeline}>
          {companies.map((c) =>
            c.variant === 'sub' ? (
              <TimelineSubItem key={c.name} company={c} />
            ) : (
              <TimelineItem key={c.name} company={c} />
            ),
          )}
          <div
            className={styles.timelineConnector}
            style={{
              left: timelinePosition(digg),
              width: `calc(${timelinePosition(basicIntel)} - ${timelinePosition(digg)} - 45px)`,
            }}
          />
        </div>
      </section>

      {/* Press & accolades */}
      <section className={styles.pressSection}>
        <div className={styles.sectionHeader}>
          <SectionLabel>Press</SectionLabel>
          <h2 className={styles.sectionTitle}>Press &amp; accolades.</h2>
        </div>
        <div className={styles.pressGrid}>
          {press.map((item) => (
            <Card
              key={item.id}
              variant="olive"
              num={item.year}
              title={item.outlet}
              href={item.url}
              target={item.url ? '_blank' : undefined}
              rel={item.url ? 'noopener noreferrer' : undefined}
            >
              <div className={styles.pressBody}>
                <p className={styles.pressHeadline}>{item.headline}</p>
                <div className={styles.pressMeta}>{item.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Shipped */}
      <section className={styles.shippedSection}>
        <div className={styles.sectionHeader}>
          <SectionLabel>Shipped</SectionLabel>
          <h2 className={styles.sectionTitle}>What I&apos;ve built.</h2>
        </div>

        {[
          { name: 'Digg', meta: 'Senior Fullstack Engineer · 2025–2026' },
          { name: 'Sensible Weather', meta: 'Staff Fullstack Engineer · 2020–2025' },
          { name: 'Syntx', meta: 'Fullstack Engineer · 2019–2020' },
        ].map((group) => {
          const groupFeatures = features.filter((f) => f.company === group.name);
          const stats = companyStats.find((s) => s.company === group.name);
          return (
            <div key={group.name} className={styles.companyGroup}>
              <div className={styles.companyLabel}>
                {group.name} · {group.meta}
              </div>
              <div className={styles.featureGrid}>
                {groupFeatures.map((item, i) => (
                  <Card
                    key={item.id}
                    variant="ochre"
                    num={String(i + 1).padStart(2, '0')}
                    title={item.title}
                  >
                    <div className={styles.featureBody}>
                      <p className={styles.featureDesc}>{renderLinkedText(item.description)}</p>
                    </div>
                  </Card>
                ))}
                {stats && (
                  <div
                    className={styles.statCard}
                    data-cols={stats.stats.length >= 4 ? '2' : undefined}
                  >
                    {stats.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className={
                          stat.supporting ? styles.statItemWithSupporting : styles.statItem
                        }
                      >
                        <div className={styles.statMain}>
                          <div className={styles.statValue}>{stat.value}</div>
                          <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                        {stat.supporting && (
                          <div className={styles.statSupporting}>
                            {stat.supporting.map((sub) => (
                              <div key={sub.label} className={styles.statSubItem}>
                                <div className={styles.statSubValue}>{sub.value}</div>
                                <div className={styles.statSubLabel}>{sub.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
