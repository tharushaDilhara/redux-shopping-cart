import React from 'react'
import "./beauty.css"
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart } from '../../../cart/cartSlice'

const BeautyProducts = () => {
  const beauty = useSelector((state)=>state.beauty.beauties);
  const dispatch = useDispatch();
  return (
    <section>
         <h1>Beauty</h1>
         <div className="row-1">
         {beauty.map((beauty)=>{
            return <div key={beauty.id} className='bauties'>
                <img src={beauty.img} alt="" />
                <h3>{beauty.title}</h3>
                <p>${beauty.price}</p>
                <div className="btns">
                    <button>buy now</button>
                    <button onClick={()=>{dispatch(addtoCart(beauty))}}>Add to cart</button>
                </div>
            </div>
        })}
         </div>
        
    </section>
  )
}

export default BeautyProducts