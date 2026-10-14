import { AMAZON_URL } from '@/src/shared/constants'
import { withBasePath } from '@/src/shared/lib'
import { Button, Container } from '@/src/shared/ui'
import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.title}>
            SGS Junior – Komfort & Spaß für aktive Jungs!
          </h1>
          <Button href={AMAZON_URL} external size="lg" iconId="amazon">
            Jetzt auf Amazon kaufen
          </Button>
        </div>
        <div className={styles.media}>
          <img
            className={styles.image}
            src={withBasePath('/images/kids-bg-removed.png')}
            alt="SGS Junior: zehn bunte Boxershorts für Jungen mit schwarzem Markenbund"
            width="1106"
            height="532"
            fetchPriority="high"
          />
        </div>
      </Container>
    </section>
  )
}
