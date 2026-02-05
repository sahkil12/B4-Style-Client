import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiFilter, FiX, FiChevronDown } from 'react-icons/fi';
import ProductCard from '../../utils/ProductCard';
import { shopContainerVariants, shopCardVariants } from './../../utils/CardAnimation';
import useProducts from '../../Hooks/useProducts';
import ProductSkeleton from '../../Components/Shared/ProductSkeleton/ProductSkeleton';

const categories = [
     { label: "All Products", value: "" },
     { label: "T-Shirts", value: "T-SHIRTS" },
     { label: "Hoodies", value: "HOODIES" },
     { label: "Pants", value: "PANTS" },
     { label: "Shirts", value: "SHIRTS" },
     { label: "Winter Wear", value: "WINTER WEAR" }
];
const sizes = ["S", "M", "L", "XL", "XXL", 32, 34, 36, 38];

const Shop = () => {

     const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
     // use hooks to reuseable filter
     const [filters, setFilters] = useState({
          category: "",
          size: "",
          search: "",
          sort: "newest"
     })
     const { data: products = [], isLoading, error } = useProducts({
          category: filters?.category,
          size: filters?.size,
          search: filters?.search,
          sort:
               filters?.sort === "Price: Low to High" ? "priceLow"
                    :
                    filters?.sort === "Price: High to Low" ? "priceHigh"
                         : "newest"
     })

     return (
          <div className="min-h-screen text-accent pb-20">
               <div className="">
                    {/* heading title section */}
                    <header className=" mb-12 bg-secondary mt-[81px] text-center">
                         <motion.section
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: .6, ease: "easeOut" }}
                              viewport={{ once: true }}
                              className='py-14'>
                              <h4 className="text-primary text-xs md:text-[15px] font-semibold tracking-[0.35em] uppercase mb-5">
                                   browse and shop
                              </h4>
                              <h2 className="text-5xl md:text-6xl font-medium tracking-wider bebas mb-5">
                                   Shop All
                              </h2>
                              <p className="text-neutral-400 text-sm md:text-base max-w-2xl px-6 mx-auto leading-relaxed">
                                   Discover our complete collection of premium streetwear. From everyday essentials to statement pieces.
                              </p>
                         </motion.section>
                    </header>
                    {/*  */}
                    <div className="flex xl:max-w-[75%] mx-auto px-3 sm:p-6 flex-col lg:flex-row gap-10">
                         {/* --- Sidebar (Desktop) --- */}
                         <aside className="hidden lg:block w-64 space-y-10">
                              {/* Categories */}
                              <div>
                                   <h3 className="text-2xl font-medium bebas tracking-[3.5px] mb-4 border-b border-accent/10 pb-2.5">Categories</h3>
                                   <ul className="space-y-3">
                                        {categories?.map(cat => (
                                             <li
                                                  key={cat.label}
                                                  onClick={() => setFilters(prev => ({
                                                       ...prev,
                                                       category: cat?.value
                                                  }))}
                                                  className={`cursor-pointer transition-all duration-300 hover:pl-2 p-2 rounded-md font-semibold ${filters?.category === cat?.value ? 'bg-primary/90 font-bold' : 'text-neutral-300 hover:bg-accent/10'}`}
                                             >
                                                  {cat?.label}
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                              {/* Sizes */}
                              <div>
                                   <h3 className="text-2xl font-medium bebas tracking-[3.5px] mb-4 border-b border-accent/10 pb-2.5">Size</h3>
                                   <div className="grid grid-cols-4 gap-2">
                                        {sizes?.map(size => (
                                             <button
                                                  key={size}
                                                  onClick={() => setFilters(prev => ({
                                                       ...prev,
                                                       size: prev.size === size ? "" : size
                                                  }))
                                                  }
                                                  className={`h-10 rounded-md border flex items-center justify-center text-sm font-bold transition-all
                                                   ${filters?.size === size ? 'bg-primary border-primary text-accent' : 'border-white/15 hover:border-primary'}`}
                                             >
                                                  {size}
                                             </button>
                                        ))}
                                   </div>
                              </div>
                         </aside>
                         {/* --- Main Content Area --- */}
                         <main className="flex-1">
                              {/* Toolbar: Search & Sort */}
                              <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
                                   <div className="relative w-full md:w-[420px]">
                                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                                        <input
                                             type="text"
                                             placeholder="Search products..."
                                             value={filters?.search}
                                             onChange={(e) =>
                                                  setFilters(prev => ({
                                                       ...prev,
                                                       search: e.target.value
                                                  }))
                                             }
                                             className="w-full bg-[#1a1a1a] border border-accent/10 rounded-sm py-3 pl-12 pr-4 focus:border-primary outline-none transition-all"
                                        />
                                   </div>

                                   <div className="flex items-center gap-3 w-full md:w-auto">
                                        {/* Mobile Filter Toggle */}
                                        <button
                                             onClick={() => setIsMobileFilterOpen(true)}
                                             className="lg:hidden flex-1 flex items-center justify-center gap-2 bg-[#1a1a1a] border border-accent/10 py-3 px-6 rounded-sm"
                                        >
                                             <FiFilter /> Filter
                                        </button>
                                        {/* sort by */}
                                        <div className="relative flex-1 md:flex-none">
                                             <select
                                                  value={filters?.sort}
                                                  onChange={(e) =>
                                                       setFilters(prev => ({
                                                            ...prev,
                                                            sort: e.target.value
                                                       }))
                                                  }
                                                  className="w-full appearance-none bg-[#1a1a1a] border border-accent/10 py-3 px-6 pr-10 rounded-sm outline-none focus:border-primary cursor-pointer"
                                             >
                                                  <option>Newest</option>
                                                  <option>Price: Low to High</option>
                                                  <option>Price: High to Low</option>
                                             </select>
                                             <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                        </div>
                                   </div>
                              </div>
                              {/* Product Grid */}
                              <motion.div
                                   variants={shopContainerVariants}
                                   initial="hidden"
                                   animate="show"
                                   key={filters?.category + filters?.size + filters?.search}
                                   className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
                              >
                                   {isLoading &&
                                        Array.from({ length: 9 }).map((_, ind) => (
                                             <ProductSkeleton key={ind}></ProductSkeleton>
                                        ))
                                   }
                                   {!isLoading && products?.map(product => (
                                        <ProductCard
                                             key={product._id}
                                             product={product}
                                             animation={shopCardVariants}
                                        />
                                   ))}
                                   {products?.length < 1 && (
                                        <div className="py-30 col-span-full text-center space-y-4">
                                             <h3 className="text-3xl font-medium bebas tracking-wider">No Products Found</h3>
                                             <button
                                                  onClick={() => {
                                                       setFilters({
                                                            category: "",
                                                            size: "",
                                                            search: "",
                                                            sort: "Newest"
                                                       });
                                                  }}
                                                  className="text-primary cursor-pointer tracking-wide underline"
                                             >
                                                  Clear all filters
                                             </button>
                                        </div>
                                   )}
                                   {
                                        error && <p className="text-center col-span-full text-xl font-medium text-primary my-20">Error fetching products</p>
                                   }
                              </motion.div>
                         </main>
                    </div>
               </div >
               {/* --- Mobile Filter Drawer --- */}
               < AnimatePresence >
                    {isMobileFilterOpen && (
                         <>
                              <motion.div
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   exit={{ opacity: 0 }}
                                   onClick={() => setIsMobileFilterOpen(false)}
                                   className="fixed inset-0 bg-base-100/80 backdrop-blur-sm z-[90] lg:hidden"
                              />
                              <motion.div
                                   initial={{ x: "100%" }}
                                   animate={{ x: 0 }}
                                   exit={{ x: "100%" }}
                                   transition={{ type: "tween", duration: 0.3 }}
                                   className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-secondary 
                                   z-[100] p-5 sm:p-8 shadow-2xl lg:hidden"
                              >
                                   {/* header */}
                                   <div className="flex justify-between items-center mb-10">
                                        <h2 className="text-2xl bebas tracking-widest">Filters</h2>
                                        <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 bg-white/5 active:bg-primary rounded-full">
                                             <FiX size={24} />
                                        </button>
                                   </div>
                                   {/* main content */}
                                   <div className="space-y-10">
                                        <div>
                                             <h3 className="text-sm font-bold uppercase tracking-[3px] mb-4 text-primary">Category</h3>
                                             <div className="flex flex-wrap gap-2">
                                                  {categories?.map((cat, idx) => (
                                                       <button
                                                            key={idx}
                                                            onClick={() => setFilters(prev => ({
                                                                 ...prev,
                                                                 category: cat.value
                                                            }))}
                                                            className={`px-4 py-2 text-xs border rounded-full font-normal duration-100 transition-all ${filters?.category === cat.value ? 'bg-primary border-primary' : 'border-accent/10'}`}
                                                       >
                                                            {cat.label}
                                                       </button>
                                                  ))}
                                             </div>
                                        </div>

                                        <div>
                                             <h3 className="text-sm font-bold uppercase tracking-[3px] mb-4 text-primary">Size</h3>
                                             <div className="grid grid-cols-4 gap-2">
                                                  {sizes?.map(size => (
                                                       <button
                                                            key={size}
                                                            onClick={() => setFilters(prev => ({
                                                                 ...prev,
                                                                 size: prev.size === size ? "" : size
                                                            }))}
                                                            className={`h-10 border rounded-md flex items-center justify-center text-xs font-bold ${filters.size === size ? 'bg-primary border-primary' : 'border-white/10'}`}
                                                       >
                                                            {size}
                                                       </button>
                                                  ))}
                                             </div>
                                        </div>
                                        {/*  */}
                                        <button
                                             onClick={() => setIsMobileFilterOpen(false)}
                                             className="w-full bg-primary py-3 uppercase font-bold tracking-widest mt-10"
                                        >
                                             Apply Filters
                                        </button>
                                   </div>
                              </motion.div>
                         </>
                    )}
               </AnimatePresence >
          </div >
     );
};

export default Shop;