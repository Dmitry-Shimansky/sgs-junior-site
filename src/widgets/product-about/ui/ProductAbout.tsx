import { PRODUCT_FEATURES, PRODUCT_INTRO } from '@/src/entities/product';
import styles from './ProductAbout.module.css';

export function ProductAbout() {
  return (
    <section id="ueber" className={styles.section} aria-labelledby="about-title">
      <h2 id="about-title" className={styles.title}>
        Über das Produkt
      </h2>
      <p className={styles.intro}>{PRODUCT_INTRO}</p>
      <ul className={styles.list}>
        {PRODUCT_FEATURES.map((feature) => (
          <li key={feature.text} className={styles.item}>
            <p>{feature.text}</p>
            {feature.badge && <span className={styles.badge}>{feature.badge}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
