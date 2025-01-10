import React, { useState } from 'react'
import "./sunglass.css"
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart } from '../../../cart/cartSlice'
import Slider from 'react-slick'

const SunglassProducts = () => {

  const sunglass = useSelector((state)=>state.sunglasses.sunglass);
  const dispatch = useDispatch();
  const[activeImg,setActiveImg] = useState(0);
  return (
    <section>
        <h1>Sunglasses</h1>
        
        <div className='row-1'>
         

        {sunglass.map((sunglass)=>{ 

            const{id,img,title,price} = sunglass;
            
            return <div key={id} className="sungdet">
                <img src={img} alt="" />
                <h3>{title}</h3>
                <p>${price}</p>
                <div className="btns">
                    <button>buy now</button>
                    <button onClick={()=>dispatch(addtoCart(sunglass))}>Add to cart</button>
                </div>
            </div>
           
        })}
        
      </div>
    
    </section>
  )
}

export default SunglassProducts