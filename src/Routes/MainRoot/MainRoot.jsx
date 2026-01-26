import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Wishlist from "../../pages/Wishlist/Wishlist";
import AddCart from "../../pages/AddCart/AddCart";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <MainLayout></MainLayout>,
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
                    element: <ProductDetails></ProductDetails>
               }
          ]
     },
]);
