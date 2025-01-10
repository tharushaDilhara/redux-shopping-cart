import React from 'react'
import "./header.css"
import { useDispatch, useSelector } from 'react-redux'
import { showCart } from '../cart/cartSlice';
import cart from "../../assets/Icons/cart-shopping-solid.svg"
const Header = () => {
  const {cartDisplay,totalQuantity} = useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  return (
   <nav>
        <h1>
            Shoofy
        </h1>
        <div className="cart">
          <img src={cart} onClick={()=>dispatch(showCart())}/>
          <span>{totalQuantity}</span>
        </div>
    </nav>
  )
}

export default Header