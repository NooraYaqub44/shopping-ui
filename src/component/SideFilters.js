import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  CheckboxGroup,
  Stack,
  Wrap,
  WrapItem,
  Button
} from "@chakra-ui/react";
import {
  FiMenu
} from "react-icons/fi";


export default function SideFilter({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="0vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 6 }} p="0">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="relative"
      h="full"
      pt={{md:20,base:2}}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Filter
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Clothes
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Dress</AccordionPanel>
          <AccordionPanel pb={4}>Hijab</AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Clothes
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Dress</AccordionPanel>
          <AccordionPanel pb={4}>Hijab</AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Clothes
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Dress</AccordionPanel>
          <AccordionPanel pb={4}>Hijab</AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Clothes
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Dress</AccordionPanel>
          <AccordionPanel pb={4}>Hijab</AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" m="5">
        Price
      </Text>
      <CheckboxGroup colorScheme="pink">
        <Stack spacing={[1, 3]} direction={["column", "column"]} m="5">
          <Checkbox value="0 TL - 40 TL">0 TL - 40 TL</Checkbox>
          <Checkbox value="40 TL - 70 TL">40 TL - 70 TL</Checkbox>
          <Checkbox value="70 TL - 80 TL">70 TL - 80 TL</Checkbox>
          <Checkbox value="80 TL - 100 TL">80 TL - 100 TL</Checkbox>
          <Checkbox value="100 TL - 200 T">100 TL - 200 TL</Checkbox>
          <Checkbox value="200 TL - 500 TL">200 TL - 500 TL</Checkbox>
        </Stack>
      </CheckboxGroup>

      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" m="5">
        Size
      </Text>
      <CheckboxGroup colorScheme="pink">
        <Stack spacing={[1, 3]} direction={["column", "column"]} m="5">
          <Checkbox value="1">1</Checkbox>
          <Checkbox value="2">2</Checkbox>
          <Checkbox value="3">3</Checkbox>
          <Checkbox value="4">4</Checkbox>
          <Checkbox value="5">5</Checkbox>
          <Checkbox value="6">6</Checkbox>
          <Checkbox value="7">7</Checkbox>
        </Stack>
      </CheckboxGroup>
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" ml="5" mt="5">
        Color
      </Text>
      <Wrap p="3">
  <WrapItem>
    <Button bg='red.200' borderRadius="full">
    </Button>
  </WrapItem>
  <WrapItem>
    <Button bg='red.200' borderRadius="full">
    </Button>
  </WrapItem>
  <WrapItem>
    <Button bg='red.200' borderRadius="full">
    </Button>
  </WrapItem>
  <WrapItem>
    <Button bg='red.200' borderRadius="full">
    </Button>
  </WrapItem>
  <WrapItem>
    <Button bg='red.200' borderRadius="full">
    </Button>
  </WrapItem>
  <WrapItem>
    <Button bg='red.200' borderRadius="full">
    </Button>
  </WrapItem>
  <WrapItem>
    <Button bg='red.200' borderRadius="full">
    </Button>
  </WrapItem>
</Wrap>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 6 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Filter
      </Text>
    </Flex>
  );
};
