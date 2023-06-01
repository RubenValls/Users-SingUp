import { 
  Box,
  Center,
  Divider,
  VStack,
} from "@chakra-ui/react";
import FormikSignUpComponent from "../../components/formikSignUpComponent";
import AccordionSignUpComponent from "../../components/AccordionSignUpComponent";

export default function Singup() {


  return (
    <>
      <VStack>
        <Center m='auto'>
        <Box h='auto' w='100%' m='10px' mr='10px' mt='47px' mb='25px'>
          <FormikSignUpComponent />
        </Box>
        </Center>
        <Divider w='100vw' />
        <Box h='auto' w='100%'>
          <AccordionSignUpComponent />
        </Box>
      </VStack>
    </>
  )
}
