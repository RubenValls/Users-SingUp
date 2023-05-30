import { 
  Box, 
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, 
} from "@chakra-ui/react";
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
import { getInitialValues } from "../../utils/functions/localStorage";
import { useState } from "react";
import ModalFormComponent from "../../components/modalFormComponent";

export default function Users() {
  const [selectedUser, setSelectedUser] : any = useState(null);
  const usersData : any = getInitialValues()
  const { isOpen, onOpen, onClose } = useDisclosure()
  
//   const onRowSelect = (event : any) => {
//     onOpen()
// };

  return (
    <>
        <Box h='auto' w='100%' ml='10px' mr='10px'>
          <Box mt='50px'>
            <DataTable value={usersData?.length > 0 ? JSON.parse(usersData) : []} selectionMode="single" selection={selectedUser} onSelectionChange={(e) => setSelectedUser(e?.value)} onClick={onOpen} tableStyle={{ minWidth: 'auto' }}>
              <Column field='name' header='Name' sortable></Column>
              <Column field='surname' header='Surname' sortable></Column>
              <Column field='email' header='Email' sortable></Column>
              <Column field='phone' header='Phone'></Column>
              <Column field='city' header='City'></Column>
              <Column field='address' header='Address'></Column>
              <Column field='password' header='Password'></Column>
            </DataTable>
          </Box>

          <ModalFormComponent 
            isOpen={isOpen} 
            onClose={onClose}
            selectedUser={selectedUser}
          />
        </Box>
    </>
  )
}
