import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userJwtToken : ""
}

const userAuthJwtTokenSlice  =  createSlice({
    name : "userAuthJwtToken",
    initialState,
    reducers : {
        setUserJwtToken : (state, action) => {
            state.userJwtToken = action.payload
        },
        deleteUserJwtToken : (state) => {
            state.userJwtToken = ""
        }
    }
})
export const {setUserJwtToken, deleteUserJwtToken} = userAuthJwtTokenSlice.actions
export default userAuthJwtTokenSlice.reducer;