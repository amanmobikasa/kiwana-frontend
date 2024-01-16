import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contactState : []
}

const contactSlice = createSlice({
    name : 'contact',
    initialState,
    reducers : {
        contactCreateSlice : (state, action)=>{
            return state.contactState = action.payload;
        }
    }
})

export const {contactCreateSlice} = contactSlice.actions;
export default contactSlice.reducer;