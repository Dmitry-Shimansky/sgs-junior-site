import clsx from 'clsx'
import type { ReactNode } from 'react'
import { withBasePath } from '@/src/shared/lib'
import type { ProductSet } from '../model/types'
import styles from './ProductSetCard.module.scss'

type ProductSetCardProps = {
  product: ProductSet
  action?: ReactNode
}

export const ProductSetCard = (props: ProductSetCardProps) => {
  const { product, action } = props

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>
        {product.title}
        {product.subtitle && <span className={styles.subtitle}>{product.subtitle}</span>}
      </h3>
      <div className={clsx(styles.photo, product.imageFit === 'contain' && styles.contain)}>
        <img
          src={withBasePath(product.image)}
          alt={product.alt}
          width="1254"
          height="1254"
          loading="lazy"
        />
      </div>
      <p className={styles.composition}>{product.composition}</p>
      {action && <div className={styles.action}>{action}</div>}
    </article>
  )
}
