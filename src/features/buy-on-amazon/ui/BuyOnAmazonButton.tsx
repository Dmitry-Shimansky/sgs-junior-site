import { ShoppingCart } from 'lucide-react';
import { AMAZON_URL } from '@/src/shared/config';
import { ButtonLink } from '@/src/shared/ui';

type BuyOnAmazonButtonProps = {
  href?: string;
  size?: 'md' | 'lg';
  className?: string;
  label?: string;
  withIcon?: boolean;
};

export function BuyOnAmazonButton({ href = AMAZON_URL, size = 'md', className, label = 'Auf Amazon kaufen', withIcon = true }: BuyOnAmazonButtonProps) {
  return (
    <ButtonLink href={href} target="_blank" rel="noopener noreferrer" size={size} className={className}>
      {label}
      {withIcon && <ShoppingCart size={20} strokeWidth={2} aria-hidden="true" />}
      <span className="sr-only"> (Amazon, öffnet in einem neuen Tab)</span>
    </ButtonLink>
  );
}
