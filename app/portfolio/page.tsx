import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';

export default function Portfolio() {
  return (
    <PageHeader
      label="// Portfolio"
      heading={
        <>
          Things I make
          <br />
          on my own time.
        </>
      }
      tagline="Side projects, design experiments, things I build just because."
    >
      <p>
        Not paid work — that lives on <Link href="/work">/work</Link>. Some are live, some in
        progress, some still drawings on paper. All of them are real.
      </p>
    </PageHeader>
  );
}
