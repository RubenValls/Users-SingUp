import {
  Box,
  Button,
  Heading,
  VStack,
  Text,
  Link,
  Center,
  Image,
  List,
  ListItem,
  ListIcon,
  Wrap,
  WrapItem,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <VStack w="100%">
        <Box h="auto" w="100%" mb="50px">
          <Center>
            <Box maxW="40rem" m="30px">
              <Heading mb={4} as="i">
                What is this?
              </Heading>
              <Text fontSize="xl">
                This web application is a small personal project to practice
                working with forms, states, and information control from the
                user's perspective.
              </Text>
              <Text fontSize="xl" mt="15px">
                Want to know how it works? Check all the code at my GitHub
                repository:
              </Text>
              <Link
                href="https://github.com/RubenValls/Users-SingUp"
                isExternal
              >
                <Button
                  leftIcon={<BsGithub />}
                  size="md"
                  colorScheme="green"
                  mt="24px"
                >
                  See code
                </Button>
              </Link>
            </Box>
          </Center>
        </Box>
        <Wrap spacing="30px" height="auto" justify="center">
          <WrapItem>
            <Box>
              <Image
                src="https://www.formbot.com/images/free-online-form-builder.png"
                alt="form"
              />
            </Box>
          </WrapItem>
          <WrapItem>
            <Box>
              <Center h="325px">
                <List spacing={3}>
                  <ListItem>
                    <Flex>
                      <Center>
                        <ListIcon as={BsGithub} color="green.500" />
                        <Text as="i">
                          Controlled form for user creation and registration.
                        </Text>
                      </Center>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex>
                      <Center>
                        <ListIcon as={BsGithub} color="green.500" />
                        <Text as="i">
                          Display of a user list in table format with
                          corresponding actions.
                        </Text>
                      </Center>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex>
                      <Center>
                        <ListIcon as={BsGithub} color="green.500" />
                        <Text as="i">
                          Use of different technologies for design and state
                          management.
                        </Text>
                      </Center>
                    </Flex>
                  </ListItem>
                </List>
              </Center>
            </Box>
          </WrapItem>
        </Wrap>
        <Box w="100vw" h="auto">
          <Center>
            <Heading mt="50px" mb="50px" as="i">
              Technologies used
            </Heading>
          </Center>
          <Center>
            <Wrap spacing="75px" justify="center">
              <WrapItem>
                <Center w="150px" h="auto">
                  <Link href="https://es.react.dev/" isExternal>
                    <Tooltip label='React' placement='auto'>
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                      alt="React"
                    />
                    </Tooltip>
                  </Link>
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="150px" h="auto">
                  <Link href="https://es.redux.js.org/" isExternal>
                    <Tooltip label='Redux' placement='auto'>
                    <Image
                      src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
                      alt="Redux"
                    />
                    </Tooltip>
                  </Link>
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="150px" h="auto">
                  <Link href="https://chakra-ui.com" isExternal>
                    <Tooltip label='Chakra UI' placement='auto'>
                    <Image
                      src="https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-400x400.png"
                      alt="Chakra UI"
                    />
                    </Tooltip>
                  </Link>
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="150px" h="auto">
                  <Link href="https://primereact.org/" isExternal>
                    <Tooltip label='PrimeReact' placement='auto'>
                    <Image
                      src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2018/05/primereact-logo.png?ssl=1"
                      alt="PrimeReact"
                    />
                    </Tooltip>
                  </Link>
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="150px" h="auto">
                  <Link href="https://formik.org/" isExternal>
                    <Image
                      src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png"
                      alt="Formik"
                    />
                  </Link>
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="150px" h="auto">
                  <Link href="https://www.npmjs.com/package/yup" isExternal>
                    <Image
                      src="https://scontent.fvlc4-1.fna.fbcdn.net/v/t39.30808-6/304814120_493614916108770_116017798484316257_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eImtvrd0fV0AX-RHH5i&_nc_ht=scontent.fvlc4-1.fna&oh=00_AfA9Cm7rPNG5pUg7F2H1-EAtfMw0oCYef8iI0YKgQZfcZQ&oe=647C9001"
                      alt="Yup"
                    />
                  </Link>
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="150px" h="auto">
                  <Link href="https://vitejs.dev/" isExternal>
                    <Tooltip label='Vite' placement='auto'>
                    <Image
                      src="https://vitejs.dev/logo-with-shadow.png"
                      alt="Vite"
                    />
                    </Tooltip>
                  </Link>
                </Center>
              </WrapItem>
            </Wrap>
          </Center>
        </Box>
      </VStack>
    </>
  );
}
