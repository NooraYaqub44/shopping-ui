import { Box, Link, SimpleGrid, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading'

export const LinkGrid = (props) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Product</FooterHeading>
      <Stack>
        <Link>Home</Link>
        <Link href='/shoppingUi'>Shopping</Link>
        <Link>Products</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Product</FooterHeading>
      <Stack>
        <Link>How it works</Link>
        <Link>Pricing</Link>
        <Link>Use Cases</Link>
      </Stack>
    </Box>
    
  </SimpleGrid>
)
