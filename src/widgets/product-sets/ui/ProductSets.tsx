import { PRODUCT_SETS, ProductSetCard } from '@/src/entities/product'
import { ANCHOR } from '@/src/shared/constants'
import { Button, Section } from '@/src/shared/ui'
import styles from './ProductSets.module.scss'

export const ProductSets = () => {
  return (
    <Section id={ANCHOR.PRODUCTS} title="Unsere Sets">
      <div className={styles.grid}>
        {PRODUCT_SETS.map(product => (
          <ProductSetCard
            key={product.id}
            product={product}
            action={
              <Button href={product.amazonUrl} external>
                Auf Amazon kaufen
              </Button>
            }
          />
        ))}
      </div>
    </Section>
  )
}
