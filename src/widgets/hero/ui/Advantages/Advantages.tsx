import { withBasePath } from '@/src/shared/lib'
import { Container } from '@/src/shared/ui'
import styles from './Advantages.module.scss'

type Advantage = {
  title: string
  text: string
  image: string
}

const ADVANTAGES: Advantage[] = [
  {
    title: 'Weich',
    text: '95 % Baumwolle für ein angenehmes Hautgefühl.',
    image: '/images/advantage-1-bg.png',
  },
  {
    title: 'Atmungsaktiv',
    text: 'Luftdurchlässige Baumwolle für jeden Tag.',
    image: '/images/advantage-2-bg.png',
  },
  {
    title: 'Flexibel',
    text: '5 % Elasthan für viel Bewegungsfreiheit.',
    image: '/images/advantage-3-bg.png',
  },
  {
    title: 'Pflegeleicht',
    text: 'Für die Maschinenwäsche geeignet.',
    image: '/images/advantage-4-bg.png',
  },
]

export const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <svg
        className={styles.waves}
        viewBox="0 0 1200 320"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className={styles.waveBack}
          d="M0 150 C 220 60 420 110 640 120 C 860 130 1020 40 1200 70 L1200 260 C 980 300 760 250 560 280 C 360 310 160 290 0 320 Z"
        />
        <path
          className={styles.waveMid}
          d="M0 120 C 180 170 360 200 560 170 C 760 140 960 110 1200 150 L1200 230 C 1000 250 800 300 560 290 C 340 280 160 260 0 280 Z"
        />
        <path
          className={styles.waveFront}
          d="M0 220 C 240 180 460 250 700 240 C 920 230 1060 200 1200 210 L1200 320 L0 320 Z"
        />
      </svg>

      <Container>
        <h2 className={styles.title}>Gut durch den Alltag</h2>
        <ul className={styles.list}>
          {ADVANTAGES.map(advantage => (
            <li key={advantage.title} className={styles.item}>
              <span className={styles.badge}>
                <img
                  className={styles.icon}
                  src={withBasePath(advantage.image)}
                  alt=""
                  width="140"
                  height="140"
                  loading="lazy"
                />
              </span>
              <h3 className={styles.itemTitle}>{advantage.title}</h3>
              <p className={styles.text}>{advantage.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
