import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { products } from './_data'
import { ProductGrid } from './ProductGrid'
import ProductSimple from './Product'

export const ProductList = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '12',
    }}
    py={{
      base: '6',
      md: '8',
      lg: '20',
    }}
  >
    <ProductGrid>
      {products.map((product) => (
        <ProductSimple key={product.id} product={product} />
        
      ))}
    </ProductGrid>
  </Box>
)