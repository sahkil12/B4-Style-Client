import { useEffect, useState } from "react";
import { FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { motion } from "motion/react"
import { Link, NavLink } from "react-router-dom";
import SearchOverlay from "../../Shared/SearchBar/SearchOverlay";
import logo from '../../../../public/assets/Others/b4-style-logo.webp'
import useAuth from "../../../Hooks/useAuth";
import AuthLink from "./AuthLink";
import DesktopLinks from "./DesktopLinks";
import { menuVariants, itemVariants, navLinks } from "../../../utils/NavbarLinks";
import useWishlist from "../../../Hooks/useWishlist";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
     const [open, setOpen] = useState(false)
     const [scrolled, setScrolled] = useState(false)
     const [isSearchOpen, setIsSearchOpen] = useState(false);
     const { user } = useAuth()
     const { wishlistCount } = useWishlist()
     const { cartQuantity } = useCart()

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
               transition={{ duration: 0.3, ease: "easeIn", }}
               className={`fixed top-0 py-2 left-0 border-b w-full z-50 transition-all duration-300
                     ${scrolled
                         ? "bg-base-100/95 md:backdrop-blur-xl border-neutral-900"
                         : "bg-transparent border-transparent"
                    }`}>
               <div className="navbar w-full xl:max-w-[75%] mx-auto px-3">
                    <div className="navbar-start">
                         <NavLink to={'/'}>
                              <img src={logo} loading="eager" className="h-12" alt="B4 Style Logo" />
                         </NavLink>
                    </div>
                    <div className="navbar-center hidden lg:inline">
                         <DesktopLinks links={navLinks}>
                         </DesktopLinks>
                    </div>
                    <div className="navbar-end gap-7">
                         <button
                              aria-label="Search"
                              onClick={() => setIsSearchOpen(true)}
                              className="hover:text-primary transition-colors cursor-pointer"
                         >
                              <FiSearch size={22} />
                         </button>
                         {/* wishlist icon button */}
                         <div className="indicator hidden lg:inline">
                              <Link
                                   aria-label="Wishlist"
                                   to={'/wishlist'}
                                   className="hover:text-primary ">
                                   <FiHeart size={22}></FiHeart>
                              </Link>
                              {wishlistCount > 0 && (
                                   <motion.span
                                        key={wishlistCount}
                                        className="badge badge-sm bg-primary text-accent -top-1.5 -right-0.5 w-6 h-6 indicator-item rounded-full"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 0.20 }}
                                   >
                                        {wishlistCount}
                                   </motion.span>
                              )}
                         </div>
                         {/* cart icon button*/}
                         <div className="indicator">
                              <Link
                                   title="Cart"
                                   to={'/cart'}
                                   className="hover:text-primary active:text-primary">
                                   <FiShoppingBag size={22}></FiShoppingBag>
                              </Link>
                              {cartQuantity > 0 && (
                                   <motion.span
                                        key={cartQuantity}
                                        className="badge badge-sm bg-primary text-accent -top-1.5 -right-0.5 w-6 h-6 indicator-item rounded-full"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 0.2 }}
                                   >
                                        {cartQuantity}
                                   </motion.span>
                              )}
                         </div>
                         {
                              user && (
                                   <Link
                                        to={'/dashboard'}
                                        aria-label="Search"
                                        className="hover:text-primary transition-colors cursor-pointer"
                                   >
                                        <LuLayoutDashboard size={22} />
                                   </Link>
                              )
                         }
                         {/* reuseable desktop auth link*/}
                         <AuthLink user={user} className="hover:text-primary active:text-primary hidden lg:flex items-center gap-2"></AuthLink>
                         {/* menu open close button */}
                         <div className="flex items-center lg:hidden">
                              <button
                                   aria-label="Mobile menu toggle"
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
                         {navLinks?.map((item, index) => (
                              <motion.li
                                   key={index}
                                   variants={itemVariants}
                              >
                                   <NavLink
                                        to={item?.to}
                                        onClickCapture={() => setOpen(false)}
                                        className={({ isActive }) =>
                                             `flex items-center gap-3 tracking-widest transition-colors duration-200 hover:text-accent ${item.wishlist ? 'indicator' : ''}
                                                  ${isActive ? "text-primary" : "text-accent/80"}`
                                        }
                                   >
                                        {item.icon && item.icon}
                                        {item.name}
                                        {item.wishlist &&
                                             <span className={`${wishlistCount > 0 ? '' : 'hidden'} badge badge-sm font-extrabold bg-primary text-accent top-1 -right-4 w-7 h-7 indicator-item rounded-full`}>{wishlistCount}</span>
                                        }
                                   </NavLink>
                              </motion.li>
                         ))}
                         {/* auth link */}
                         <motion.li
                              initial={{ opacity: 0, y: 25 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false }}
                              transition={{ duration: 0.4, delay: 0.5 }}
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