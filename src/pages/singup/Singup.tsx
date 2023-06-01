import { 
  Box,
  Center,
} from "@chakra-ui/react";
import FormikSignUpComponent from "../../components/formikSignUpComponent";

export default function Singup() {


  return (
    <>
        <Center m='auto'>
        <Box h='auto' w='100%' m='10px' mr='10px' mt='47px'>
          <FormikSignUpComponent />
        </Box>
        </Center>
    </>
  )
}
