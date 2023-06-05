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
  Heading,
} from "@chakra-ui/react";

export default function AccordionSignUpComponent() {
  return (
    <>
      <Center>
        <Heading mt={4} size="md">
          About:
        </Heading>
      </Center>
      <Accordion allowMultiple mt="25px">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Form Information
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            This form has been developed using different technologies. Firstly,
            Chakra UI has been chosen for the design of inputs and labels in the
            form. Additionally, Yup has been chosen for field validation and
            error handling in the form. Furthermore, everything related to form
            actions and data control is handled by Formik. All of these have
            been integrated into the form to ensure proper functionality and
            align with the goals of the application.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Technologies
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Center>
              <Wrap spacing="30px" justify="center">
                <WrapItem>
                  <Center w="200px" h="auto">
                    <Link href="https://chakra-ui.com" isExternal>
                      <Image
                        src="https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-400x400.png"
                        alt="Chakra UI"
                      />
                    </Link>
                  </Center>
                </WrapItem>
                <WrapItem>
                  <Center w="200px" h="auto">
                    <Link href="https://formik.org/" isExternal>
                      <Image
                        src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png"
                        alt="Formik"
                      />
                    </Link>
                  </Center>
                </WrapItem>
                <WrapItem>
                  <Center w="200px" h="auto">
                    <Link href="https://www.npmjs.com/package/yup" isExternal>
                      <Image
                        src="https://media.licdn.com/dms/image/C4D0BAQHHQHP6KFmrNQ/company-logo_200_200/0/1663569046136?e=2147483647&v=beta&t=UpFHV8IOJGbB8MvLaEVX8XvyOC5uRKWqMmgYW-S0PuE"
                        alt="Yup"
                      />
                    </Link>
                  </Center>
                </WrapItem>
              </Wrap>
            </Center>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
