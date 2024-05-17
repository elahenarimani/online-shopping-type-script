import {
    createBrowserRouter,
  } from "react-router-dom";
  import HomePage from "../pages/homePage/HomePage";
import ProductListPage from "../pages/shoppingCartPage/ShoppingCart";
import ProductDetailePage from "../pages/productDetailePage/ProductDetailePage";
// import BuyCart from "../pages/shoppingCartPage/ShoppingCart";
import ShoppingCart from "../pages/shoppingCartPage/ShoppingCart";
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
      element: <ProductListPage/>
    },
    {
      path:'/product/:id',
      element:<ProductDetailePage/>
    },
    {
      path:'/product/cart',
      element:<ShoppingCart/>
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