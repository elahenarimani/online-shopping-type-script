import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import ProductDetailePage from "../pages/productDetailePage/ProductDetailePage";
import ShippingPage from "../pages/shippingPage/ShippingPage";
import CheckoutPage from "../pages/checkoutPage/CheckoutPage";
import PostData from "../postData/PostData";
import ProductListPage from "../pages/productListPage/ProductListPage";
import FavoriteItem from "../pages/favoriteProductPage/FavoriteItem";
import IncredibleOffersPage from "../pages/offers/IncredibleOffersPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product",
    children: [
      {
        path: "/product/:id",
        element: <ProductDetailePage />,
      },
    ],
  },
  {
    path: "/checkout/cart/",
    element: <CheckoutPage />,
  },
  {
    path: "/shipping",
    element: <ShippingPage />,
  },
  {
    path: "/Posting",
    element: <PostData />,
  },
  {
    path: "/productList",
    children: [
      {
        path: "/productList/:headcategory",
        element: <ProductListPage />,
      },
    ],
  },
  {
    path: "/favorite",
    element: <FavoriteItem />,
  },
  {
    path :"/incredibleOffers",
    element : <IncredibleOffersPage/>
  }
]);
export { router };
