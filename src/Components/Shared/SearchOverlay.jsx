import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const SearchOverlay = ({ isOpen, onClose }) => {
     const categories = ["T-Shirts", "Hoodies", "Pants", "Winter"];
     const [searchCategory, setSearchCategory] = useState('')

     return (
          <AnimatePresence >
               {isOpen && (
                    <motion.div
                         initial={{ opacity: 0, y: -40 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -35 }}
                         transition={{ duration: .35, ease: "easeInOut" }}
                         className="fixed inset-0 z-[100] bg-base-100/95 backdrop-blur-md flex flex-col items-center pt-24 px-6 min-h-screen"
                    >
                         {/* Close Button */}
                         <button
                              onClick={onClose}
                              className="absolute top-10 right-10 text-accent hover:text-primary transition-all duration-200 active:text-primary"
                         >
                              <FiX size={32} />
                         </button>
                         {/* Search Input Area */}
                         <div className="w-full max-w-5xl">
                              <div className="flex items-center gap-4 mb-5">
                                   <FiSearch size={26} className="text-accent" />
                                   <input
                                        autoFocus
                                        value={searchCategory}
                                        type="text"
                                        placeholder="SEARCH PRODUCTS..."
                                        className="w-full bg-transparent text-accent text-2xl md:text-4xl font-medium bebas tracking-widest outline-none placeholder:text-neutral-400 cursor-pointer"
                                   />
                              </div>
                              {/* Red Underline */}
                              <div className="w-full h-[2px] bg-primary"></div>
                              {/* Middle Content */}
                              <div className="mt-14 text-center">
                                   <p className="text-neutral-400 text-sm uppercase tracking-widest mb-8">
                                        Start typing to search for products...
                                   </p>
                                   {/* Suggestion Tags */}
                                   <div className="flex flex-wrap justify-center gap-3">
                                        {categories.map((item, index) => (
                                             <button
                                                  key={index}
                                                  onClick={() => setSearchCategory(item)}
                                                  className="px-6 py-3 bg-base-200 text-accent text-xs font-bold rounded-full hover:bg-primary transition-all duration-300"
                                             >
                                                  {item}
                                             </button>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </motion.div>
               )}
          </AnimatePresence >
     );
};

export default SearchOverlay;