
import { createBrowserRouter,Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Error  from "../erorr/Error";
import Home from "../pages/Home/Home"
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import SignIn from "../pages/Account/SignIn";
import SignUp from "../pages/Account/SignUp";
import Payment from "../pages/payment/Payment";

import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";



const Routes=createBrowserRouter([
    {
    path:"/",
    element:<Layout />, 
 
    
    errorElement:<Error />,
     children:[   
        {
            path:"/shoppii",
            element:<Home/>,
        }  ,             
               
     {
            path:"/shop",
            element:<Shop />
        },
        {
            path:"/about",
            element:<About />,
        },
        {
            path:"/contact",
            element:<Contact />,
        }, 
      
        {
            path:"/product/:_id",
            element:<ProductDetails />,
        },
         {
            path:"/cart",
            element:<Cart />,
        },
        {
            path:"/paymentgateway",
            element:<Payment />,
        },
         {
            path:"/signup",
            element:<SignUp />,
        },
        {
            path:"/signin",
            element:<SignIn />,
        }
    ]
            },
        
            
          
            
          ],
           
  

);
export default Routes;


  