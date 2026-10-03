import clsx from 'clsx'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { EXTERNAL_LINK_HINT, EXTERNAL_LINK_PROPS } from '@/src/shared/lib'
import styles from './Button.module.scss'

type ButtonVariant = 'primary' | 'outline'
type ButtonSize = 'md' | 'lg'

type BaseProps = {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  iconPosition?: 'start' | 'end'
  fullWidth?: boolean
  className?: string
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: never
  }

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string
    /** Opens in a new tab and adds a screen-reader hint. */
    external?: boolean
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

const isLink = (props: ButtonProps): props is ButtonAsLink => typeof props.href === 'string'

/** Renders an `<a>` when `href` is passed, otherwise a `<button>`. */
export const Button = (props: ButtonProps) => {
  const {
    children,
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'end',
    fullWidth = false,
    className,
  } = props

  const classNames = clsx(
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className
  )

  const content = (
    <>
      {iconPosition === 'start' && icon}
      {children}
      {iconPosition === 'end' && icon}
    </>
  )

  if (isLink(props)) {
    const {
      variant: _variant,
      size: _size,
      icon: _icon,
      iconPosition: _iconPosition,
      fullWidth: _fullWidth,
      className: _className,
      children: _children,
      external,
      ...anchorProps
    } = props

    return (
      <a {...(external && EXTERNAL_LINK_PROPS)} {...anchorProps} className={classNames}>
        {content}
        {external && <span className="sr-only">{EXTERNAL_LINK_HINT}</span>}
      </a>
    )
  }

  const {
    variant: _variant,
    size: _size,
    icon: _icon,
    iconPosition: _iconPosition,
    fullWidth: _fullWidth,
    className: _className,
    children: _children,
    type = 'button',
    ...buttonProps
  } = props

  return (
    <button type={type} {...buttonProps} className={classNames}>
      {content}
    </button>
  )
}
