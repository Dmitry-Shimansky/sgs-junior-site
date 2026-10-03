import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Container.module.scss';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const Container = (props: ContainerProps) => {
  const { children, className, ...rest } = props;

  return (
    <div {...rest} className={clsx(styles.container, className)}>
      {children}
    </div>
  );
};
