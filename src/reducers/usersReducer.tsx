import { createSlice } from "@reduxjs/toolkit"
import { getInitialValues } from "../utils/localStorage"

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        value: getInitialValues()
    },
    reducers: {
        added: (state : any, values?) => {
            state?.value.push(values?.payload)
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