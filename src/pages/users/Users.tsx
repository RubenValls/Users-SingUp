import { Box } from "@chakra-ui/react";
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
import { getInitialValues } from "../../utils/localStorage";
import { useState } from "react";

export default function Users() {
  const [selectedUser, setSelectedUser] : any = useState(null);
  const usersData : any = getInitialValues()
  
  const onRowSelect = (event : any) => {
    console.log(event?.data)
};

  return (
    <>
        <Box h='auto' w='100%' ml='10px' mr='10px'>
          <Box mt='50px'>
            <DataTable value={usersData?.length > 0 ? JSON.parse(usersData) : []} selectionMode="single" selection={selectedUser} onSelectionChange={(e) => setSelectedUser(e?.value)} onRowSelect={onRowSelect} tableStyle={{ minWidth: 'auto' }}>
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
