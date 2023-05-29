import { createSlice } from "@reduxjs/toolkit"

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        value: []
    },
    reducers: {
        added: (state, values?) => {
            state.value = values?.payload
        },
        deleted: (state) => {
            state.value = []
        }
    }
    })

export const { added, deleted } = usersSlice.actions
export default usersSlice.reducer