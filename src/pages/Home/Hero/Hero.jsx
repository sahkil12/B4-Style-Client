import { IoArrowForward } from "react-icons/io5";
import { motion } from 'motion/react';

const Hero = () => {

     return (
          <motion.section className="relative h-screen w-full bg-cover bg-center"
               style={{
                    backgroundImage:
                         "url('/src/assets/b4-style-hero-1.jpg')",
               }}>
               {/* Overlay */}
               <div className="absolute inset-0 bg-black/75 md:bg-black/70"></div>
               {/* <img src="/src/assets/" alt="" /> */}
               {/* Content */}
               <div className="relative z-10 h-full mx-auto px-4 pt-14 flex items-center">
                    <div className="max-w-md text-white space-y-6">
                         <p className="text-sm font-semibold tracking-[0.25em] text-primary">
                              NEW COLLECTION 2026
                         </p>
                         {/* headline */}
                         <h1 className="text-7xl sm:text-8xl tracking-[0.07em] bebas font-medium leading-20 sm:leading-28">
                              BORN FOR <br />
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-primary">STYLE</span>
                         </h1>
                         {/*  */}
                         <p className="text-accent/70 text-base sm:text-xl">
                              Elevate your wardrobe with premium streetwear. Bold designs for the
                              fashion-forward generation in Bangladesh.
                         </p>
                         {/* button */}
                         <div className="flex gap-4 pt-2 flex-wrap">
                              <button className="bg-primary px-6 sm:px-7 py-2.5 font-semibold hover:bg-primary flex items-center justify-center cursor-pointer gap-2 transition-all duration-200 hover:scale-105 active:scale-105">
                                   SHOP NOW <IoArrowForward size={20} />
                              </button>
                              <button className="border cursor-pointer border-accent px-6 py-2.5 font-semibold transition-all duration-200 hover:scale-105 hover:bg-accent hover:text-secondary active:scale-105 active:bg-accent active:text-secondary">
                                   OUR STORY
                              </button>
                         </div>
                         {/*  */}
                         <div className="flex gap-10 pt-10">
                              <Stat title="10K+" label="HAPPY CUSTOMERS" />
                              <Stat title="100+" label="UNIQUE STYLES" />
                              <Stat title="64+" label="DISTRICTS" />
                         </div>
                    </div>
               </div>
          </motion.section>
     );
};
const Stat = ({ title, label }) => (
     <div>
          <h3 className="text-primary bebas text-3xl tracking-wide mb-1 md:text-4xl font-medium">{title}</h3>
          <p className="text-sm md:text-sm text-accent/70 tracking-wide">{label}</p>
     </div>
);


export default Hero;
