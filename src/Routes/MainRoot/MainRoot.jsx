import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Wishlist from "../../pages/Wishlist/Wishlist";
import AddCart from "../../pages/AddCart/AddCart";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import NotFound from "../../Components/Shared/NotFound";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import SignIn from "../../pages/Auth/SignIn/SignIn";
import SignUp from "../../pages/Auth/SignUp/SignUp";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <MainLayout></MainLayout>,
          errorElement: <NotFound></NotFound>,
          children: [
               {
                    index: true,
                    element: <Home></Home>
               },
               {
                    path: 'shop',
                    element: <Shop></Shop>
               },
               {
                    path: 'about',
                    element: <About></About>
               },
               {
                    path: 'contact',
                    element: <Contact></Contact>
               },
               {
                    path: 'wishlist',
                    element: <Wishlist></Wishlist>
               },
               {
                    path: 'cart',
                    element: <AddCart></AddCart>
               },
               {
                    path: "product/:id",
                    element: <ProductDetails></ProductDetails>,
                    loader: () => fetch('/products.json').then(res => res.json())
               }
          ]
     },
     {
          path: 'auth',
          element: <AuthLayout></AuthLayout>,
          children: [
               {
                    path: '/sign_in',
                    element: <SignIn></SignIn>
               },
               {
                    path: '/sign_up',
                    element: <SignUp></SignUp>
               }
          ] 
     }
]);
