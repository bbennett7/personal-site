import styles from './SectionLabel.module.css';

type SectionLabelProps = { children: string };

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className={styles.label}>
      {'// '}
      {children}
    </p>
  );
}
