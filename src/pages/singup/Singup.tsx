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
      <VStack w="100%">
        <Center m='auto'>
        <Box h='auto' w='100%' m='10px' mr='10px' mt='47px' mb='25px'>
          <FormikSignUpComponent />
        </Box>
        </Center>
        <Divider w='100%' />
        <Box h='auto' w='100%'>
          <AccordionSignUpComponent />
        </Box>
      </VStack>
    </>
  )
}
