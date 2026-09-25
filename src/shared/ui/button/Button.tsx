import type { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  size?: 'md' | 'lg';
};

export function ButtonLink({ children, size = 'md', className = '', ...props }: ButtonLinkProps) {
  return (
    <a {...props} className={`${styles.button} ${styles[size]} ${className}`}>
      {children}
    </a>
  );
}
