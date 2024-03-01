import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    orderStatus : [],
    orderDetails : [],
}

// export const placeOrder = createAsyncThunk(
//     'orderStatus/placeOrder',
//     async (orderDetails, { rejectWithValue, getState }) => {
//         let isLoading = true;
//         let response;
//         let error;

//         try {
//             response = await axios.post(
//                 'http://localhost:4000/place-order',
//                 orderDetails
//             );
//             isLoading = false;
//         } catch (err) {
//             error = err.response;
//             isLoading = false;
//         }

//         return { isLoading, response, error };
//     }
// );



const orderStatusSlice = createSlice({
    name : 'orderStatus',
    initialState,
    reducers : {
        addOrderStatus : (state, action) => {
           void state.orderStatus.push(action.payload);
        },
        addOrderDetails : (state, action) => {
            void state.orderDetails.push(action.payload);
        }
    }
    
})
export const { addOrderStatus, addOrderDetails } = orderStatusSlice.actions;
export default orderStatusSlice.reducer;

