import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    user: {},
}

export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logoutSuccess: (state) => {
            state.user = {}
            state.isLoggedIn = false
        },
        loginSuccess: (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload
        },
        addSavedPosts: (state, action) => {
            state.postSaved = action.payload.postsSaved
        },
    },
})

export const { logoutSuccess, loginSuccess, addSavedPosts } = userSlice.actions

export default userSlice.reducer
