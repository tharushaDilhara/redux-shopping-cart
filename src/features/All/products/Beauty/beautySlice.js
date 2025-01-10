import { createSlice } from "@reduxjs/toolkit";
import img1 from "../../../../assets/beauty/beauty1.jpg"
import img2 from "../../../../assets/beauty/beauty2.jpg"
import img3 from "../../../../assets/beauty/beauty3.jpg"
import img4 from "../../../../assets/beauty/beauty4.jpg"
import img5 from "../../../../assets/beauty/beauty5.jpg"
import img6 from "../../../../assets/beauty/beauty6.jpg"
import img7 from "../../../../assets/beauty/beauty7.jpg"
import img8 from "../../../../assets/beauty/beauty8.jpg"
import img9 from "../../../../assets/beauty/beauty9.jpg"

const initialState= {
    beauties:[
        {id:1, img:img1, title:"beauty cream", price:124},
        {id:2, img:img2, title:"beauty cream", price:114}, 
        {id:3, img:img3, title:"beauty cream", price:44},
        {id:4, img:img4, title:"beauty cream", price:24},
        {id:5, img:img5, title:"beauty cream", price:125},
        {id:6, img:img6, title:"beauty cream", price:133},
        {id:7, img:img7, title:"beauty cream", price:289},
        {id:8, img:img8, title:"beauty cream", price:1024},
        {id:9, img:img9, title:"beauty cream", price:1424}
]}
const beautySlice = createSlice({
    name:"beautyList",
    initialState,
    reducers:{}
})
export default beautySlice.reducer