import { PageHeader } from '@/components/PageHeader';

export default function About() {
  return (
    <PageHeader
      label="// About"
      heading={
        <>
          A bit
          <br />
          about me.
        </>
      }
      tagline="Senior fullstack engineer based in Los Angeles, CA."
    />
  );
}
