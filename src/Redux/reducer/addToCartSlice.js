import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addtoCartQty : []
}

const addToCartSliceProduct = createSlice({
    name : 'productQuantity',
    initialState,
    reducers : {
        productQuantityReducer : (state, action)=>{
             void state.addtoCartQty.push(action.payload);
        },
        removeFromCart : (state, action)=>{
            state.addtoCartQty.splice(action.payload, 1);
        }

    }

})

export const {productQuantityReducer, removeFromCart} = addToCartSliceProduct.actions; 
export default addToCartSliceProduct.reducer;