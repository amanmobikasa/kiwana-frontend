import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reducer/productSlice";
import userAuthSlice from "../reducer/userAuthSlice";
import pdppopupSlice from "../reducer/pdppopupSlice";
import filterProductSlice from "../reducer/filterProductSlice";
import createContactSlice from "../reducer/createContactSlice";
import productDescriptionSlice from "../reducer/productDescriptionSlice";
import addToCartSlice from "../reducer/addToCartSlice";
import orderinstructionSlice from "../reducer/orderinstructionSlice";
import payementSlice from "../reducer/payementSlice";
import signupSlice from "../reducer/signupSlice";
import userAuthTokenSlice from "../reducer/userAuthTokenSlice";
import orderStatusSlice from "../reducer/orderStatusSlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        users : userAuthSlice,
        pdpSlice : pdppopupSlice,
        filterProducts : filterProductSlice,
        contactUser : createContactSlice,
        pdpProductData : productDescriptionSlice,
        productQty : addToCartSlice,
        orderInstruction : orderinstructionSlice,
        paymentMethod : payementSlice,
        signUp : signupSlice,
        userJwtToken : userAuthTokenSlice,
        orderStatus : orderStatusSlice
    }
})

export default store;