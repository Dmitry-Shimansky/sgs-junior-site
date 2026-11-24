import { AMAZON_URL, AMAZON_URLS } from '@/src/shared/constants'
import type { ProductSet } from './types'

// Sets without their own listing point to AMAZON_URL; swap per-variant URLs here when available.
// TODO: the `*-unterhemden` sets still use the boxer shorts listing as a placeholder.
export const PRODUCT_SETS: ProductSet[] = [
  {
    id: 'bunter-mix',
    title: 'Bunter Mix',
    image: '/images/COLOR_SET.png',
    alt: 'Zehn SGS Jungen-Boxershorts: je zwei in Bordeauxrot, Petrol, Blau, Grau und Hellblau',
    composition: 'je 2 × Bordeauxrot · Petrol · Blau · Grau · Hellblau',
    amazonUrl: AMAZON_URL,
  },
  {
    id: 'klassischer-mix',
    title: 'Klassischer Mix',
    subtitle: '(Schwarz/Blau/Grau)',
    image: '/images/GRAY_TOP_SET.png',
    alt: 'Zehn SGS Jungen-Boxershorts: vier schwarze, drei blaue und drei graue',
    composition: '4 × Schwarz · 3 × Blau · 3 × Grau',
    amazonUrl: AMAZON_URL,
  },
  {
    id: 'farbenfroher-mix-unterhemden',
    title: 'Neu: Farbenfroher Mix',
    image: '/images/COLOR_SET_FOLDED.png',
    imageFit: 'contain',
    alt: 'Fünf SGS Junior Unterhemden in Blau, Bordeauxrot, Grau, Petrol und Hellblau',
    composition: '5er-Pack',
    amazonUrl: AMAZON_URL,
  },
  {
    id: 'ganz-in-schwarz',
    title: 'Ganz in Schwarz',
    subtitle: '(10 × Schwarz)',
    image: '/images/BLACK_SET.png',
    alt: 'Zehn schwarze SGS Jungen-Boxershorts',
    composition: '10 × Schwarz',
    amazonUrl: AMAZON_URLS.black_set,
  },
  {
    id: 'klassischer-mix-unterhemden',
    title: 'Neu: Klassischer Mix',
    subtitle: '(Schwarz/Grau/Blau)',
    image: '/images/BLACK_GRAY_NAVY_SET.png',
    imageFit: 'contain',
    alt: 'Fünf SGS Junior Unterhemden: zwei schwarze, zwei graue und ein blaues',
    composition: '5er-Pack',
    amazonUrl: AMAZON_URL,
  },
  {
    id: 'ganz-in-schwarz-unterhemden',
    title: 'Neu: Ganz in Schwarz',
    subtitle: '(5 × Schwarz)',
    image: '/images/BLACK_SET_FOLDED.png',
    imageFit: 'contain',
    alt: 'Fünf schwarze SGS Junior Unterhemden',
    composition: '5er-Pack',
    amazonUrl: AMAZON_URL,
  },
]
