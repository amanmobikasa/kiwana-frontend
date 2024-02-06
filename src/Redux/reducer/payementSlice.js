import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paymentMethod : "",

}

const paymentMethodSlice = createSlice({
    name : "paymentMethod",
    initialState,
    reducers : {
        setPaymentMethod : (state, action) => {
            state.paymentMethod = action.payload
        
        }
    }
})
export const { setPaymentMethod } = paymentMethodSlice.actions
export default paymentMethodSlice.reducer