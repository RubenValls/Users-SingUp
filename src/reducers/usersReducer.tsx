import { createSlice } from "@reduxjs/toolkit"
import { users } from "./initialState"

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        value: users
    },
    reducers: {
        added: state => {
            state.value
        },
        deleted: state => {
            state.value
        }
    }
    })

export const { added, deleted } = usersSlice.actions
export default usersSlice.reducer