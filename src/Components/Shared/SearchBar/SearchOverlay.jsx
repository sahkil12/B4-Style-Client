import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import SearchCard from "./SearchCard";

const SearchOverlay = ({ isOpen, onClose }) => {
     // const categories = ["T-Shirts", "Hoodies", "Pants", "Winter"];
     // const [searchCategory, setSearchCategory] = useState('')
     const [searchText, setSearchText] = useState('')

     const products = [
          {
               id: 1,
               category: "T-SHIRTS",
               title: "ESSENTIAL OVERSIZED TEE",
               price: 850,
               image: "/assets/category/OVERSIZED-TEE.webp.jpg",
          },
          {
               id: 2,
               category: "HOODIES",
               title: "STEALTH HOODIE",
               price: 2200,
               image: "/assets/category/stealth-hoodie.webp.jpg",
          },
          {
               id: 3,
               category: "PANTS",
               title: "Blue Jeans",
               price: 1600,
               image: "/assets/category/blue-jeans.webp",
          },
          {
               id: 4,
               category: "HOODIES",
               title: "MIDNIGHT HOODIE",
               price: 2400,
               image: "/assets/category/winter.webp",
          },
          {
               id: 12313,
               category: "T-SHIRTS",
               title: "ESSENTIAL OVERSIZED TEE",
               price: 850,
               image: "/assets/category/black-tshirt.webp",
          },
          {
               id: 2301,
               category: "HOODIES",
               title: "STEALTH HOODIE",
               price: 2200,
               image: "/assets/category/Hoodies.webp",
          },
          {
               id: 3123,
               category: "PANTS",
               title: "Blue Jeans",
               price: 1600,
               image: "/assets/category/pants.webp",
          },
          {
               id: 412,
               category: "HOODIES",
               title: "Black Hoodie",
               price: 2400,
               image: "/assets/category/Hoodies.webp",
          },
          {
               id: 3139,
               category: "T-SHIRTS",
               title: "Black Comfort T-Shirt",
               price: 850,
               image: "/assets/category/black-tshirt.webp",
          },
          {
               id: 123123,
               category: "PANTS",
               title: "Formal Pants",
               price: 1600,
               image: "/assets/category/pants.webp",
          },
     ];

     const filteredProducts = products.filter((product) => (
          product.title.toLowerCase().includes(searchText.toLowerCase())
          // product.category.toLowerCase().includes(searchText.toLowerCase())
     )
     );

     return (
          <AnimatePresence >
               {isOpen && (
                    <motion.div
                         initial={{ opacity: 0, y: -35 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -35, filter: "blur(4px)" }}
                         transition={{ duration: .35, ease: "easeInOut", }}
                         className="fixed inset-0 z-[100] bg-base-100/95 backdrop-blur-md flex flex-col items-center pt-20 sm:pt-24 px-2.5 md:px-6 min-h-screen"
                    >
                         {/* Close Button */}
                         <button
                              onClick={onClose}
                              className="absolute top-10 right-10 text-accent hover:text-primary transition-all duration-200 active:text-primary"
                         >
                              <FiX size={32} />
                         </button>
                         {/* Search Input Area */}
                         <div className="w-full max-w-7xl">
                              <div className="flex items-center gap-4 mb-4">
                                   <FiSearch size={26} className="text-accent" />
                                   <input
                                        autoFocus
                                        defaultValue={searchText}
                                        onChange={(e) => { setSearchText(e.target.value) }}
                                        type="text"
                                        placeholder="SEARCH PRODUCTS..."
                                        className="w-full bg-transparent text-accent text-2xl md:text-4xl font-medium bebas tracking-widest outline-none placeholder:text-neutral-400 cursor-pointer"
                                   />
                              </div>
                              {/* Red Underline */}
                              <div className="w-full h-[2px] bg-primary"></div>
                              {/* Results */}
                              <div className="mt-14 max-h-[75vh] overflow-y-auto">
                                   {searchText?  (
                                        filteredProducts.length > 0 ? (
                                             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                                                  {filteredProducts?.map((product) => (
                                                       <SearchCard
                                                            key={product.id}
                                                            product={product}
                                                       />
                                                  ))}
                                             </div>
                                        ) : (
                                             <p className="text-center text-neutral-500 mt-20">
                                                  No products found for "{searchText}"
                                             </p>
                                        )
                                   ) : <p className="text-center text-xl sm:text-2xl mt-16 text-neutral-400">Search To Find Your Products...</p> }
                              </div>

                              {/* Middle Content */}
                              {/* <div className="hidden mt-14 text-center">
                                   <p className="text-neutral-400 text-sm uppercase tracking-widest mb-8">
                                        Start typing to search for products...
                                   </p>
                                 
                                   <div className="flex flex-wrap justify-center gap-3">
                                        {categories.map((item, index) => (
                                             <button
                                                  key={index}
                                                  onClick={() => (
                                                       setSearchText(''),
                                                       setSearchText(item)
                                                  )}
                                                  className="px-6 py-3 bg-base-200 text-accent text-xs font-bold rounded-full hover:bg-primary transition-all duration-300 cursor-pointer"
                                             >
                                                  {item}
                                             </button>
                                        ))}
                                   </div>
                              </div> */}
                         </div>
                    </motion.div>
               )}
          </AnimatePresence >
     );
};

export default SearchOverlay;