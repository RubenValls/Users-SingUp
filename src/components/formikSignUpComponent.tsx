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
    FormErrorMessage,
    Flex,
    useToast 
} from "@chakra-ui/react";
import {AiOutlinePhone, AiOutlineMail, AiOutlineHome} from 'react-icons/ai'
import {MdLocationCity} from 'react-icons/md'
import { Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { added } from "../reducers/usersReducer";
import { initialValues, validationSchema } from "../utils/constants/singUpConstants";

export default function FormikSignUpComponent() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const users : any = useSelector((state: any) => state?.value)
    const dispatch = useDispatch()
    const toast = useToast()

    const checkSubmitAction = (values : any, resetForm: any) => {
    
        const _finded = users?.find((user : any) => user?.email === values?.email)
    
        if(_finded){
            toast({
                title: 'Error:',
                description: "There is a user with the same email.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            }) 
            }else{
            values.id = users?.length > 0 ? users[users.length - 1].id + 1 : 0
            dispatch(added(values))
            toast({
                title: 'Account created.',
                description: "Added info to users panel.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            resetForm({values: initialValues})
        }
    }

    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values, {resetForm}) => {
                checkSubmitAction(values, resetForm)
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
                <Center p="3px">
                <Heading size='md'>
                    New User
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
    )
}
