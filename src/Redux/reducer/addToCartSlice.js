import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addtoCartQty : [],
    updateCartQty : []
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
        },
        updateProductQuantityReducer: (state, action) => {
            const existingProductIndex = state.updateCartQty.findIndex(
              (item) => item.pdp_link === action.payload.pdp_link
            );
          
            if (existingProductIndex !== -1) {
              // If the product already exists, update its quantity
              state.updateCartQty[existingProductIndex] = action.payload;
            } else {
              // If the product doesn't exist, add it to the array
              state.updateCartQty.push(action.payload);
            }
          },
          

    }

})

export const {productQuantityReducer, removeFromCart, updateProductQuantityReducer} = addToCartSliceProduct.actions; 
export default addToCartSliceProduct.reducer;