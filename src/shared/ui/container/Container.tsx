import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Container.module.css';

export function Container({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div {...props} className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
}
