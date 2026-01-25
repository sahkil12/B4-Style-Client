import { useEffect, useState } from "react";
import { FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { motion } from "motion/react"
import { Link, NavLink } from "react-router-dom";
import SearchOverlay from "../Shared/SearchBar/SearchOverlay";
import logo from '../../../public/assets/Others/b4-style-logo.png'

const links = [
     { name: "HOME", to: '/' },
     { name: "SHOP", to: '/shop' },
     { name: "ABOUT", to: '/about' },
     { name: "CONTACT", to: '/contact' },
     { name: "WISHLIST", icon: <FiHeart />, to: '/wishlist' },
];

const menuVariants = {
     closed: {
          height: 0,
          opacity: 0,
          transition: {
               duration: 0.5,
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
               duration: 0.12,
               ease: "easeOut",
          },
     },
};

const Navbar = () => {
     const [open, setOpen] = useState(false)
     const [scrolled, setScrolled] = useState(false)
     const [isSearchOpen, setIsSearchOpen] = useState(false);

     useEffect(() => {
          const handleScrolled = () => {
               setScrolled(window.scrollY > 50);
          };

          window.addEventListener("scroll", handleScrolled);
          return () => {
               window.removeEventListener("scroll", handleScrolled);
          };
     }, [])

     return (
          <motion.div
               initial={{ opacity: 0, y: -15 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, ease: "easeIn", }}
               className={`fixed top-0 py-2 left-0 border-b w-full z-50 transition-all duration-300
                     ${scrolled
                         ? "bg-base-100/95 backdrop-blur-xl border-neutral-800"
                         : "bg-transparent border-transparent "
                    }`}>
               <div className="navbar md:max-w-[75%] mx-auto px-3">
                    <div className="navbar-start">
                         <NavLink to={'/'}>
                              <img src={logo} className="h-12" alt="B4 Style Logo" />
                         </NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="flex gap-10 text-sm">
                              {links
                                   .filter(item => !item.icon)
                                   .map((item, index) => (
                                        <li key={index}>
                                             <NavLink to={item.to}
                                                  className={({ isActive }) => `
                                                  relative tracking-widest cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full
                                             ${isActive ? "after:w-full text-primary font-extrabold" : "after:w-0 hover:after:w-full font-normal"}
                                                  `}
                                             >
                                                  {item.name}
                                             </NavLink>
                                        </li>
                                   ))}
                         </ul>
                    </div>
                    <div className="navbar-end gap-6">
                         <button
                              onClick={() => setIsSearchOpen(true)}
                              className="hover:text-primary transition-colors"
                         >
                              <FiSearch size={22} />
                         </button>
                         <Link to={'/wishlist'} className="hover:text-primary hidden lg:inline">
                              <FiHeart size={22}></FiHeart>
                         </Link>
                         <Link to={'/cart'} className="hover:text-primary active:text-primary">
                              <FiShoppingBag size={22}></FiShoppingBag>
                         </Link>
                         {/* menu open close button */}
                         <div className="flex justify-center items-center lg:hidden">
                              <button
                                   className="text-2xl font-extrabold transition-all duration-500 cursor-pointer"
                                   onClick={() => setOpen(!open)}
                              >
                                   {open ? <RxCross2 /> : <RiMenuFill />}
                              </button>
                         </div>
                         <SearchOverlay
                              isOpen={isSearchOpen}
                              onClose={() => setIsSearchOpen(false)}
                         />
                    </div>

               </div>
               {/*Menu Box */}
               {<motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate={open ? "open" : "closed"}
                    className="lg:hidden overflow-hidden absolute top-20 w-full border-b border-neutral-700 bg-base-100"
               >
                    <motion.ul className="py-10 px-6 flex flex-col gap-8 text-lg font-medium">
                         {links.map((item, index) => (
                              <motion.li
                                   key={index}
                                   variants={itemVariants}
                                   onClick={() => setOpen(false)}
                              >
                                   <NavLink
                                        to={item.to}
                                        className={({ isActive }) =>
                                             `flex items-center gap-3 tracking-widest transition-colors duration-200 hover:text-accent
                                                  ${isActive ? "text-primary" : "text-white/80"}`
                                        }
                                   >
                                        {item.icon && item.icon}
                                        {item.name}
                                   </NavLink>
                              </motion.li>
                         ))}
                    </motion.ul>

               </motion.div>
               }
          </motion.div>
     );
};

export default Navbar;