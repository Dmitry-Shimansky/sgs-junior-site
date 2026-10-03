import clsx from 'clsx';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { EXTERNAL_LINK_HINT, EXTERNAL_LINK_PROPS } from '@/src/shared/lib';
import styles from './TextLink.module.scss';

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  /** Opens in a new tab and adds a screen-reader hint. */
  external?: boolean;
};

/** Inline navigation link with an optional leading icon. */
export const TextLink = (props: TextLinkProps) => {
  const { children, icon, external = false, className, ...rest } = props;

  return (
    <a
      {...(external && EXTERNAL_LINK_PROPS)}
      {...rest}
      className={clsx(styles.link, className)}
    >
      {icon}
      {children}
      {external && <span className="sr-only">{EXTERNAL_LINK_HINT}</span>}
    </a>
  );
};
