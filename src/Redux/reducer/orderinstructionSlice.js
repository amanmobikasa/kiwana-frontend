import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderInstruction : ""
}

const orderInstructionSlice = createSlice({
    name : "orderInstruction",
    initialState,
    reducers : {
        setOrderInstruction : (state, action) => {
            state.orderInstruction = action.payload
        }
        
    }
})

export const { setOrderInstruction } = orderInstructionSlice.actions
export default orderInstructionSlice.reducer