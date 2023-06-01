import { Box, Button, Heading, VStack, Text, Link } from "@chakra-ui/react";
import {BsGithub} from "react-icons/bs"

export default function Home() {
  return (
    <>
      <VStack>
        <Box h='auto' w='100%' ml='10px' mr='10px'>
          <Box maxW='40rem' mt='50px'>
            <Heading mb={4}>What is this?</Heading>
            <Text fontSize='xl'>
              This web application is a small personal project to practice working with forms, states, and information control from the user's perspective.
            </Text>
            <Text fontSize='xl' mt='15px'>
              Want to know how it works? Check all the code at my GitHub repository:
            </Text>
            <Link href='https://github.com/RubenValls/Users-SingUp' isExternal>
              <Button leftIcon={<BsGithub />} size='lg' colorScheme='green' mt='24px'>
                See code
              </Button>
            </Link>
          </Box>
        </Box>
      </VStack>
    </>
  )
}
