import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Center,
    Wrap,
    WrapItem,
    Image,
    Link,
} from '@chakra-ui/react'

export default function AccordionSignUpComponent() {
    return (
        <Accordion allowToggle mt='25px'>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        Formulary Information
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    This form has been developed using different technologies. Firstly, Chakra UI has been chosen for the design of inputs and labels in the form. Additionally, Yup has been chosen for field validation and error handling in the form. Furthermore, everything related to form actions and data control is handled by Formik. All of these have been integrated into the form to ensure proper functionality and align with the goals of the application.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        Technologies
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Center>
                        <Wrap>
                            <WrapItem pr='25px'>
                                <Center w='200px' h='auto'>
                                    <Link href='https://es.react.dev/' isExternal>
                                        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='React' />
                                    </Link>
                                </Center>
                            </WrapItem>
                            <WrapItem pr='25px'>
                                <Center w='200px' h='auto'>
                                    <Link href='https://chakra-ui.com' isExternal>
                                        <Image src='https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-400x400.png' alt='Chakra UI' />
                                    </Link>
                                </Center>
                            </WrapItem>
                            <WrapItem pr='25px'>
                                <Center w='200px' h='auto'>
                                    <Link href='https://formik.org/' isExternal>
                                        <Image src='https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png' alt='Formik' />
                                    </Link>
                                </Center>
                            </WrapItem>
                            <WrapItem>
                            <Center w='200px' h='auto'>
                                    <Link href='https://www.npmjs.com/package/yup' isExternal>
                                        <Image src='https://scontent.fvlc4-1.fna.fbcdn.net/v/t39.30808-6/304814120_493614916108770_116017798484316257_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eImtvrd0fV0AX-RHH5i&_nc_ht=scontent.fvlc4-1.fna&oh=00_AfA9Cm7rPNG5pUg7F2H1-EAtfMw0oCYef8iI0YKgQZfcZQ&oe=647C9001' alt='Yup' />
                                    </Link>
                                </Center>
                            </WrapItem>
                        </Wrap>
                    </Center>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
