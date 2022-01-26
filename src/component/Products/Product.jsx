import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
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
  Flex,
  VStack,
} from "@chakra-ui/react";
import "reactjs-popup/dist/index.css";
import { useControllableState } from "@chakra-ui/react";
import { useState } from "react";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";
const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};
const collection = [
  { id: 1, name: "Dan Abrahmov", src: "https://bit.ly/dan-abramov" },
  { id: 2, name: "Kent Dodds", src: "https://bit.ly/kent-c-dodds" },
  { id: 3, name: "Segun Adebayo", src: "https://bit.ly/sage-adebayo" },
  { id: 4, name: "Ryan Florence", src: "https://bit.ly/ryan-florence" },
];
const Sizes = [38, 40, 42, 44, 46];
export default function ProductSimple() {
  const [value, setValue] = useControllableState({ defaultValue: 1 });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
  );

  function handleChangeImage({ e }) {
    setImage(e.target.value);
  }

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={IMAGE}
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
                      <VStack direction="row">
                        {collection.map((mag) => (
                          <Image
                            key={mag.id}
                            boxSize="100px"
                            objectFit="cover"
                            src={mag.src}
                            alt={mag.name}
                            onClick={()=>setImage(mag.src)}
                          />
                        ))}
                      </VStack>
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
                        <Text
                          textDecoration={"line-through"}
                          color={"gray.600"}
                        >
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
                            <Button onClick={() => setValue(value + 1)}>
                              +
                            </Button>
                            <Box as="span" w="200px" mx="24px">
                              {value}
                            </Box>
                            <Button onClick={() => setValue(value - 1)}>
                              -
                            </Button>
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
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Brand
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              $57
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
