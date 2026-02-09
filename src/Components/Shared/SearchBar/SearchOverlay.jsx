import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import SearchCard from "./SearchCard";
import useProducts from "../../../Hooks/useProducts";
import { useQueryClient } from "@tanstack/react-query";
import { searchSkelton } from './../../../utils/Skelton';

const SearchOverlay = ({ isOpen, onClose }) => {
     const [searchText, setSearchText] = useState('')
     const queryClient = useQueryClient()

     const { data: products = [], isLoading, error } = useProducts(
          { search: searchText },
          !!searchText
     )

     const handleClose = () => {
          queryClient.removeQueries({ queryKey: ["products"] })
          setSearchText("")
          onClose()
     }

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
                              onClick={handleClose}
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
                                        value={searchText}
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
                                   {isLoading ? (
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                                             {Array(8).fill(0).map((_, idx) => (
                                                  <div key={idx}>{searchSkelton}</div>
                                             ))}
                                        </div>
                                   ) : error ? (
                                        <p className="text-center text-red-500 mt-20">
                                             Something went wrong! Please try again.
                                        </p>
                                   ) : searchText ? (
                                        products?.length > 0 ? (
                                             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                                                  {products?.map((product) => (
                                                       <SearchCard key={product?._id} product={product} onClose={onClose} />
                                                  ))}
                                             </div>
                                        ) : (
                                             <p className="text-center text-neutral-500 mt-20">
                                                  No products found for "{searchText}"
                                             </p>
                                        )
                                   ) : (
                                        <p className="text-center text-xl sm:text-2xl mt-16 text-neutral-400">
                                             Search To Find Your Products...
                                        </p>
                                   )}
                              </div>
                         </div>
                    </motion.div>
               )}
          </AnimatePresence >
     );
};

export default SearchOverlay;