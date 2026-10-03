import { ArrowUp, ShoppingCart } from 'lucide-react';
import { AMAZON_URL, ANCHOR, toAnchor } from '@/src/shared/constants';
import { Container, Logo, TextLink } from '@/src/shared/ui';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer id={ANCHOR.CONTACT}>
      <Container>
        <div className={styles.inner}>
          <Logo size="lg" />
          <nav aria-label="Fußzeile" className={styles.links}>
            <TextLink
              href={AMAZON_URL}
              external
              icon={<ShoppingCart size={18} aria-hidden="true" />}
            >
              Bestellung & Kundenservice über Amazon
            </TextLink>
            <TextLink
              href={toAnchor(ANCHOR.START)}
              icon={<ArrowUp size={18} aria-hidden="true" />}
            >
              Nach oben
            </TextLink>
            <span className={styles.copyright}>
              © {new Date().getFullYear()} SGS Junior
            </span>
          </nav>
        </div>
      </Container>
    </footer>
  );
};
