import { ANCHOR, NAV_ITEMS, toAnchor } from '@/src/shared/constants'
import { Container, TextLink } from '@/src/shared/ui'
import { withBasePath } from '@/src/shared/lib'
import styles from './Header.module.scss'
import {Icon} from "@/src/shared/ui/Icon/Icon";

export const Header = () => {
  return (
    <header id={ANCHOR.START} className={styles.header}>
      <Container className={styles.inner}>
        <a
          href={toAnchor(ANCHOR.START)}
          className={styles.logo}
          aria-label="SGS Junior – zur Startseite"
        >
          <Icon iconId="sgs-logo-header" viewBox="0 0 959 515" className={styles.logoIcon} />
        </a>
        <nav aria-label="Hauptnavigation" className={styles.nav}>
          {NAV_ITEMS.map(item => (
            <TextLink key={item.href} href={item.href}>
              {item.label}
            </TextLink>
          ))}
        </nav>
      </Container>
    </header>
  )
}
