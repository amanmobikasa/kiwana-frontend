import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialUser = {
    usersData : null,

}

// async thunk function to change address of user
// export const changeAddress = createAsyncThunk('user/changeAddress', async ({email, address}, {rejectWithValue})=>{
//     try{
//         const userAddress = await axios.put(`http://localhost:4000/change-address`, {email, address})
//         return userAddress.data
//     }catch(error){
//         return rejectWithValue(error.response)
//     }
// })



const userSlice = createSlice({
    name : "userSlice",
    initialState : initialUser,
    reducers : {
        userLogin : (state, action)=> {
            if (Array.isArray(state.usersData)) {
                state.usersData.push(action.payload);
            } else {
                // If it's not an array, handle it accordingly (initialize or log an error)
                console.error('Invalid state.usersData:', state.usersData);
                // For example, you might want to initialize it as an array:
                state.usersData = action.payload;
            }
        },  
    },
})

export const { userLogin } = userSlice.actions;
export default userSlice.reducer;

