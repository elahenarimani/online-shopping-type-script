// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { useEffect, useState } from "react";

// interface IProduct {
//     id: string,
//     head_category: string,
//     category: string,
//     name: string,
//     price: number,
//     in_stock: number,
//     image: string[]
// }
// interface IProductList {
//     productList?: IProduct[],
//     setProductList?: Function
// }
// useEffect(() => {
//     axios.get('https://662b7b1dde35f91de15869ec.mockapi.io/products')
//         .then(result => setProductList(result.data)
//             // .catch(err=> console.log(err))
//         )
// }, [])
// const [productList, setProductList] = useState<IProduct[]>([]);
// const productListReducer = createSlice({
   
//     name : "productListReducer",
//     initialState : [],
//     reducers: {
//         // add: (state,action)=>{
//         //     state.push({id : Date.now() , ...action.payload})
//         // },
//         // remove: (state,action)=>{
//         //     state.pop()
//         // }
//     }
// })

// // export const {add,remove} = productListReducer.actions
// export default productListReducer.reducer
