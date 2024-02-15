import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paymentMethod : "",
    finalCartProduct : [],

}

const paymentMethodSlice = createSlice({
    name : "paymentMethod",
    initialState,
    reducers : {
        setPaymentMethod : (state, action) => {
            state.paymentMethod = action.payload
        
        },
        setFinalCartProduct : (state, action) => {
             state.finalCartProduct = action.payload
        }
    }
})
export const { setPaymentMethod, setFinalCartProduct } = paymentMethodSlice.actions
export default paymentMethodSlice.reducer