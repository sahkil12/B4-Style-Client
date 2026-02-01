import { IoArrowForward } from "react-icons/io5";
import { PiMouseSimple } from "react-icons/pi";
import { motion } from 'motion/react';
import { Link } from "react-router-dom";

const containerVariants = {
     hidden: {},
     show: {
          transition: {
               staggerChildren: 0.15,
               delayChildren: .4
          },
     }
}

const childVariants = {
     hidden: { opacity: 0, y: 30 },
     show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Hero = () => {

     return (
          <motion.section
               initial={{ scale: 1.1, opacity: 0.5 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.9 }}
               className="relative h-screen w-full bg-cover bg-center xl:max-w-[75%] mx-auto"
               style={{
                    backgroundImage:
                         "url('/assets/Others/b4-style-hero-1.webp')",
               }}>
               {/* Overlay */}
               <div className="absolute inset-0 bg-base-100/70 md:bg-base-100/65"></div>
               {/* Content */}
               <div className="relative z-10 h-full mx-auto px-4 pt-14 flex items-center">
                    <motion.div
                         variants={containerVariants}
                         initial="hidden"
                         animate="show"
                         className="max-w-md text-accent space-y-5">
                         <motion.p
                              variants={childVariants}
                              className="text-sm font-semibold tracking-[0.25em] text-primary">
                              NEW COLLECTION 2026
                         </motion.p>
                         {/* headline */}
                         <motion.h1 variants={childVariants} className="text-6xl sm:text-8xl tracking-[0.07em] bebas font-medium leading-20 sm:leading-[100px]">
                              BORN FOR <br />
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-primary">STYLE</span>
                         </motion.h1>
                         {/*  */}
                         <motion.p variants={childVariants} className="text-accent/70 text-base sm:text-xl">
                              Elevate your wardrobe with premium streetwear. Bold designs for the
                              fashion-forward generation in Bangladesh.
                         </motion.p>
                         {/* button */}
                         <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-4 pt-2 flex-wrap">
                              <Link to={'/shop'} className="bg-primary px-6 sm:px-8 py-2.5 font-semibold hover:bg-primary flex items-center justify-center cursor-pointer gap-2 transition-all duration-200 hover:scale-105 active:scale-105 group w-fit">
                                   SHOP NOW <IoArrowForward className="group-hover:ml-0.5" size={20} />
                              </Link>
                              <Link to={'/about'} className="border cursor-pointer border-accent/90 px-6 w-fit py-2.5 font-semibold transition-all duration-200 hover:scale-105 hover:bg-accent hover:text-secondary active:scale-105 active:bg-accent active:text-secondary">
                                   OUR STORY
                              </Link>
                         </motion.div>
                         {/* stats */}
                         <motion.div variants={childVariants} className="flex gap-8 sm:gap-10 pt-8 sm:pt-10">
                              <Stat title="10K+" label="HAPPY CUSTOMERS" />
                              <Stat title="100+" label="UNIQUE STYLES" />
                              <Stat title="64+" label="DISTRICTS" />
                         </motion.div>
                    </motion.div>
               </div>
               <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute text-primary/80 bottom-0 sm:bottom-4 flex justify-self-center">
                    <PiMouseSimple size={35}></PiMouseSimple>
               </motion.div>
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
