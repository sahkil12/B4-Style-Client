import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/Mainlayout/Mainlayout";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";

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
               }
          ]
     },
]);
