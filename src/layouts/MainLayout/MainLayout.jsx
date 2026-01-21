import { Outlet } from "react-router-dom";
import Navbar from "../../Components/layouts/Navbar";
import Footer from "../../Components/layouts/Footer";
import { useEffect, useState } from "react";

const MainLayout = () => {
     // const [scrolled, setScrolled] = useState(false)
     // console.log(scrolled);

     // useEffect(() => {
     //      const handleScrolled = () => {
     //           setScrolled(window.scrollY > 20);
     //      };

     //      window.addEventListener("scroll", handleScrolled);
     //      return window.removeEventListener("scroll", handleScrolled)
     // }, [])

     return (
          <div className="bg-base-100 text-accent ">
               <Navbar ></Navbar>
               <section className="min-h-[calc(100vh-743px)] max-w-7xl mx-auto">
                    <Outlet></Outlet>
               </section>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;