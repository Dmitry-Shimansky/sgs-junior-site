import { ArrowUp, ShoppingCart } from 'lucide-react';
import { AMAZON_URL } from '@/src/shared/config';
import { Container, Logo } from '@/src/shared/ui';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer id="kontakt" className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <Logo size="lg" />
          <nav aria-label="Fußzeile" className={styles.links}>
            <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">
              <ShoppingCart size={18} aria-hidden="true" />
              Bestellung & Kundenservice über Amazon
              <span className="sr-only"> (öffnet in einem neuen Tab)</span>
            </a>
            <a href="#start">
              <ArrowUp size={18} aria-hidden="true" />
              Nach oben
            </a>
            <span className={styles.copyright}>© {new Date().getFullYear()} SGS Junior</span>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
