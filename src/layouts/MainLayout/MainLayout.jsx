import { Outlet } from "react-router-dom";
import Navbar from "../../Components/layouts/Navbar";
import Footer from "../../Components/layouts/Footer";

const MainLayout = () => {
    
     return (
          <div className="bg-base-100 text-accent ">
               <Navbar ></Navbar>
               <section className="min-h-[calc(100vh-743px)] xl:max-w-10/12 mx-auto">
                    <Outlet></Outlet>
               </section>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;