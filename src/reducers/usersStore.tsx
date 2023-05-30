import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersReducer";

export const store = configureStore({
    reducer: usersReducer
})

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch