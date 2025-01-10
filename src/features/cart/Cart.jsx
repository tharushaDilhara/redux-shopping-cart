import React, { useState } from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, removeFromCart, showCart } from './cartSlice';
import close_icon from '../../assets/Icons/xmark-solid.svg'
const Cart = () => {
    const {cartItem,totalAmount,totalQuantity,cartDisplay} = useSelector((state)=>state.cart);
    const disptach = useDispatch();

    //const[cart,setShowCart] = useState(cartDisplay);
  return (
    
    cartDisplay ?
    
    <div className='container'id="con">
        <img src={close_icon} className="close-btn" onClick={()=>{cartDisplay ? disptach(showCart(false)) : <></>}} />
        <div className="header">
            <h1>Cart</h1>
        </div>
        <div className="body-section">
            {cartItem.length === 0 &&
            <p>Cart is Empty</p>
            }
            <div className="overflow-this">
            {cartItem.map((item)=>{
                return <div key={item.id} className='dets'>
                            <div className="bacics-details">
                                <img src={item.img} alt="" />
                                <h3>{item.title}</h3>
                            </div>
                            <div className="second-main-body">
                                <div className="price">
                                    <p>${item.price}</p>
                                </div>
                                <div className="increse-decrease">
                                    <button onClick={()=>disptach(decrease(item))}>-</button>{item.quantity}<button onClick={()=>disptach(increase(item))}>+</button>
                                </div>
                                <div className="btn">
                                    <button onClick={()=>disptach(removeFromCart(item))}>Remove</button>
                                </div>
                            </div>
                </div>
            })}
            
            </div>
        </div>
        <div className="cart-info">
            <div className="details">
                <h2>Total: <span>${totalAmount}</span> </h2>
                <h2>Total Quantity:<span>{totalQuantity}</span> </h2>
            </div>
            <div className="btn">
                <button>checkout</button>
            </div>
            
        </div>
        
        
    </div>:<>O</>
  )
}

export default Cart