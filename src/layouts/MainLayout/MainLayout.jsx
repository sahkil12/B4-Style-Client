import { Outlet } from "react-router-dom";
import Navbar from "../../Components/layouts/Navbar";
import Footer from "../../Components/layouts/Footer";

const MainLayout = () => {
     return (
          <div className="bg-base-100 text-accent ">
               <header>
                    <Navbar></Navbar>
               </header>
               <section className="min-h-[calc(100vh-723px)]">
                    <Outlet></Outlet>
               </section>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;