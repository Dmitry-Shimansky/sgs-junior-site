import { AMAZON_URL, AMAZON_URLS } from '@/src/shared/constants'
import type { ProductSet } from './types'

// All sets currently point to the same Amazon listing; swap per-variant URLs here when available.
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
    id: 'ganz-in-schwarz',
    title: 'Ganz in Schwarz',
    subtitle: '(10 × Schwarz)',
    image: '/images/BLACK_SET.png',
    alt: 'Zehn schwarze SGS Jungen-Boxershorts',
    composition: '10 × Schwarz',
    amazonUrl: AMAZON_URLS.black_set,
  },
]
