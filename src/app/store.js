import { configureStore } from "@reduxjs/toolkit";
import sunglassReducer from "../features/All/products/Sunglasses/sunglassSlice"
import beautySlice from "../features/All/products/Beauty/beautySlice"
import gamingSlice from '../features/All/products/Gaming/GamingSlice' 
import CartSlice  from "../features/cart/cartSlice";

export const store = configureStore({
    reducer:{
        cart:CartSlice,
        sunglasses:sunglassReducer,
        beauty:beautySlice,
        gaming : gamingSlice,
    }
})