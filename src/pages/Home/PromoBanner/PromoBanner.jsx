import { Link } from "react-router-dom";


const PromoBanner = () => {
     return (
          <section className="w-full">
               {/* Main Banner Container */}
               <div className="relative w-full bg-primary overflow-hidden py-16 md:py-24 flex flex-col items-center justify-center text-center px-4">
                    {/* Background Decorative Circles (Corners) */}
                    <div className="absolute -top-24 -left-28 w-56 h-56 bg-[#c90505] rounded-full opacity-50"></div>
                    <div className="absolute -bottom-28 -right-32 w-72 h-72 bg-[#c90505] rounded-full opacity-60"></div>
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center">
                         <h4 className="text-accent text-xs md:text-sm font-semibold tracking-[0.5em] uppercase mb-6">
                              Limited Time Offer
                         </h4>
                         {/*  */}
                         <h2 className="text-accent text-5xl md:text-7xl font-semibold bebas tracking-widest mb-6">
                              Get 25% Off
                         </h2>
                         {/*  */}
                         <p className="text-accent text-sm md:text-xl mb-8 max-w-xl ">
                              Use code <span className="font-bold uppercase">B4STYLE25</span> at checkout.
                              Valid on all new arrivals.
                         </p>
                         {/* button */}
                         <Link to={'/shop'} className="bg-base-100 text-accent px-10 py-5 text-xs md:text-[15px] rounded-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-base-100 transition-all duration-300 active:bg-accent active:text-base-100">
                              Shop The Sale
                         </Link>
                    </div>
               </div>
          </section>
     );
};

export default PromoBanner;