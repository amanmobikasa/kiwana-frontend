import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterProductState : []
}

const filterProductSlice = createSlice({
    name : "filterProduct",
    initialState,
    reducers : {
        productFilter : (state, action) => {
            state.filterProductState = action.payload;
        }
    }
})

export const {productFilter} = filterProductSlice.actions;
export default filterProductSlice.reducer;