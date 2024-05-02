import {
    createBrowserRouter,
    
  } from "react-router-dom";
  import HomePage from "../pages/homePage/HomePage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
  ]);
  export {router}