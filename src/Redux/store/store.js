import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reducer/productSlice";
import userAuthSlice from "../reducer/userAuthSlice";
import pdppopupSlice from "../reducer/pdppopupSlice";
import filterProductSlice from "../reducer/filterProductSlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        users : userAuthSlice,
        pdpSlice : pdppopupSlice,
        filterProducts : filterProductSlice
    }
})

export default store;