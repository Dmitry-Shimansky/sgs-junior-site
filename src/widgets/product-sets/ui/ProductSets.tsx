import { PRODUCT_SETS, ProductSetCard } from '@/src/entities/product'
import { BuyOnAmazonButton } from '@/src/features/buy-on-amazon'
import { ANCHOR } from '@/src/shared/constants'
import { Section } from '@/src/shared/ui'
import styles from './ProductSets.module.scss'

export const ProductSets = () => {
  return (
    <Section id={ANCHOR.PRODUCTS} title="Unsere Sets">
      <div className={styles.grid}>
        {PRODUCT_SETS.map(product => (
          <ProductSetCard
            key={product.id}
            product={product}
            action={<BuyOnAmazonButton href={product.amazonUrl} withIcon={false} />}
          />
        ))}
      </div>
    </Section>
  )
}
