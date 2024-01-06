import { createSlice } from "@reduxjs/toolkit";


const initialUser = {
    usersData : []
}

const userSlice = createSlice({
    name : "userSlice",
    initialState : initialUser,
    reducers : {
        userLogin : (state, action)=> {
            state.users.push(action.payload)
        }, 
    },
    

})

export const { userLogin } = userSlice.actions;
export default userSlice.reducer;