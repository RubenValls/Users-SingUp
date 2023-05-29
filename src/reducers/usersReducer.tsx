import { createSlice } from "@reduxjs/toolkit"

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        value: []
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