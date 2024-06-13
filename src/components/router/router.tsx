import {
    createBrowserRouter,
  } from "react-router-dom";
  import HomePage from "../pages/homePage/HomePage";

import ProductDetailePage from "../pages/productDetailePage/ProductDetailePage";
// import BuyCart from "../pages/shoppingCartPage/ShoppingCart";
import ShoppingCart from "../pages/shoppingCartPage/ShoppingCart";
import ShippingPage from "../pages/shippingPage/ShippingPage"
// import ShippingPage from "../pages/shippingPage/ShippingPage"
// import { useContext } from "react";

// const productListX = useContext(ProductListContext)
const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
      // children : [
      //   {
      //     path:'/:id',
      //     element:<ProductDetailePage  />
      //   }
      // ]
    },
    {
      path:'/product',
    
      children:[
        {
          path:'/product/:id',
          element:<ProductDetailePage/>
        }
      ]
    },
   
    {
      path:'/checkout/cart/',
      element:<ShoppingCart/>,
      // children : [
      //   {
      //     path :''
      //   }
      // ]
    },
    // {
    //   path :'/shipping',
    //   element:<ShippingPage/>,
    // }
    {
      path:'/shipping',
      element:<ShippingPage/>,
    },
    // {
    //   path:'/product/:id',
    //   element:<ProductDetailePage/>
    // }
    // {
    //   path : '/productList',
    //   element:<ProductListPage/>,
    // }
  ]);
  export {router}