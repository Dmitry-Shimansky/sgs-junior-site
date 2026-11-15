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

const WAVES_WIDTH = 1200
const WAVES_BAND_HEIGHT = 376
const WAVES_TAIL_HEIGHT = 180

const WavePaths = () => (
  <>
    {/* Slate-blue base; its lower edge runs from the band's bottom-right to the tail's bottom-left. */}
    <path
      className={styles.waveBack}
      d="M0 150 C200 90 380 130 560 150 C760 170 980 90 1200 110 L1200 340 C1000 380 780 380 580 420 C380 460 180 520 0 556 Z"
    />
    {/* Teal accents: top right and middle left. */}
    <path
      className={styles.waveMid}
      d="M620 125 C800 60 1000 40 1200 60 L1200 230 C1040 250 880 225 760 195 C700 178 650 155 620 125 Z"
    />
    <path className={styles.waveMid} d="M0 250 C130 225 270 240 390 285 C290 318 140 330 0 345 Z" />
    {/* Pale swoosh under the texts. */}
    <path
      className={styles.waveFront}
      d="M0 300 C200 270 420 300 640 290 C860 280 1040 230 1200 220 L1200 340 C1000 380 780 380 580 420 C420 452 220 470 0 480 Z"
    />
  </>
)

export const Advantages = () => {
  return (
    <div className={styles.advantages}>
      {/* One wave drawing (1200 × 556) split in two: the band behind the advantages
          and a tail that sweeps down-left behind the next section. */}
      <svg
        className={styles.waves}
        viewBox={`0 0 ${WAVES_WIDTH} ${WAVES_BAND_HEIGHT}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <WavePaths />
      </svg>
      <svg
        className={styles.tail}
        viewBox={`0 ${WAVES_BAND_HEIGHT} ${WAVES_WIDTH} ${WAVES_TAIL_HEIGHT}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <WavePaths />
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
