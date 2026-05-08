import { PageHeader } from '@/components/PageHeader';

export default function Home() {
  return (
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
      tagline="Building AI product systems that actually work in production."
    >
      <p>
        Six years shipping code at small companies — most recently <em>Digg</em>, before that{' '}
        <em>Sensible Weather</em>. Based in Los Angeles.
      </p>
    </PageHeader>
  );
}
