import { useState } from "react";
import { FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
     const [open, setOpen] = useState(false)
     console.log(open);

     return (
          <div className="bg-secondary border-b border-neutral-700 shadow-sm py-2">
               <div className="navbar  max-w-10/12 mx-auto">
                    <div className="navbar-start">
                         <div>
                              <img src="/src/assets/b4-style-logo.png" className="h-12" alt="" />
                         </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1 gap-4 text-base font-medium ">
                              <li className="hover:text-primary"><a>Home</a></li>
                              <li className="hover:text-primary"><a>Shop</a></li>
                              <li className="hover:text-primary"><a>About</a></li>
                              <li className="hover:text-primary"><a>Contact</a></li>
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
                         {/*  */}

                         <div className="flex justify-center items-center">
                              {
                                   open ?
                                        <button className="text-2xl font-extrabold transition-all duration-500" onClick={() => setOpen(false)}>
                                             <RxCross2></RxCross2>
                                        </button> :
                                        <button className="text-2xl font-extrabold transition-all duration-500" onClick={() => setOpen(true)}>
                                             <RiMenuUnfold2Fill></RiMenuUnfold2Fill>
                                        </button>
                              }
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;