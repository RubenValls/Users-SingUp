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
  } from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
import { useRef } from 'react'
import {RiMenuUnfoldFill} from 'react-icons/ri'

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
                    >
                        <NavLink
                            to={"/"}
                            onClick={onClose}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to={"/signup"}
                            onClick={onClose}
                        >
                            User - Sign Up
                        </NavLink>
                        <NavLink
                            to={"/users"}
                            onClick={onClose}
                        >
                            Users Panel
                        </NavLink>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
    )
}
