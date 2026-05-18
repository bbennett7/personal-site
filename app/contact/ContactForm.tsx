'use client';

import { useActionState, useEffect, useRef } from 'react';
import styles from './Contact.module.css';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = 'idle' | 'success' | 'error';

async function submitContact(_prev: Status, formData: FormData): Promise<Status> {
  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });
    return res.ok ? 'success' : 'error';
  } catch {
    return 'error';
  }
}

export function ContactForm() {
  const [status, action, isPending] = useActionState(submitContact, 'idle');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (status === 'success') formRef.current?.reset();
  }, [status]);

  if (status === 'success') {
    return (
      <div className={styles.success}>Thanks for reaching out — I'll get back to you soon.</div>
    );
  }

  return (
    <form ref={formRef} className={styles.form} action={action}>
      <input
        type="text"
        name="_gotcha"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="What's on your mind?"
          className={styles.textarea}
        />
      </div>

      {status === 'error' && (
        <p className={styles.error}>
          Something went wrong — please try again or email me directly.
        </p>
      )}

      <button type="submit" className={styles.submit} disabled={isPending}>
        {isPending ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
}
