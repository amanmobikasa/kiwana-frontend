import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addtoCartQty : []
}

const addToCartSliceProduct = createSlice({
    name : 'productQuantity',
    initialState,
    reducers : {
        productQuantityReducer : (state, action)=>{
            return state.addtoCartQty.push(action.payload);
        }
    }

})

export const {productQuantityReducer} = addToCartSliceProduct.actions; 
export default addToCartSliceProduct.reducer;