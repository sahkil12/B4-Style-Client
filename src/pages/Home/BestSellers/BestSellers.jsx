import { motion } from "motion/react";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ProductCard from "../../../utils/ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";

const bestSellers = [

     {
          id: 1,
          category: "PANTS",
          title: "STREET FIT DENIM",
          price: 1700,
          oldPrice: 2100,
          image: "/src/assets/category/blue-jeans.webp",
          badge: "Hot",
     },
     {
          id: 2,
          category: "T-SHIRTS",
          title: "SIGNATURE OVERSIZED TEE",
          price: 950,
          oldPrice: 1300,
          image: "/src/assets/category/OVERSIZED-TEE.webp.jpg",
          badge: "Best Seller",
     },
     {
          id: 3,
          category: "HOODIES",
          title: "ESSENTIAL WINTER HOODIE",
          price: 2400,
          image: "/src/assets/category/winter.webp",
          badge: "Popular",
     },
     {
          id: 4,
          category: "HOODIES",
          title: "URBAN CORE HOODIE",
          price: 2600,
          image: "/src/assets/category/stealth-hoodie.webp.jpg",
          badge: "Trending",
     },
];

const containerVariants = {
     hidden: {},
     show: {
          transition: {
               staggerChildren: 0.15,
          },
     },
};

const cardVariants = {
     hidden: { opacity: 0, y: 30 },
     show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const BestSellers = () => {
     return (
          <section className="py-20 bg-secondary">
               <motion.div className="xl:max-w-[75%] mx-auto px-5 md:px-10">
                    {/* Header */}
                    <motion.div
                         initial={{ opacity: 0, y: 40 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8 }}
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
                         viewport={{ once: false }}
                         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                         {bestSellers?.map((product) => (
                              <ProductCard
                                   key={product.id}
                                   product={product}
                                   animation={cardVariants}
                                   top={'top-3'}
                              ></ProductCard>
                         ))}
                    </motion.div>
               </motion.div>
          </section>
     );
};

export default BestSellers;
