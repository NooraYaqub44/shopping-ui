import { BellIcon } from '@chakra-ui/icons'
import { Box, HStack, Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { BannerLink } from './BannerLink'

export const Banner = () => (
  <Box as="section">
    <Stack
      direction={{
        base: 'column',
        sm: 'row',
      }}
      justifyContent="center"
      alignItems="center"
      py={{
        base: '3',
        md: '6',
        lg: '2',
      }}
      px={{
        base: '3',
        md: '6',
        lg: '8',
      }}
      color="white"
      bg={useColorModeValue('cyan.600', 'cyan.400')}
    >
      <HStack spacing="3">
        <Icon as={BellIcon} fontSize="2xl" h="10" />
        <Text fontWeight="medium" marginEnd="2">
        Order and Support : 0212 550 52 52 ( Weekdays 09:00-19:00 and Saturday 09:00-19:00) You can get service 7/24 Facebook  &  Instagram        </Text>
      </HStack>
    </Stack>
  </Box>
)
