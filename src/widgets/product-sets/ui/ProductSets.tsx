import { PRODUCT_SETS, ProductSetCard } from '@/src/entities/product'
import { ANCHOR } from '@/src/shared/constants'
import { Button, Section, Slider } from '@/src/shared/ui'

export const ProductSets = () => {
  return (
    <Section id={ANCHOR.PRODUCTS} title="Unsere Sets">
      <Slider label="Unsere Sets" prevLabel="Vorheriges Set" nextLabel="Nächstes Set">
        {PRODUCT_SETS.map(product => (
          <li key={product.id}>
            <ProductSetCard
              product={product}
              action={
                <Button href={product.amazonUrl} external>
                  Auf Amazon kaufen
                </Button>
              }
            />
          </li>
        ))}
      </Slider>
    </Section>
  )
}
