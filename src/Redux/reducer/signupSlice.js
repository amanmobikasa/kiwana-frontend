import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signUpData : [],
}

const signUpSlice = createSlice({
    name : 'signUp',
    initialState,
    reducers : {
        signUpData : (state, action) => {
            void state.signUpData.push(action.payload);
        }
    }
})
export const { signUpData } = signUpSlice.actions;
export default signUpSlice.reducer;