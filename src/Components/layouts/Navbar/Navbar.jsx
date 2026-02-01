import { useEffect, useState } from "react";
import { FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { motion } from "motion/react"
import { Link, NavLink } from "react-router-dom";
import SearchOverlay from "../../Shared/SearchBar/SearchOverlay";
import logo from '../../../../public/assets/Others/b4-style-logo.png'
import UseAuth from "../../../Hooks/UseAuth";
import AuthLink from "./AuthLink";
import DesktopLinks from "./DesktopLinks";

const links = [
     { name: "HOME", to: '/' },
     { name: "SHOP", to: '/shop' },
     { name: "ABOUT", to: '/about' },
     { name: "CONTACT", to: '/contact' },
     { name: "WISHLIST", icon: <FiHeart />, to: '/wishlist' },
];
// animation file
const menuVariants = {
     closed: {
          height: 0,
          opacity: 0,
          transition: {
               duration: 0.6,
               ease: "easeInOut",
          },
     },
     open: {
          height: "auto",
          opacity: 1,
          transition: {
               duration: 0.32,
               ease: "easeOut",
               when: "beforeChildren",
               staggerChildren: 0.15,
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
     const { user } = UseAuth()

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
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.4, ease: "easeIn", }}
               className={`absolute border top-0 py-2 left-0 border-b w-full z-50 transition-all duration-300
                     ${scrolled
                         ? "bg-base-100/95 backdrop-blur-xl border-neutral-800"
                         : "bg-transparent border-transparent"
                    }`}>
               <div className="navbar w-full xl:max-w-[75%] mx-auto px-3">
                    <div className="navbar-start">
                         <NavLink to={'/'}>
                              <img src={logo} className="h-12" alt="B4 Style Logo" />
                         </NavLink>
                    </div>
                    <div className="navbar-center hidden lg:inline">
                         <DesktopLinks links={links}>
                         </DesktopLinks>
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
                         {/* reuseable desktop auth link*/}
                         <AuthLink user={user} className="hover:text-primary active:text-primary hidden lg:flex items-center gap-2"></AuthLink>
                         {/* menu open close button */}
                         <div className="flex items-center lg:hidden">
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
               {/*mobile Menu Box */}
               {<motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate={open ? "open" : "closed"}
                    className="lg:hidden overflow-hidden absolute top-20 w-full border-b border-neutral-700 bg-base-100"
               >
                    <motion.ul className="py-10 px-6 flex flex-col gap-8 text-lg font-medium">
                         {links?.map((item, index) => (
                              <motion.li
                                   key={index}
                                   variants={itemVariants}
                              >
                                   <NavLink
                                        to={item?.to}
                                        onClickCapture={() => setOpen(false)}
                                        className={({ isActive }) =>
                                             `flex items-center gap-3 tracking-widest transition-colors duration-200 hover:text-accent
                                                  ${isActive ? "text-primary" : "text-accent/80"}`
                                        }
                                   >
                                        {item.icon && item.icon}
                                        {item.name}
                                   </NavLink>
                              </motion.li>
                         ))}
                         {/* auth link */}
                         <motion.li
                              initial={{ opacity: 0, y: 25 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false }}
                              transition={{ duration: 0.45, delay: 0.6 }}
                              className="border-t pt-4 border-accent/40"
                         >
                              <AuthLink
                                   user={user}
                                   onClick={() => setOpen(false)}
                                   className="hover:text-primary active:text-primary">
                              </AuthLink>
                         </motion.li>
                    </motion.ul>
               </motion.div>
               }
          </motion.div>
     );
};

export default Navbar;