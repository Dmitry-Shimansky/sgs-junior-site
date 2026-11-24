export type ProductSet = {
  id: string
  title: string
  subtitle?: string
  image: string
  /** `contain` shows the whole image; the default `cover` crops its top and bottom. */
  imageFit?: 'cover' | 'contain'
  alt: string
  composition: string
  amazonUrl: string
}
