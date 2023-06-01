import { Tabs, TabList, Tab, Flex, Center, Text } from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
import {FiUsers} from 'react-icons/fi'
import {
    AiOutlineHome,
    AiOutlineUserAdd
} from 'react-icons/ai'

export default function Navbar() {

    
    // const { isOpen, onOpen, onClose } = useDisclosure()
    // const btnRef : any = useRef()

    return (
    <>
        <Tabs variant='soft-rounded' colorScheme='green' m='20px'>
            <TabList>
                <Tab>
                    <NavLink
                        to={"/"}
                    >
                        <Flex>
                            <Center>
                                <AiOutlineHome/> <Text ml='5px'>Home</Text>
                            </Center>
                        </Flex>
                    </NavLink>
                </Tab>
                <Tab>
                    <NavLink
                        to={"/signup"}
                    >
                        <Flex>
                            <Center>
                                <AiOutlineUserAdd/> <Text ml='5px'>Sign Up</Text>
                            </Center>
                        </Flex>
                    </NavLink>
                </Tab>
                <Tab>
                    <NavLink
                        to={"/users"}
                    >
                        <Flex>
                            <Center>
                                <FiUsers/> <Text ml='5px'>Users Panel</Text>
                            </Center>
                        </Flex>
                    </NavLink>
                </Tab>
            </TabList>
        </Tabs>
    </>
    )
}
