import clsx from 'clsx'
import { AMAZON_URL, ANCHOR } from '@/src/shared/constants'
import { withBasePath } from '@/src/shared/lib'
import { Button, Section } from '@/src/shared/ui'
import { Icon } from '@/src/shared/ui/Icon/Icon'
import styles from './ProductAbout.module.scss'

type Callout = {
  id: 'cotton' | 'airflow' | 'stretch'
  title: string
  text: string
  /** Symbol id in `public/icons-sprite.svg`. */
  iconId: string
}

const CALLOUTS: Callout[] = [
  {
    id: 'cotton',
    title: 'Weiche Baumwolle',
    text: '95 % Baumwolle – angenehm auf der Haut.',
    iconId: 'cotton',
  },
  {
    id: 'airflow',
    title: 'Atmungsaktiv',
    text: 'Luftdurchlässiges Material für den Alltag.',
    iconId: 'airflow',
  },
  {
    id: 'stretch',
    title: 'Bewegungsfreiheit',
    text: '5 % Elasthan für eine flexible Passform.',
    iconId: 'stretch',
  },
]

export const ProductAbout = () => {
  return (
    <Section id={ANCHOR.ABOUT} title="Über das Produkt" className={styles.section}>
      <p className={styles.subtitle}>Komfort bis ins Detail</p>

      <div className={styles.layout}>
        <figure className={styles.figure}>
          <img
            className={styles.product}
            src={withBasePath('/images/underpants-bg-removed.png')}
            alt="Dunkelblaue SGS Jungen-Boxershorts mit schwarzem Markenbund"
            width="1264"
            height="843"
            loading="lazy"
          />

          {/* Leader lines from each callout to its spot on the garment (viewBox = figure aspect). */}
          <svg
            className={styles.leaders}
            viewBox="0 0 820 440"
            aria-hidden="true"
            focusable="false"
          >
            <polyline points="100,90 215,90 277,128" />
            <circle cx="277" cy="128" r="6" />
            <polyline points="652,135 607,135 558,172" />
            <circle cx="558" cy="172" r="6" />
            <polyline points="237,333 340,333 402,282" />
            <circle cx="402" cy="282" r="6" />
          </svg>

          <ul className={styles.callouts}>
            {CALLOUTS.map(({ id, title, text, iconId }) => (
              <li key={id} className={clsx(styles.callout, styles[id])}>
                <Icon iconId={iconId} viewBox="0 0 105 70" className={styles.calloutIcon} />
                <h3 className={styles.calloutTitle}>{title}</h3>
                <p className={styles.calloutText}>{text}</p>
              </li>
            ))}
          </ul>
        </figure>

        <div className={styles.waistband}>
          <img
            className={styles.waistbandImage}
            src={withBasePath('/images/waistband-detail.jpg')}
            alt="Nahaufnahme des schwarzen Markenbunds mit weißem SGS-Logo"
            width="640"
            height="392"
            loading="lazy"
          />
          <h3 className={styles.waistbandTitle}>Elastischer Markenbund</h3>
          <p className={styles.waistbandText}>
            Angenehmer Sitz und Bewegungsfreiheit – für Schule, Freizeit und Sport.
          </p>
        </div>
      </div>

      <div className={styles.cta}>
        <Button href={AMAZON_URL} external size="lg">
          Auf Amazon entdecken
        </Button>
      </div>
    </Section>
  )
}
