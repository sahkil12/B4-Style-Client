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
import Profile from "../../pages/Profile/Profile";
import ForgotPassword from "../../pages/Auth/ForgotPassword/ForgotPassword";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AuthProtected from "../AuthProtected/AuthProtected";
import { fetchProductById } from "../../Hooks/products";
import Loader from "../../Components/Shared/Loader";
import Checkout from "../../pages/CheckoutPage/Checkout";
import PaymentSuccess from "../../pages/CheckoutPage/PaymentSuccess";

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
                    element: <PrivateRoute>
                         <Wishlist>
                         </Wishlist>
                    </PrivateRoute>
               },
               {
                    path: 'cart',
                    element: <PrivateRoute>
                         <AddCart>
                         </AddCart>
                    </PrivateRoute>
               },
               {
                    path: 'checkout',
                    element: <PrivateRoute>
                         <Checkout></Checkout>
                    </PrivateRoute>
               },
               {
                    path: "product/:id",
                    element: <ProductDetails></ProductDetails>,
                    loader: ({ params }) => fetchProductById(params.id),
                    hydrateFallbackElement: <Loader />
               },
               {
                    path: "profile",
                    element: <PrivateRoute>
                         <Profile>
                         </Profile>
                    </PrivateRoute>
               },
               {
                    path: "/payment-success",
                    element: <PaymentSuccess />
               }
          ]
     },
     {
          path: '/auth',
          element: <AuthLayout></AuthLayout>,
          children: [
               {
                    path: 'sign_in',
                    element: <AuthProtected><SignIn></SignIn></AuthProtected>
               },
               {
                    path: 'sign_up',
                    element: <AuthProtected> <SignUp></SignUp></AuthProtected>
               },
               {
                    path: 'forgot_password',
                    element: <AuthProtected> <ForgotPassword></ForgotPassword> </AuthProtected>
               }
          ]
     },
]);
