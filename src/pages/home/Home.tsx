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
import { AiOutlineForm } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { GiTechnoHeart } from "react-icons/gi";
import { CiViewTable } from "react-icons/ci";

export default function Home() {
  return (
    <>
      <VStack>
        <Box h="auto" mb="50px">
          <Center>
            <Box maxW="40rem" m="30px" padding="20px">
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
        <Wrap spacing="30px" height="auto" justify="center" p='20px'>
          <WrapItem>
            <Box padding="20px" alignContent="center">
              <Image
                src="https://www.formbot.com/images/free-online-form-builder.png"
                alt="form"
              />
            </Box>
          </WrapItem>
          <WrapItem>
            <Box padding="20px">
              <Center h="325px">
                <List spacing={3}>
                  <ListItem>
                    <Flex>
                      <Center>
                        <ListIcon as={AiOutlineForm} color="green.500" />
                        <Text as="i">
                          Controlled form for user creation and registration.
                        </Text>
                      </Center>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex>
                      <Center>
                        <ListIcon as={CiViewTable} color="green.500" />
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
                        <ListIcon as={GiTechnoHeart} color="green.500" />
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
        <Box w="100" h="auto">
          <Center>
            <Heading mt="30px" mb="50px" as="i">
              Technologies used
            </Heading>
          </Center>
          <Center>
            <Wrap spacing="75px" justify="center" padding="20px">
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
                      src="https://media.licdn.com/dms/image/C4D0BAQHHQHP6KFmrNQ/company-logo_200_200/0/1663569046136?e=2147483647&v=beta&t=UpFHV8IOJGbB8MvLaEVX8XvyOC5uRKWqMmgYW-S0PuE"
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
