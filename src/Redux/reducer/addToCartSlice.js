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
            if(!state.addtoCartQty.some(item => item.pdp_link === action.payload.pdp_link)){
                void state.addtoCartQty.push(action.payload);
            }
        },
        removeFromCart : (state, action)=>{
            state.addtoCartQty.splice(action.payload, 1);
        },
        updateProductQuantityReducer: (state, action) => {
            state.updateCartQty = [
              ...state.updateCartQty.filter((item) => item.pdp_link !== action.payload.pdp_link),
              { ...action.payload },
            ];
        },

          

    }

})

export const {productQuantityReducer, removeFromCart, updateProductQuantityReducer} = addToCartSliceProduct.actions; 
export default addToCartSliceProduct.reducer;