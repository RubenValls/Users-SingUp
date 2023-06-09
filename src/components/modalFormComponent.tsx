import { 
    Box,
    Center,
    InputGroup,
    Input,
    InputRightElement,
    Button,
    InputLeftElement,
    HStack,
    FormControl,
    FormErrorMessage,
    Flex,
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Tooltip, 
} from "@chakra-ui/react";
import {AiOutlinePhone, AiOutlineMail, AiOutlineHome} from 'react-icons/ai'
import {MdLocationCity} from 'react-icons/md'
import { Formik } from "formik";
import { useState } from "react";
import { validationSchema } from "../utils/constants/singUpConstants";
import { useDispatch, useSelector } from "react-redux";
import { deleted, modified } from "../reducers/usersReducer";
import { checkEmailRepeat } from "../utils/functions/usersFormFunctions";

export default function ModalFormComponent({isOpen, onClose, selectedUser} : any) {
    const [show, setShow] = useState(false)
    const [action, setAction] = useState('')
    const handleClick = () => setShow(!show)
    const users : any = useSelector((state: any) => state?.value)
    const dispatch = useDispatch()
    const toast = useToast()

    const initialValues = {
        id: selectedUser?.id,
        name: selectedUser?.name || "",
        surname: selectedUser?.surname || "",
        email: selectedUser?.email || "", 
        phone: selectedUser?.phone || "",
        city: selectedUser?.city || "",
        address: selectedUser?.address || "",
        password: selectedUser?.password || ""
    }

    const checkSubmitAction = (values : any) => {
        if(action === 'update'){
            if(checkEmailRepeat(users, values)){
                toast({
                    title: 'Another user has the same email.',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            }else{
                dispatch(modified(values))
                toast({
                    title: 'User updated.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
                onClose()
            }
        }else{
            dispatch(deleted(values))
            toast({
                title: 'Usuario eliminado correctamente',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            onClose()
        }
    }


    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={(values) => {
                    checkSubmitAction(values)
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
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>{selectedUser?.name} - Information Panel</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Center m='auto'>
                        <Box h='auto' w='100%' m='10px' mr='10px'>
                            <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
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
                                    <FormErrorMessage>{`${errors.name && touched.name && errors.name}`}</FormErrorMessage>
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
                                    <FormErrorMessage>{`${errors.surname && touched.surname && errors.surname}`}</FormErrorMessage>
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
                                    <FormErrorMessage>{`${errors.email && touched.email && errors.email}`}</FormErrorMessage>
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
                                        <FormErrorMessage>{`${errors.phone && touched.phone && errors.phone}`}</FormErrorMessage>
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
                                        <FormErrorMessage>{`${errors.city && touched.city && errors.city}`}</FormErrorMessage>
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
                                        <FormErrorMessage>{`${errors.address && touched.address && errors.address}`}</FormErrorMessage>
                                    )}
                                </FormControl>
                                </HStack>
                
                                <HStack p='5px' m='10px'>
                                <FormControl isInvalid={errors.password && touched.password && errors.password ? true : false}>
                                    <InputGroup>
                                    <Tooltip label={'Password cannot be modified here'}>
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                        name="password" 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        disabled
                                    />
                                    </Tooltip>
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                    </InputGroup>
                                    {errors && (
                                        <FormErrorMessage>{`${errors.password && touched.password && errors.password}`}</FormErrorMessage>
                                    )}
                                </FormControl>
                                </HStack>
                
                                <HStack p='5px' m='10px'>
                                </HStack>
                            </Box>
                        </Box>
                    </Center>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={() => {
                            setAction('update');
                            handleSubmit();
                        }} colorScheme='blue' mr={3}>
                    Edit User
                    </Button>
                    <Button onClick={() => {
                            setAction('delete');
                            handleSubmit();
                        }} colorScheme='red'>Delete User</Button>
                </ModalFooter>
                </ModalContent>
                </form>
                )}
                </Formik>
            </Modal>
        </>
    )
}
