import { 
  Box, 
  Button, 
  Center, 
  Tag, 
  Tooltip, 
  useDisclosure,
} from "@chakra-ui/react";
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
import { getInitialValues } from "../../utils/functions/localStorage";
import { useRef, useState } from "react";
import ModalFormComponent from "../../components/modalFormComponent";
import { AiOutlineLock } from "react-icons/ai";
import ModalDeleteAllComponent from "../../components/modalDeleteAllComponent";


export default function Users() {
  const [selectedUser, setSelectedUser] : any = useState(null);
  const usersData : any = getInitialValues()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()
  const cancelRef = useRef()
  

  const passwordTemplate = (user: any) => {
    return (
      <Tooltip label={user?.password}>
        <Tag size='lg' variant='solid' colorScheme='teal'>
          <AiOutlineLock />
        </Tag>
      </Tooltip>
    )
  };

  const getFooter = () => {
    return (
      <Center>
        <Button colorScheme='red' onClick={onOpenDelete}>Delete all data</Button>
      </Center>
    )
  };

  return (
    <>
        <Box h='auto' w='100%' ml='10px' mr='10px'>
          <Box mt='50px'>
            <DataTable 
              value={usersData?.length > 0 ? usersData : []} 
              selectionMode="single" 
              onSelectionChange={(e) => {setSelectedUser(e?.value); onOpen()}} 
              footer={getFooter} 
              tableStyle={{ minWidth: 'auto' }}>

              <Column field='name' header='Name' sortable></Column>
              <Column field='surname' header='Surname' sortable></Column>
              <Column field='email' header='Email' sortable></Column>
              <Column field='phone' header='Phone'></Column>
              <Column field='city' header='City'></Column>
              <Column field='address' header='Address'></Column>
              <Column field='password' body={passwordTemplate} header='Password'></Column>
            </DataTable>
          </Box>

          <ModalFormComponent 
            isOpen={isOpen} 
            onClose={onClose}
            selectedUser={selectedUser}
          />

          <ModalDeleteAllComponent 
            isOpen={isOpenDelete}
            onClose={onCloseDelete}
            cancelRef={cancelRef}
          />
        </Box>
    </>
  )
}
