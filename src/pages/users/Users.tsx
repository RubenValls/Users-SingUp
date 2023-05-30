import { Box } from "@chakra-ui/react";
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
import { useSelector } from "react-redux";
import { getInitialValues } from "../../utils/localStorage";

export default function Users() {

  const usersData : any = getInitialValues()
  
  return (
    <>
        <Box h='auto' w='100%' ml='10px' mr='10px'>
          <Box mt='50px'>
            <DataTable value={JSON.parse(usersData)} tableStyle={{ minWidth: 'auto' }}>
              <Column field='name' header='Name' sortable></Column>
              <Column field='surname' header='Surname' sortable></Column>
              <Column field='email' header='Email' sortable></Column>
              <Column field='phone' header='Phone'></Column>
              <Column field='city' header='City'></Column>
              <Column field='address' header='Address'></Column>
              <Column field='password' header='Password'></Column>
            </DataTable>
          </Box>
        </Box>
    </>
  )
}
