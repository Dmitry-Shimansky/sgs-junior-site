import { AMAZON_URL, ANCHOR, toAnchor } from '@/src/shared/constants'
import { Container, TextLink } from '@/src/shared/ui'
import { Icon } from '@/src/shared/ui/Icon/Icon'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer id={ANCHOR.CONTACT}>
      <Container>
        <div className={styles.inner}>
          <a
            href={toAnchor(ANCHOR.START)}
            className={styles.logo}
            aria-label="SGS Junior – zur Startseite"
          >
            <Icon iconId="sgs-logo-footer" viewBox="0 0 824 122.5" className={styles.logoIcon} />
          </a>
          <nav aria-label="Fußzeile" className={styles.links}>
            <TextLink
              href={AMAZON_URL}
              external
              className={styles.social}
              icon={<Icon iconId="instagram-colour" size={18} />}
            >
              Instagram
            </TextLink>
            <TextLink
              href={AMAZON_URL}
              external
              className={styles.social}
              icon={<Icon iconId="tiktok-colour" size={18} />}
            >
              Tik Tok
            </TextLink>
            <TextLink href={toAnchor(ANCHOR.START)} icon={<Icon iconId="up-arrow" size={18} />}>
              Nach oben
            </TextLink>
            <span className={styles.copyright}>© {new Date().getFullYear()} SGS Junior</span>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
