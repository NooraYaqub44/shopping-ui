import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Avatar,
  Wrap,
  WrapItem,
  Stack,
  Text,
  Center,
  useControllableState,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
const collection = [
  { id: 1, name: "Dan Abrahmov", src: "https://bit.ly/dan-abramov" },
  { id: 2, name: "Kent Dodds", src: "https://bit.ly/kent-c-dodds" },
  { id: 3, name: "Segun Adebayo", src: "https://bit.ly/sage-adebayo" },
  { id: 4, name: "Ryan Florence", src: "https://bit.ly/ryan-florence" },
];
const Sizes = [38, 40, 42, 44, 46];

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};
function Shop() {
  const [value, setValue] = useControllableState({ defaultValue: 2 });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80"
  );

  function handleChangeImage({ e }) {
    setImage(e.target.value);
  }

  return (
    <Flex p={10} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
          onClick={onOpen}
        />
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="5xl" // `trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly.
          blockScrollOnMount={false}
          trapFocus={true}
        >
          <ModalOverlay />
          <ModalContent borderRadius="2xl">
            <ModalBody>
              <ModalCloseButton />
              <Center py={3}>
                <Stack
                  borderWidth="1px"
                  borderRadius="lg"
                  height={{ sm: "500px", md: "28rem" }}
                  direction={{ base: "column", md: "row" }}
                  bg={useColorModeValue("white", "gray.900")}
                  boxShadow={"2xl"}
                  padding={2}
                  margin={2}
                >
                      <Flex>
                      <Flex direction={{base:"row",md:"column"}}>
                      {collection.map((mag) => (
                        <Image
                          key={mag.id}
                          boxSize={{base:"65px", md:"100px"}}
                          objectFit="cover"
                          src={mag.src}
                          alt={mag.name}
                          onClick={() => setImage(mag.src)}
                        />
                      ))}
                    </Flex>
                  </Flex>

                  <Flex flex={1} bg="blue.200">
                    <Image
                      src={image}
                      alt={`Picture of ${data.name}`}
                      objectFit="cover"
                      rounded={"lg"}
                      roundedTop="lg"
                      onChange={handleChangeImage}
                    />
                  </Flex>
                  <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}
                  >
                    <Heading fontSize={"2xl"} fontFamily={"body"}>
                      Lindsey James
                    </Heading>

                    <Stack spacing="2" textAlign="center">
                      <Text fontWeight={800} fontSize={"xl"}>
                        $57
                      </Text>
                      <Text textDecoration={"line-through"} color={"gray.600"}>
                        $199
                      </Text>

                      <Text fontSize="lg">Blouse</Text>

                      <Text fontSize="lg">
                        <Box
                          as="span"
                          whiteSpace="nowrap"
                          fontWeight="bold"
                          px={2}
                        >
                          <Button onClick={() => setValue(value + 1)}>+</Button>
                          <Box as="span" w="200px" mx="24px">
                            {value}
                          </Box>
                          <Button onClick={() => setValue(value - 1)}>-</Button>
                        </Box>{" "}
                      </Text>
                    </Stack>
                    <Stack
                      align={"center"}
                      justify={"center"}
                      direction={"row"}
                      mt={6}
                    >
                      {collection.map((img) => (
                        <Wrap key={img.id}>
                          <WrapItem>
                            <Avatar
                              name={img.name}
                              src={img.src}
                              onClick={() => setImage(img.src)}
                            />
                          </WrapItem>
                        </Wrap>
                      ))}
                    </Stack>

                    <Stack mt={"2rem"} direction={"row"} padding={2}>
                      {Sizes.map((Size) => (
                        <Wrap>
                          <Button
                            flex={1}
                            fontSize={"sm"}
                            rounded={"lg "}
                            bg={"gray.400"}
                            color={"white"}
                            boxShadow={
                              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                            }
                            _hover={{
                              bg: "blue.500",
                            }}
                            _focus={{
                              bg: "blue.500",
                            }}
                          >
                            {Size}{" "}
                          </Button>
                        </Wrap>
                      ))}
                    </Stack>
                  </Stack>
                </Stack>
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Stack spacing="2" textAlign="center">
              <Text fontWeight={800} fontSize={"xl"}>
                $57
              </Text>
              <Text textDecoration={"line-through"} color={"gray.600"}>
                $199
              </Text>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default Shop;
