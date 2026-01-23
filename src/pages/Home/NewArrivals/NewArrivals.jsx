import { FaArrowRightLong } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router-dom";

// const products = [
//      {
//           id: 1,
//           title: "Black T-Shirt",
//           price: "1200 BDT",
//           image: "/src/assets/category/black-tshirt.webp",
//      },
//      {
//           id: 2,
//           title: "Red Hoodie",
//           price: "2500 BDT",
//           image: "/src/assets/category/Hoodies.webp",
//      },
//      {
//           id: 3,
//           title: "Blue Jeans",
//           price: "1800 BDT",
//           image: "/src/assets/category/pants.webp",
//      },
//      {
//           id: 4,
//           title: "White Sweatshirt",
//           price: "2000 BDT",
//           image: "/src/assets/category/winter.webp",
//      },
//      {
//           id: 5,
//           title: "Grey Hoodie",
//           price: "2400 BDT",
//           image: "/src/assets/category/grey-hoodie.webp",
//      },
//      {
//           id: 6,
//           title: "Black Joggers",
//           price: "1500 BDT",
//           image: "/src/assets/category/black-joggers.webp",
//      },
//      {
//           id: 7,
//           title: "Green T-Shirt",
//           price: "1300 BDT",
//           image: "/src/assets/category/green-tshirt.webp",
//      },
//      {
//           id: 8,
//           title: "Brown Jacket",
//           price: "3500 BDT",
//           image: "/src/assets/category/brown-jacket.webp",
//      },
// ];

const products = [
     {
          id: 1,
          category: "T-SHIRTS",
          title: "ESSENTIAL OVERSIZED TEE",
          price: 850,
          oldPrice: 1200,
          discount: "-29%",
          image: "/src/assets/category/OVERSIZED-TEE.webp.jpg",
          isNew: true,
     },
     {
          id: 2,
          category: "HOODIES",
          title: "STEALTH HOODIE",
          price: 2200,
          oldPrice: 2800,
          discount: "-21%",
          image: "/src/assets/category/stealth-hoodie.webp.jpg",
          isNew: true,
     },
     {
          id: 3,
          category: "PANTS",
          title: "Blue Jeans",
          price: 1600,
          image: "/src/assets/category/blue-jeans.webp",
          isNew: true,
     },
     {
          id: 4,
          category: "HOODIES",
          title: "MIDNIGHT HOODIE",
          price: 2400,
          image: "/src/assets/category/winter.webp",
          isNew: true,
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

const NewArrivals = () => {
     return (
          <section className="py-20 bg-secondary">
               <motion.div className="xl:max-w-[75%] mx-auto px-5 md:px-10">
                    {/* Section Header */}
                    <motion.div
                         initial={{ opacity: 0, y: 40 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8 }}
                         className="flex flex-col gap-6 md:flex-row md:justify-between md:items-end mb-16">
                         <section className="space-y-4 md:space-y-6">
                              <h4 className="text-primary font-medium uppercase tracking-[6px]">Just Dropped</h4>
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
                         viewport={{ once: false }}
                         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                         {products?.map((product) => (
                              <motion.div
                                   variants={cardVariants}
                                   key={product.id} className="group cursor-pointer">
                                   {/* Image Container */}
                                   <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a] rounded-sm">
                                        <img
                                             src={product.image}
                                             alt={product.title}
                                             className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105 group-active:scale-105"
                                        />
                                        {/* Badges */}
                                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                                             {product.isNew && (
                                                  <span className="bg-secondary/90 backdrop-blur-lg text-accent rounded-sm text-[10px] font-semibold px-2.5 py-1.5 uppercase">
                                                       New
                                                  </span>
                                             )}
                                        </div>
                                        {/* discount badges */}
                                        {product.discount && (
                                             <div className="absolute top-3 right-3">
                                                  <span className="bg-primary text-accent text-[11px] rounded-sm font-bold px-2.5 py-1.5">
                                                       {product.discount}
                                                  </span>
                                             </div>
                                        )}
                                        {/* Wishlist Icon */}
                                        <button className="absolute top-12 right-3 p-2 bg-secondary/85 backdrop-blur-lg rounded-full text-accent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 hover:bg-primary/90 hover:text-accent active:bg-primary/90 active:text-accent hover:scale-115 active:scale-115">
                                             <FiHeart size={16} />
                                        </button>
                                        {/* Quick Add Button */}
                                        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-400 ease-out">
                                             <button className="w-full bg-primary hover:bg-primary/85 active:bg-primary/85 cursor-pointer text-accent font-semibold py-3 flex items-center justify-center gap-2 text-sm uppercase tracking-widest transition-all">
                                                  <FiShoppingBag /> Quick Add
                                             </button>
                                        </div>
                                   </div>
                                   {/* Product Info */}
                                   <div className="mt-5 space-y-1.5">
                                        <p className="text-neutral-500 text-[12px] font-bold tracking-widest uppercase">
                                             {product.category}
                                        </p>
                                        <h3 className="text-sm font-semibold tracking-tight uppercase group-hover:text-primary group-active:text-primary transition-colors">
                                             {product.title}
                                        </h3>
                                        <div className="flex items-center gap-3 mt-2">
                                             <span className="text-lg font-semibold">
                                                  ৳{product.price}
                                             </span>
                                             {product.oldPrice && (
                                                  <span className="text-neutral-500 line-through text-sm">
                                                       ৳{product.oldPrice}
                                                  </span>
                                             )}
                                        </div>
                                   </div>
                              </motion.div>
                         ))}
                    </motion.div >
               </motion.div>
          </section>
     );
};

export default NewArrivals;