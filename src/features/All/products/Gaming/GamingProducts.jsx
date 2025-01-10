import React from 'react'
import "./gaming.css"
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart } from '../../../cart/cartSlice'

const GamingProducts = () => {
  const gaming = useSelector((state)=>state.gaming.gaming);
  const disptach = useDispatch();
  return (
    <div>
      <h1>Gaming</h1>
      <div className="row-1">
        {gaming.map((gaming)=>{
              return <div key={gaming.id} className='games'>
                      <img src={gaming.img} alt="" />
                      <h3>{gaming.title}</h3>
                      <p>${gaming.price}</p>
                      <div className="btns">
                          <button>buy now</button>
                          <button onClick={()=>{disptach(addtoCart(gaming))}}>Add to cart</button>
                      </div>
              </div>
          })}
      </div>
       
    </div>
  )
}

export default GamingProducts