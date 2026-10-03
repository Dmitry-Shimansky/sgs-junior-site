import { ANCHOR, NAV_ITEMS } from '@/src/shared/constants';
import { Container, Logo, TextLink } from '@/src/shared/ui';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header id={ANCHOR.START} className={styles.header}>
      <Container className={styles.inner}>
        <Logo />
        <nav aria-label="Hauptnavigation" className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <TextLink key={item.href} href={item.href}>
              {item.label}
            </TextLink>
          ))}
        </nav>
      </Container>
    </header>
  );
};
