import { motion } from "framer-motion";

const Spinner = () => {
     return (
          <div className="h-screen border flex flex-col items-center justify-center">
               {/* brand logo */}
               <motion.img
                    initial={{ opacity: 0.85, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                         repeat: Infinity,
                         repeatType: "mirror",
                         duration: 1,
                         ease: "easeInOut"
                    }}
                    src="/b4-style-logo.webp"
                    className="w-20 h-20 mb-8"
                    alt="B4 Style Logo" />
               {/* Loading Bar */}
               <div className="w-40 h-[3px] bg-accent/10 overflow-hidden">
                    <motion.div
                         initial={{ x: "-100%" }}
                         animate={{ x: "100%" }}
                         transition={{
                              repeat: Infinity,
                              duration: 2.5,
                              ease: "easeInOut"
                         }}
                         className="h-full w-1/2 bg-primary"
                    />
               </div>
               {/* Subtitle */}
               <p className="mt-6 text-xs tracking-[3.5px] text-neutral-400 uppercase">
                    Born For Style
               </p>
          </div>
     );
};

export default Spinner;