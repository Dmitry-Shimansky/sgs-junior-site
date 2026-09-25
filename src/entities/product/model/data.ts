import { AMAZON_URL } from '@/src/shared/config';
import type { ProductFeature, ProductSet } from './types';

// All sets currently point to the same Amazon listing; swap per-variant URLs here when available.
export const PRODUCT_SETS: ProductSet[] = [
  {
    id: 'bunter-mix',
    title: 'Bunter Mix',
    image: '/images/bunter-mix.jpg',
    alt: 'Zehn SGS Jungen-Boxershorts: je zwei in Bordeauxrot, Petrol, Blau, Grau und Hellblau',
    composition: 'je 2 × Bordeauxrot · Petrol · Blau · Grau · Hellblau',
    amazonUrl: AMAZON_URL,
  },
  {
    id: 'klassischer-mix',
    title: 'Klassischer Mix',
    subtitle: '(Schwarz/Blau/Grau)',
    image: '/images/klassischer-mix.png',
    alt: 'Zehn SGS Jungen-Boxershorts: vier schwarze, drei blaue und drei graue',
    composition: '4 × Schwarz · 3 × Blau · 3 × Grau',
    amazonUrl: AMAZON_URL,
  },
  {
    id: 'ganz-in-schwarz',
    title: 'Ganz in Schwarz',
    subtitle: '(10 × Schwarz)',
    image: '/images/schwarz.png',
    alt: 'Zehn schwarze SGS Jungen-Boxershorts',
    composition: '10 × Schwarz',
    amazonUrl: AMAZON_URL,
  },
];

export const PRODUCT_INTRO =
  'Bequeme Boxershorts für Jungen – gemacht für Schule, Sport und alles, was ein aktiver Tag bringt.';

export const PRODUCT_FEATURES: ProductFeature[] = [
  { text: 'Weiche, atmungsaktive Baumwolle (95 %) mit 5 % Elasthan für ein angenehmes Hautgefühl.', badge: 'Baumwolle' },
  { text: 'Körpergerechte Passform mit viel Bewegungsfreiheit beim Spielen und Toben.', badge: 'Bewegung' },
  { text: 'EU-Kindergrößen von 98 bis 176 – die Größentabelle auf Amazon hilft bei der Auswahl.' },
  { text: 'Praktisches 10er-Pack für den täglichen Wechsel. Für die Maschinenwäsche geeignet.', badge: '10er-Pack' },
];
