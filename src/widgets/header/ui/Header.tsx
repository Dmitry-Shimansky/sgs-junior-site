import { NAV_ITEMS } from '@/src/shared/config';
import { Container, Logo } from '@/src/shared/ui';
import styles from './Header.module.css';

export function Header() {
  return (
    <header id="start" className={styles.header}>
      <Container className={styles.inner}>
        <Logo />
        <nav aria-label="Hauptnavigation" className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
