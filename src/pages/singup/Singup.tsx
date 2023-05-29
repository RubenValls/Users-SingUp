import { 
  Box,
  Heading,
  Center,
  Divider,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  InputLeftElement,
  HStack
} from "@chakra-ui/react";
import {AiOutlinePhone, AiOutlineMail, AiOutlineHome} from 'react-icons/ai'
import {MdLocationCity} from 'react-icons/md'
MdLocationCity
import { useState } from "react";

export default function Singup() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)


  return (
    <>
        <Center h='100vh' m='auto'>
        <Box h='auto' w='100%' ml='10px' mr='10px'>
          <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Center mb='5px'>
            <Heading size='lg'>
              Sing up - Form
            </Heading>
          </Center>
          <Divider w='100%' m='auto'/>

            <HStack p='5px' m='10px'>
              <Input placeholder='Name' />
              <Input placeholder='Surname' />
            </HStack>

            <HStack p='5px' m='10px'>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <AiOutlineMail/>
                </InputLeftElement>
                <Input type='email' placeholder='Email address' />
              </InputGroup>
            </HStack>

            <HStack p='5px' m='10px'>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <AiOutlinePhone/>
                </InputLeftElement>
                <Input type='tel' placeholder='Phone number' />
              </InputGroup>
            </HStack>

            <HStack p='5px' m='10px'>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <MdLocationCity/>
                </InputLeftElement>
                <Input placeholder='City' />
              </InputGroup>
            </HStack>

            <HStack p='5px' m='10px'>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <AiOutlineHome/>
                </InputLeftElement>
                <Input placeholder='Address' />
              </InputGroup>
            </HStack>

            <HStack p='5px' m='10px'>
              <InputGroup>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </HStack>

            <HStack p='5px' m='10px'>
              <Button type="submit" colorScheme='teal' variant='outline' m='auto'>
                    Sign Up
              </Button>
            </HStack>
          </Box>
        </Box>
        </Center>
    </>
  )
}
