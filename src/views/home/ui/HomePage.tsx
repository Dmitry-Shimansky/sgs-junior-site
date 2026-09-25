import { Container } from '@/src/shared/ui';
import { Footer } from '@/src/widgets/footer';
import { Header } from '@/src/widgets/header';
import { Hero } from '@/src/widgets/hero';
import { ProductAbout } from '@/src/widgets/product-about';
import { ProductSets } from '@/src/widgets/product-sets';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <div className={styles.page}>
      <a className="skip-link" href="#inhalt">
        Zum Inhalt springen
      </a>
      <div className={styles.shell}>
        <Header />
        <main id="inhalt">
          <Hero />
          <Container className={styles.content}>
            <ProductSets />
            <ProductAbout />
          </Container>
        </main>
        <Footer />
      </div>
    </div>
  );
}
