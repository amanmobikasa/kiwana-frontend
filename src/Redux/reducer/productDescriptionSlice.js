import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pdpData : []
}

const pdpSlice = createSlice({
    name : 'pdp',
    initialState,
    reducers : {
        pdpDescription : (state, action)=>{
            state.pdpData = action.payload;
        },
    },
})

export const {pdpDescription} = pdpSlice.actions;
export default pdpSlice.reducer;