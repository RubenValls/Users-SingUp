import { createSlice } from "@reduxjs/toolkit"
import { getInitialValues, updateLocalStorage } from "../utils/functions/localStorage"

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        value: getInitialValues()
    },
    reducers: {
        added: (state : any, values?) => {
            state?.value.push(values?.payload)
            updateLocalStorage(state?.value)
        },
        modified: (state) => {
            state.value = []
        },
        deleted: (state) => {
            state.value = []
        }
    }
    })

export const { added, modified, deleted } = usersSlice.actions
export default usersSlice.reducer