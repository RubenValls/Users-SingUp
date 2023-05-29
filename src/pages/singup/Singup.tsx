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
  HStack,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  Flex
} from "@chakra-ui/react";
import {AiOutlinePhone, AiOutlineMail, AiOutlineHome} from 'react-icons/ai'
import {MdLocationCity} from 'react-icons/md'
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function Singup() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const initialValues = {
    name: "",
    surname: "",
    email: "", 
    phone: "",
    city: "",
    address: "",
    password: ""
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is a required field"),
    surname: Yup.string()
      .required("Surname is a required field"),
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    phone: Yup.string()
      .required("Phone is a required field"),
    city: Yup.string()
      .required("City Name is a required field"),
    address: Yup.string()
      .required("Address is a required field"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });


  return (
    <>
        <Center h='100vh' m='auto'>
        <Box h='auto' w='100%' ml='10px' mr='10px'>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values) => {
              alert(JSON.stringify(values));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
            <form noValidate onSubmit={handleSubmit}>
            <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Center mb='5px'>
              <Heading size='lg'>
                Sing up - Form
              </Heading>
            </Center>
            <Divider w='100%' m='auto'/>
              <Flex m='10px'>
                <FormControl isInvalid={errors.name && touched.name && errors.name ? true : false} p='5px'>
                  <Input 
                    placeholder='Name' 
                    name="name" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors && (
                    <FormErrorMessage>{errors.name && touched.name && errors.name}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={errors.surname && touched.surname && errors.surname ? true : false} p='5px'>
                  <Input 
                    placeholder='Surname' 
                    name="surname" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.surname}
                  />
                  {errors && (
                    <FormErrorMessage>{errors.surname && touched.surname && errors.surname}</FormErrorMessage>
                  )}
                </FormControl>
              </Flex>

              <HStack p='5px' m='10px'>
                <FormControl isInvalid={errors.email && touched.email && errors.email ? true : false}>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <AiOutlineMail/>
                    </InputLeftElement>
                    <Input 
                      type='email' 
                      placeholder='Email address' 
                      name="email" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </InputGroup>
                  {errors && (
                    <FormErrorMessage>{errors.email && touched.email && errors.email}</FormErrorMessage>
                  )}
                </FormControl>
              </HStack>

              <HStack p='5px' m='10px'>
                <FormControl isInvalid={errors.phone && touched.phone && errors.phone ? true : false}>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <AiOutlinePhone/>
                    </InputLeftElement>
                    <Input 
                      type='tel' 
                      placeholder='Phone number' 
                      name="phone" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                  </InputGroup>
                    {errors && (
                      <FormErrorMessage>{errors.phone && touched.phone && errors.phone}</FormErrorMessage>
                    )}
                </FormControl>
              </HStack>

              <HStack p='5px' m='10px'>
                <FormControl isInvalid={errors.city && touched.city && errors.city ? true : false}>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <MdLocationCity/>
                    </InputLeftElement>
                    <Input 
                      placeholder='City' 
                      name="city" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                    />
                  </InputGroup>
                    {errors && (
                      <FormErrorMessage>{errors.city && touched.city && errors.city}</FormErrorMessage>
                    )}
                </FormControl>
              </HStack>

              <HStack p='5px' m='10px'>
                <FormControl isInvalid={errors.address && touched.address && errors.address ? true : false}>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <AiOutlineHome/>
                    </InputLeftElement>
                    <Input 
                      placeholder='Address' 
                      name="address" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                    />
                  </InputGroup>
                    {errors && (
                      <FormErrorMessage>{errors.address && touched.address && errors.address}</FormErrorMessage>
                    )}
                </FormControl>
              </HStack>

              <HStack p='5px' m='10px'>
                <FormControl isInvalid={errors.password && touched.password && errors.password ? true : false}>
                  <InputGroup>
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter password'
                      name="password" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                    {errors && (
                      <FormErrorMessage>{errors.password && touched.password && errors.password}</FormErrorMessage>
                    )}
                </FormControl>
              </HStack>

              <HStack p='5px' m='10px'>
                <Button type='submit' colorScheme='teal' variant='outline' m='auto'>
                  Sign Up
                </Button>
              </HStack>
            </Box>
            </form>
            )}
          </Formik>
        </Box>
        </Center>
    </>
  )
}
