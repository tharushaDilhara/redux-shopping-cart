import { createSlice } from "@reduxjs/toolkit";

import img1 from "../../../../assets/sunglasses/sunglass1.jpg"
import img2 from "../../../../assets/sunglasses/sunglass2.jpg"
import img3 from "../../../../assets/sunglasses/sunglass3.jpg"
import img4 from "../../../../assets/sunglasses/sunglass4.jpg"
import img5 from "../../../../assets/sunglasses/sunglass5.jpg"
import img6 from "../../../../assets/sunglasses/sunglass6.jpg"
import img7 from "../../../../assets/sunglasses/sunglass7.jpg"

const initialState={
    sunglass:[
        {id:19, img:img1, title:"sunglass", price:114},
        {id:20, img:img2, title:"sunglass", price:124}, 
        {id:21, img:img3, title:"sunglass", price:74},
        {id:22, img:img4, title:"sunglass", price:154},
        {id:23, img:img5, title:"sunglass", price:124},
        {id:24, img:img6, title:"sunglass", price:201},
        {id:25, img:img7, title:"sunglass", price:85},
    ]
}
const sunglassSlice = createSlice({
    name:"sunglassList",
    initialState,
    reducers:{}
})

export default  sunglassSlice.reducer