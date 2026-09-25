import type { CSSProperties } from 'react';
import { BuyOnAmazonButton } from '@/src/features/buy-on-amazon';
import { Container } from '@/src/shared/ui';
import styles from './Hero.module.css';

// Close-ups cut from the existing product shots (image-space px of a 1537×1023 source).
const TILES = [
  { className: styles.tileTopLeft, src: '/images/bunter-mix.jpg', cx: 175, cy: 330 },
  { className: styles.tileTopRight, src: '/images/klassischer-mix.png', cx: 768, cy: 325 },
  { className: styles.tileBottomLeft, src: '/images/bunter-mix.jpg', cx: 478, cy: 672 },
  { className: styles.tileBottomRight, src: '/images/klassischer-mix.png', cx: 1358, cy: 665 },
];

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.title}>
            SGS Junior – Komfort & Spaß für aktive Jungs!
          </h1>
          <BuyOnAmazonButton size="lg" label="Jetzt auf Amazon kaufen" />
        </div>
        <div className={styles.collage}>
          <div className={styles.stage}>
            {TILES.map((tile) => (
              <div
                key={tile.className}
                className={`${styles.tile} ${tile.className}`}
                style={{ '--cx': tile.cx, '--cy': tile.cy } as CSSProperties}
                aria-hidden="true"
              >
                <img src={tile.src} alt="" width="1537" height="1023" />
              </div>
            ))}
            <div
              className={`${styles.tile} ${styles.tileCenter}`}
              style={{ '--cx': 768, '--cy': 500 } as CSSProperties}
            >
              <img
                src="/images/bunter-mix.jpg"
                alt="SGS Junior: zehn bunte Boxershorts für Jungen mit schwarzem Markenbund"
                width="1537"
                height="1023"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
