import clsx from 'clsx'
import { ANCHOR, toAnchor } from '@/src/shared/constants'
import { withBasePath } from '@/src/shared/lib'
import styles from './Logo.module.scss'

type LogoProps = {
  href?: string
  size?: 'md' | 'lg'
}

export const Logo = (props: LogoProps) => {
  const { href = toAnchor(ANCHOR.START), size = 'md' } = props

  return (
    <a
      href={href}
      className={clsx(styles.logo, styles[size])}
      aria-label="SGS Junior – zur Startseite"
    >
      <img src={withBasePath('/images/sgs-logo.jpg')} alt="SGS" width="2048" height="1280" />
    </a>
  )
}
