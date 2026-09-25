import { PRODUCT_SETS, ProductSetCard } from '@/src/entities/product';
import { BuyOnAmazonButton } from '@/src/features/buy-on-amazon';
import styles from './ProductSets.module.css';

export function ProductSets() {
  return (
    <section id="produkte" className={styles.section} aria-labelledby="sets-title">
      <h2 id="sets-title" className={styles.title}>
        Unsere Sets
      </h2>
      <div className={styles.grid}>
        {PRODUCT_SETS.map((product) => (
          <ProductSetCard key={product.id} product={product} action={<BuyOnAmazonButton href={product.amazonUrl} withIcon={false} />} />
        ))}
      </div>
    </section>
  );
}
