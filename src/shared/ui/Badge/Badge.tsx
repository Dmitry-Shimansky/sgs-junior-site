import clsx from 'clsx'
import type { ReactNode } from 'react'
import styles from './Badge.module.scss'

type BadgeVariant = 'success' | 'accent'

type BadgeProps = {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

export const Badge = (props: BadgeProps) => {
  const { children, variant = 'success', className } = props

  return <span className={clsx(styles.badge, styles[variant], className)}>{children}</span>
}
