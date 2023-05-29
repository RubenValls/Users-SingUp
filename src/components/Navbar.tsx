import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    VStack,
    Flex,
    Text,
    Center
} from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
import { useRef } from 'react'
import {RiMenuUnfoldFill} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {
    AiOutlineHome,
    AiOutlineUserAdd
} from 'react-icons/ai'

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef : any = useRef()

  return (
    <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
            <RiMenuUnfoldFill/>
        </Button>
        <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Navigation</DrawerHeader>
                <DrawerBody>
                    <VStack
                        spacing={4}
                        align='left'
                    >
                        <NavLink
                            to={"/"}
                            onClick={onClose}
                        >
                            <Flex>
                                <Center>
                                    <AiOutlineHome/> <Text ml='5px'>Home</Text>
                                </Center>
                            </Flex>
                        </NavLink>
                        <NavLink
                            to={"/signup"}
                            onClick={onClose}
                        >
                            <Flex>
                                <Center>
                                    <AiOutlineUserAdd/> <Text ml='5px'>User - Sign Up</Text>
                                </Center>
                            </Flex>
                        </NavLink>
                        <NavLink
                            to={"/users"}
                            onClick={onClose}
                        >
                            <Flex>
                                <Center>
                                    <FiUsers/> <Text ml='5px'>Users Panel</Text>
                                </Center>
                            </Flex>
                        </NavLink>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
    )
}
