import { useState } from "react";
import { FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { motion } from "motion/react"

const links = [
     { name: "Home" },
     { name: "Shop" },
     { name: "About" },
     { name: "Contact" },
     { name: "Search", icon: <FiSearch /> },
     { name: "Wishlist", icon: <FiHeart /> },
];

const menuVariants = {
     closed: {
          height: 0,
          opacity: 0,
          transition: {
               duration: 0.4,
               ease: "easeInOut",
          },
     },
     open: {
          height: "auto",
          opacity: 1,
          transition: {
               duration: 0.3,
               ease: "easeOut",
               when: "beforeChildren",
               staggerChildren: 0.10,
          },
     },
};

const itemVariants = {
     closed: {
          opacity: 0,
          x: -20,
     },
     open: {
          opacity: 1,
          x: 0,
          transition: {
               duration: 0.15,
               ease: "easeOut",
          },
     },
};


const Navbar = () => {
     const [open, setOpen] = useState(false)

     return (
          <div className="bg-secondary border-b border-neutral-700 shadow-sm py-2 relative">
               <div className="navbar  max-w-10/12 mx-auto">
                    <div className="navbar-start">
                         <div>
                              <img src="/src/assets/b4-style-logo.png" className="h-12" alt="" />
                         </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1 gap-4 text-base font-medium">
                              {links
                                   .filter(item => !item.icon)
                                   .map((item, index) => (
                                        <li key={index}>
                                             <a className="hover:text-primary">
                                                  {item.name}
                                             </a>
                                        </li>
                                   ))}
                         </ul>

                    </div>
                    <div className="navbar-end gap-8">
                         <button className="hover:text-primary hidden lg:inline">
                              <FiSearch size={22}></FiSearch>
                         </button>
                         <button className="hover:text-primary hidden lg:inline">
                              <FiHeart size={22}></FiHeart>
                         </button>
                         <button className="hover:text-primary">
                              <FiShoppingBag size={22}></FiShoppingBag>
                         </button>
                         {/* menu open close button */}
                         <div className="flex justify-center items-center lg:hidden">
                              <button
                                   className="text-2xl font-extrabold transition-all duration-500"
                                   onClick={() => setOpen(!open)}
                              >
                                   {open ? <RxCross2 /> : <RiMenuUnfold2Fill />}
                              </button>
                         </div>
                    </div>
               </div>
               {/*Menu Box */}
               {
                    <motion.div
                         variants={menuVariants}
                         initial="closed"
                         animate={open ? "open" : "closed"}
                         className="lg:hidden overflow-hidden absolute top-20 w-full border-b border-neutral-700 bg-base-100"
                    >
                         <motion.ul className="py-10 px-6 flex flex-col gap-8 text-xl font-medium">
                              {links?.map((item, index) => (
                                   <motion.li
                                        key={index}
                                        variants={itemVariants}
                                        className="flex items-center gap-3 hover:text-primary cursor-pointer"
                                        onClick={() => setOpen(false)}
                                   >
                                        {item.icon && item.icon}
                                        {item.name}
                                   </motion.li>
                              ))}
                         </motion.ul>
                    </motion.div>
               }
          </div>
     );
};

export default Navbar;