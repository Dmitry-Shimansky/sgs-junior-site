import { ANCHOR, toAnchor } from './anchors'

export const NAV_ITEMS = [
  { href: toAnchor(ANCHOR.START), label: 'Start' },
  { href: toAnchor(ANCHOR.PRODUCTS), label: 'Produkte' },
  { href: toAnchor(ANCHOR.ABOUT), label: 'Über das Produkt' },
  { href: toAnchor(ANCHOR.CONTACT), label: 'Kontakt' },
] as const
