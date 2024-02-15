import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderStatus : []
}

const orderStatusSlice = createSlice({
    name : 'orderStatus',
    initialState,
    reducers : {
        addOrderStatus : (state, action) => {
           void state.orderStatus.push(action.payload);
        }
    }
})
export const { addOrderStatus } = orderStatusSlice.actions;
export default orderStatusSlice.reducer;

