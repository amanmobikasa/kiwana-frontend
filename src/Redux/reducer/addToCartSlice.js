import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productQuantity : []
}

const addToCartSliceProduct = createSlice({
    name : 'productQuantity',
    initialState,
    reducers : {
        productQuantityReducer : (state, action)=>{
            return state.addToCart = action.payload;
        }
    }

})

export const {productQuantityReducer} = addToCartSliceProduct.actions;
export default addToCartSliceProduct.reducer;