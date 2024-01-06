import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : [
        {
            id : 1,
            name : 'product 1',
            price : 100,
        }
    ]
}



const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        productListing : (state, action) => {
           return state.products.push(action.payload);
        }
    }
})


export const { productListing } = productSlice.actions;
export default productSlice.reducer;