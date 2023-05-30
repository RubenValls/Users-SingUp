import { Box } from "@chakra-ui/react";
import { DataTable } from 'primereact/datatable';
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/usersStore";
import { Column } from "primereact/column";

export default function Users() {
  const users : any = useSelector((state: RootState) => state?.value)
  const usersData = JSON.parse(users)
  
  return (
    <>
        <Box h='auto' w='100%' ml='10px' mr='10px'>
          <Box mt='50px'>
            <DataTable value={usersData} tableStyle={{ minWidth: 'auto' }}>
              <Column field='name' header='Name'></Column>
              <Column field='surname' header='Surname'></Column>
              <Column field='email' header='Email'></Column>
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
