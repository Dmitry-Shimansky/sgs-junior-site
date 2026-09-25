import type { ReactNode } from 'react';
import type { ProductSet } from '../model/types';
import styles from './ProductSetCard.module.css';

type ProductSetCardProps = {
  product: ProductSet;
  action?: ReactNode;
};

export function ProductSetCard({ product, action }: ProductSetCardProps) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>
        {product.title}
        {product.subtitle && <span className={styles.subtitle}>{product.subtitle}</span>}
      </h3>
      <div className={styles.photo}>
        <img src={product.image} alt={product.alt} width="1537" height="1023" loading="lazy" />
      </div>
      <p className={styles.composition}>{product.composition}</p>
      {action && <div className={styles.action}>{action}</div>}
    </article>
  );
}
