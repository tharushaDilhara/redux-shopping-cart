import { createSlice } from "@reduxjs/toolkit"
import { act } from "react";


const initialState={
    cartItem:[],
    totalAmount:0,
    totalQuantity:0,
    cartDisplay : false
}
export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtoCart:(state,action)=>{
            const existing = state.cartItem.find((item)=>item.id === action.payload.id);
            if(existing){
                state.totalAmount += existing.price;
                existing.quantity +=1;
                state.totalQuantity +=1;
            }else{
                state.totalAmount += action.payload.price;
                state.totalQuantity +=1;
                state.cartItem.push(
                    {...action.payload, quantity:1}
                )
                
            }
        },
        removeFromCart:(state,action)=>{
            const existing = state.cartItem.find((item)=>item.id === action.payload.id);
            if(existing >= 1){
                state.cartItem = state.cartItem.filter((item)=>item.id !== action.payload.id);
                state.totalQuantity -=1;
                state.totalAmount -= action.payload.price;
            }else{
                state.cartItem = state.cartItem.filter((item)=>item.id !== action.payload.id);
                state.totalQuantity -= existing.quantity;
                state.totalAmount -=existing.price*existing.quantity;
            }
            
        },
        increase:(state,action)=>{
            const existing = state.cartItem.find((item)=>item.id === action.payload.id);
            existing.quantity +=1;
            state.totalQuantity +=1;
            state.totalAmount += action.payload.price;
        }
        ,decrease:(state,action)=>{
            const existing = state.cartItem.find((item)=>item.id === action.payload.id);
            if(existing.quantity > 1){
                existing.quantity -=1;
                state.totalQuantity -=1;
                state.totalAmount -= action.payload.price;
            }else{
                state.cartItem = state.cartItem.filter((item)=>item.id !== action.payload.id);
                existing.quantity -=1;
                state.totalQuantity -=1;
                state.totalAmount -= action.payload.price;
            }
           
        },showCart:(state,action)=>{
            const current = state.cartDisplay
             if(current){
                state.cartDisplay = false
             }else{
                state.cartDisplay= true;
             }
        },
        
    }
})
export const {addtoCart,removeFromCart,increase,decrease,showCart} = cartSlice.actions;
export default cartSlice.reducer