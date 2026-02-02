import { motion } from "motion/react";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ProductCard from "../../../utils/ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { containerVariants, cardVariants } from "../../../utils/CardAnimation";


const BestSellers = () => {
     const [bestSellers, setBestSellers] = useState([])

     useEffect(() => {
          fetch('/products.json')
               .then(res => res.json())
               .then(data => {
                    setBestSellers(data)
               })
     }, [])

     return (
          <section className="py-20 bg-secondary">
               <motion.div className="xl:max-w-[75%] mx-auto px-5 md:px-10">
                    {/* Header */}
                    <motion.div
                         initial={{ opacity: 0, y: 40 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.7 }}
                         className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
                    >
                         <div className="space-y-4 md:space-y-6">
                              <div className="flex items-center gap-2 text-primary font-medium uppercase tracking-[5px]">
                                   <FaFire />
                                   Most Popular
                              </div>
                              <h2 className="text-4xl md:text-6xl bebas tracking-wider">
                                   Best Sellers
                              </h2>
                         </div>

                         <NavLink
                              to="/shop"
                              className="text-sm flex items-center gap-2 md:text-base font-medium hover:text-primary transition-all duration-300 hover:translate-x-1 active:text-primary active:translate-x-1 group"
                         >
                              Shop All
                              <FaArrowRightLong className="transition-all duration-300 group-hover:translate-x-1 group-active:translate-x-1" />
                         </NavLink>
                    </motion.div>

                    {/* Products */}
                    <motion.div
                         variants={containerVariants}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true }}
                         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                         {bestSellers?.slice(5, 9)?.map((product) => (
                              <ProductCard
                                   key={product.id}
                                   product={product}
                                   animation={cardVariants}
                              ></ProductCard>
                         ))}
                    </motion.div>
               </motion.div>
          </section>
     );
};

export default BestSellers;
