import { ShoppingCart } from 'lucide-react'
import { AMAZON_URL } from '@/src/shared/constants'
import { Button } from '@/src/shared/ui'

type BuyOnAmazonButtonProps = {
  href?: string
  size?: 'md' | 'lg'
  className?: string
  label?: string
  withIcon?: boolean
}

export const BuyOnAmazonButton = (props: BuyOnAmazonButtonProps) => {
  const {
    href = AMAZON_URL,
    size = 'md',
    className,
    label = 'Auf Amazon kaufen',
    withIcon = true,
  } = props

  return (
    <Button
      href={href}
      external
      size={size}
      className={className}
      icon={withIcon && <ShoppingCart size={20} strokeWidth={2} aria-hidden="true" />}
    >
      {label}
    </Button>
  )
}
