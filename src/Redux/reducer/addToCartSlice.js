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
            state.addtoCartQty = state.addtoCartQty.filter((product)=> parseInt(product?.pdp_link) !== action.payload)
            if(state.updateCartQty.length > 0){
                state.updateCartQty = state.updateCartQty.filter((product)=> parseInt(product?.pdp_link) !== parseInt(action.payload))
            }
        },

        updateProductQuantityReducer: (state, action) => {
          // state.addtoCartQty.splice(action.payload, 1);
          // if(state.addtoCartQty.length > 0){
          //   state.addtoCartQty = state.addtoCartQty.filter((product)=> parseInt(product?.pdp_link) !== parseInt(action.payload.pdp_link))
          // }
            state.updateCartQty = [
              ...state.updateCartQty.filter((item) => item.pdp_link !== action.payload.pdp_link),
              { ...action.payload },
            ];
        },
        removeFromAddToCart : (state, action)=>{
          state.addtoCartQty = state.addtoCartQty.filter((product)=> parseInt(product?.pdp_link) !== parseInt(action.payload.pdp_link));
        }
    }
})

export const {productQuantityReducer, removeFromCart, updateProductQuantityReducer, removeFromAddToCart} = addToCartSliceProduct.actions; 
export default addToCartSliceProduct.reducer;