import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Error from "../erorr/Error";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import SignIn from "../pages/Account/SignIn";
import SignUp from "../pages/Account/SignUp";
import Payment from "../pages/payment/Payment";

import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";

const Routes = createBrowserRouter([
  {
    path: "/shoppii",
    element: <Layout />,

    errorElement: <Error />,
    children: [
      {
        path: "/shoppii/home",
        element: <Home />,
      },

      {
        path: "/shoppii/shop",
        element: <Shop />,
      },
      {
        path: "/shoppii/about",
        element: <About />,
      },
      {
        path: "/shoppii/contact",
        element: <Contact />,
      },

      {
        path: "/shoppii/product/:_id",
        element: <ProductDetails />,
      },
      {
        path: "/shoppii/cart",
        element: <Cart />,
      },
      {
        path: "/shoppii/paymentgateway",
        element: <Payment />,
      },
      {
        path: "/shoppii/signup",
        element: <SignUp />,
      },
      {
        path: "/shoppii/signin",
        element: <SignIn />,
      },
    ],
  },
]);
export default Routes;
