import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reducer/productSlice";
import userAuthSlice from "../reducer/userAuthSlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        users : userAuthSlice
    }
})

export default store;