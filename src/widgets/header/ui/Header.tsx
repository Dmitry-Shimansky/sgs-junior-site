import { ANCHOR, NAV_ITEMS, toAnchor } from '@/src/shared/constants'
import { Container, TextLink } from '@/src/shared/ui'
import { withBasePath } from '@/src/shared/lib'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header id={ANCHOR.START} className={styles.header}>
      <Container className={styles.inner}>
        <a
          href={toAnchor(ANCHOR.START)}
          className={styles.logo}
          aria-label="SGS Junior – zur Startseite"
        >
          {/* Loaded as an image, not via the sprite: gradients inside an external
              sprite <symbol> don't render, which hid the red mark. */}
          <img
            src={withBasePath('/images/sgs-logo-header.svg')}
            alt=""
            width="86"
            height="46"
            className={styles.logoIcon}
          />
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
