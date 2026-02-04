import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import ProductCard from "../../../utils/ProductCard";
import { containerVariants, cardVariants } from "../../../utils/CardAnimation";
import useProducts from "../../../Hooks/useProducts";
import ProductSkeleton from "../../../Components/Shared/ProductSkeleton/ProductSkeleton";

const NewArrivals = () => {
     // get newest products
     const { data: products = [], isLoading, error } = useProducts({ isNew: true })

     return (
          <section className="py-20 bg-secondary">
               <motion.div className="xl:max-w-[75%] mx-auto px-5 md:px-10">
                    {/* Section Header */}
                    <motion.div
                         initial={{ opacity: 0, y: 40 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.7 }}
                         className="flex flex-col gap-6 md:flex-row md:justify-between md:items-end mb-16">
                         <section className="space-y-4 md:space-y-6">
                              <h4 className="text-primary font-medium uppercase tracking-[5px]">Just Dropped</h4>
                              <h2 className="text-4xl md:text-6xl bebas tracking-wider">
                                   New Arrivals
                              </h2>
                         </section>
                         <NavLink
                              to="/shop"
                              className="text-sm flex items-center gap-2 md:text-base font-medium hover:text-primary transition-all duration-300 hover:translate-x-1 active:text-primary active:translate-x-1 group"
                         >
                              View All
                              <FaArrowRightLong className="transition-all duration-300 group-hover:translate-x-1 group-active:translate-x-1" />
                         </NavLink>
                    </motion.div>
                    {/* Products Grid */}
                    <motion.div
                         variants={containerVariants}
                         initial='hidden'
                         whileInView='show'
                         viewport={{ once: true }}
                         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                         {isLoading &&
                              Array.from({ length: 4 }).map((_, ind) => (
                                   <ProductSkeleton key={ind}></ProductSkeleton>
                              ))
                         }
                         {!isLoading &&
                              products?.slice(0, 4)?.map((product) => (
                                   <ProductCard
                                        key={product._id}
                                        product={product}
                                        animation={cardVariants}
                                   >
                                   </ProductCard>
                              ))}
                         {!isLoading && products?.length === 0 && (
                              <p className="text-center col-span-full text-lg md:text-2xl text-accent/70">
                                   No Products found.
                              </p>
                         )}
                         {
                              error && <p className="text-center col-span-full text-xl font-medium text-primary my-10">Error fetching products</p>
                         }
                    </motion.div >
               </motion.div>
          </section>
     );
};

export default NewArrivals;