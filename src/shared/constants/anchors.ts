// In-page section ids; use `toAnchor` to build the matching href.
export const ANCHOR = {
  START: 'start',
  CONTENT: 'inhalt',
  PRODUCTS: 'produkte',
  ABOUT: 'ueber',
  CONTACT: 'kontakt',
} as const

export type Anchor = (typeof ANCHOR)[keyof typeof ANCHOR]

export const toAnchor = (id: Anchor) => `#${id}`
