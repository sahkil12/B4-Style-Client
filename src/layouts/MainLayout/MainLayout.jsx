import { Outlet } from "react-router-dom";
import Navbar from "../../Components/layouts/Navbar";
import Footer from "../../Components/layouts/Footer";

const MainLayout = () => {
     return (
          <div className="bg-primary text-accent min-h-screen">
               <header>
                    <Navbar></Navbar>
               </header>
               <section>
                    <Outlet></Outlet>
               </section>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;