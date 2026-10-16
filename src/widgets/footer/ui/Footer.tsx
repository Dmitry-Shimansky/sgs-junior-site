import { AMAZON_URL, ANCHOR, toAnchor } from '@/src/shared/constants'
import {Container, Logo, TextLink} from '@/src/shared/ui'
import { Icon } from '@/src/shared/ui/Icon/Icon'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer id={ANCHOR.CONTACT}>
      <Container>
        <div className={styles.inner}>
          <Logo image={'top_logo-cropped.png'} size="lg" />
          <nav aria-label="Fußzeile" className={styles.links}>
            <TextLink href={AMAZON_URL} external icon={<Icon iconId="instagram-colour" size={18} />}>
              Instagram
            </TextLink>
            <TextLink href={AMAZON_URL} external icon={<Icon iconId="telegram-colour" size={18} />}>
              Telegram
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
