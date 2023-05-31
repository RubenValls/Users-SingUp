import { createSlice } from "@reduxjs/toolkit"
import { getInitialValues, updateLocalStorage } from "../utils/functions/localStorage"

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        value: getInitialValues()
    },
    reducers: {
        added: (state : any, values? : any) => {
            state?.value.push(values?.payload)
            updateLocalStorage(state?.value)
        },
        modified: (state : any, values? : any) => {
            state?.value.map((user: any, index: any) => {
                user.password === values?.payload?.password
                    ? state.value[index] = values?.payload
                    : null
            })
            updateLocalStorage(state?.value)
        },
        deleted: (state : any, values? : any) => {
            state?.value.map((user: any, index: any) => {
                user.password === values?.payload?.password
                    ? state?.value.splice(index, 1)
                    : null
            })
            updateLocalStorage(state?.value)
        },
        deletedAll: (state: any) => {
            state.value = []
            updateLocalStorage(state.value)
        }
    }
    })

export const { added, modified, deleted, deletedAll } = usersSlice.actions
export default usersSlice.reducer