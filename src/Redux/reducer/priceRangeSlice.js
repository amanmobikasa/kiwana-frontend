import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    priceRangeObj : {}
}

const priceRangeSlice = createSlice({
    name : 'priceRange',
    initialState,
    reducers : {
        priceRangeReducer : (state, action) => {
            state.priceRangeObj = action.payload
        }
    }
})

export const { priceRangeReducer } = priceRangeSlice.actions;
export default priceRangeSlice.reducer;