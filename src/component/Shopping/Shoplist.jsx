import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { products } from './_data'
import { ShopGird } from './ShopGird'
import Shop from './Shop'

export const ShopList = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{
      base: '4',
      md: '3',
      lg: '6',
    }}
    py={{
      base: '5',
      md: '3',
      lg: '20',
    }}
  >
    <ShopGird>
      {products.map((product) => (
        <Shop key={product.id} product={product} />
      ))}
    </ShopGird>
  </Box>
)