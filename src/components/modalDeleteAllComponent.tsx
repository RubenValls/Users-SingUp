import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useToast,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { deletedAll } from '../reducers/usersReducer'

export default function ModalDeleteAllComponent({
    isOpen,
    onClose,
    cancelRef,
}: any) {
    const dispatch = useDispatch()
    const toast = useToast()

    const deleteAll = () => {
        dispatch(deletedAll())
            toast({
                title: 'Usuarios eliminados correctamente',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            onClose()
    }

    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                    Delete All Users
                    </AlertDialogHeader>

                    <AlertDialogBody>
                    Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme='red' onClick={deleteAll} ml={3}>
                        Delete
                    </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}
