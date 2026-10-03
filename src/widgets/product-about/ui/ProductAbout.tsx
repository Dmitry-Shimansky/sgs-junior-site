import { PRODUCT_FEATURES, PRODUCT_INTRO } from '@/src/entities/product'
import { ANCHOR } from '@/src/shared/constants'
import { Badge, Section } from '@/src/shared/ui'
import styles from './ProductAbout.module.scss'

export const ProductAbout = () => {
  return (
    <Section id={ANCHOR.ABOUT} title="Über das Produkt">
      <p className={styles.text}>{PRODUCT_INTRO}</p>
      <ul className={styles.list}>
        {PRODUCT_FEATURES.map(feature => (
          <li key={feature.text} className={styles.item}>
            <p className={styles.text}>{feature.text}</p>
            {feature.badge && <Badge>{feature.badge}</Badge>}
          </li>
        ))}
      </ul>
    </Section>
  )
}
