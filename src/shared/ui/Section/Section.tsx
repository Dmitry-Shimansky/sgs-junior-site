import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Section.module.scss';

type SectionProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  id: string;
  title: ReactNode;
  children: ReactNode;
};

/** Page section with an `h2` heading wired up via `aria-labelledby`. */
export const Section = (props: SectionProps) => {
  const { id, title, children, className, ...rest } = props;
  const titleId = `${id}-title`;

  return (
    <section
      {...rest}
      id={id}
      className={clsx(styles.section, className)}
      aria-labelledby={titleId}
    >
      <h2 id={titleId} className={styles.title}>
        {title}
      </h2>
      {children}
    </section>
  );
};
