import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderProductsFinal : [],
    // cancelProductFinal : [], 
    editProductFinal : [],
}

const orderSliceFinal = createSlice({
    name : 'orderFinal',
    initialState,
    reducers : {
        orderFinal : (state, action) => {
            state.orderProductsFinal.push(action.payload) 
        },
        cancelOrderFinal : (state, action) => {
            state.orderProductsFinal = state.orderProductsFinal.filter((item)=> item?.order_id !== action.payload)
        },
        editOrderFinal : (state, action) => {
            void state.editProductFinal.push(action.payload)
        }
    }
})

export const { orderFinal, cancelOrderFinal, editOrderFinal } = orderSliceFinal.actions;
export default orderSliceFinal.reducer;