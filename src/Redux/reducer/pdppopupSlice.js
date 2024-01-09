import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pdpProducts : []
}

const pdpSlice = createSlice({
    name : "pdppopupSlice",
    initialState,
    reducers:{
        pdpPopUpSlice : (state, action) => {
            state.pdpProducts = action.payload;
            
        }
    }
})

export const { pdpPopUpSlice } = pdpSlice.actions;
export default pdpSlice.reducer;