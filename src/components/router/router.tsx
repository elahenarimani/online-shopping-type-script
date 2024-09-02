import {
    createBrowserRouter,
  } from "react-router-dom";
  import HomePage from "../pages/homePage/HomePage";

import ProductDetailePage from "../pages/productDetailePage/ProductDetailePage";

import ShippingPage from "../pages/shippingPage/ShippingPage"
import CheckoutPage from "../pages/checkoutPage/CheckoutPage"
import PostData from "../postData/PostData"
import ProductListPage from "../pages/productListPage/ProductListPage";

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
      element:<CheckoutPage/>,
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
    {
      path:'/Posting',
      element:<PostData/>,
    },
    {
      path : '/productList',
      children:[{
        path: '/productList/:headcategory',
        element:<ProductListPage/>
      }]
    }
  ]);
  export {router}