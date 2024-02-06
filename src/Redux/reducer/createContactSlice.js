import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contactState : []
}

const contactSlice = createSlice({
    name : 'contact',
    initialState,
    reducers : {
        contactCreateSlice : (state, action)=>{
            void state.contactState.push(action.payload);
        }
    }
})

export const {contactCreateSlice} = contactSlice.actions;
export default contactSlice.reducer;