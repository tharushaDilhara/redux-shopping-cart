import { createSlice } from "@reduxjs/toolkit";

import img1 from "../../../../assets/gaming/gaming1.jpg"
import img2 from "../../../../assets/gaming/gaming2.jpg"
import img3 from "../../../../assets/gaming/gaming3.jpg"
import img4 from "../../../../assets/gaming/gaming4.jpg"
import img5 from "../../../../assets/gaming/gaming5.jpg"
import img6 from "../../../../assets/gaming/gaming6.jpg"
import img7 from "../../../../assets/gaming/gaming7.jpg"
import img8 from "../../../../assets/gaming/gaming8.jpg"
import img9 from "../../../../assets/gaming/gaming9.jpg"

const initialState ={
    gaming:[
        {id:10, img:img1, title:"gaming", price:1214},
        {id:11, img:img2, title:"gaming", price:152}, 
        {id:12, img:img3, title:"gaming", price:744},
        {id:13, img:img4, title:"gaming", price:1554},
        {id:14, img:img5, title:"gaming", price:1224},
        {id:15, img:img6, title:"gaming", price:2401},
        {id:16, img:img7, title:"gaming", price:855},
        {id:17, img:img8, title:"gaming", price:5504},
        {id:18, img:img9, title:"gaming", price:1124}
]
}
const gamingSlice =createSlice({
    name:"gaming",
    initialState,
    reducers:{}
})

export default gamingSlice.reducer