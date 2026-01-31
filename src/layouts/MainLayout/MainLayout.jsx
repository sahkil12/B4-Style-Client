import { Outlet } from "react-router-dom";
import Footer from "../../Components/layouts/Footer";
import Navbar from "../../Components/layouts/Navbar/Navbar";

const MainLayout = () => {
    
     return (
          <div className="bg-base-100 text-accent ">
               <Navbar></Navbar>
               <section className="min-h-[calc(100vh-743px)]">
                    <Outlet></Outlet>
               </section>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;