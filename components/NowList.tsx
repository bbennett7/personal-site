'use client';

import { useEffect, useState } from 'react';
import styles from '@/app/Home.module.css';
import { type NowEntry, type NowItem, now } from '@/lib/now';

/**
 * The site is a static export, so a build-time filter would only drop expired
 * entries on redeploy. Filtering here runs at build *and* again on mount, so a
 * past event disappears on its own however long it's been since the last deploy.
 */
function isCurrent(entry: string | NowEntry) {
  if (typeof entry === 'string' || !entry.until) return true;
  // Local midnight-to-midnight — an event stays up through the end of its day.
  return new Date(`${entry.until}T23:59:59`) >= new Date();
}

function currentItems(): NowItem[] {
  return now
    .map((item) => ({ ...item, entries: item.entries.filter(isCurrent) }))
    .filter((item) => item.entries.length > 0);
}

export function NowList() {
  const [items, setItems] = useState(currentItems);

  useEffect(() => {
    setItems(currentItems());
  }, []);

  return (
    <div className={styles.nowList}>
      {items.map((item, i) => (
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
                    {e.note && !e.location && (
                      <>
                        {' '}
                        <em>({e.note})</em>
                      </>
                    )}
                    {e.note && e.location && <> — {e.note}</>}
                    {e.location && <>, {e.location}</>}
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
  );
}
