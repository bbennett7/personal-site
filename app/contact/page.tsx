import { PageHeader } from '@/components/PageHeader';
import styles from './Contact.module.css';
import { ContactForm } from './ContactForm';

export default function Contact() {
  return (
    <>
      <PageHeader
        label="// Contact"
        heading={<>Get in touch.</>}
        tagline="AI engineering questions, collaborations, or anything, really."
      >
        <p>
          Whether it&apos;s a project idea, a question about something I&apos;ve written, or just a
          hello — I&apos;d love to hear from you.
        </p>
      </PageHeader>

      <section className={styles.formSection}>
        <ContactForm />
      </section>
    </>
  );
}
