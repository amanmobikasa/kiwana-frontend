import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reducer/productSlice";
import userAuthSlice from "../reducer/userAuthSlice";
import pdppopupSlice from "../reducer/pdppopupSlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        users : userAuthSlice,
        pdpSlice : pdppopupSlice
    }
})

export default store;