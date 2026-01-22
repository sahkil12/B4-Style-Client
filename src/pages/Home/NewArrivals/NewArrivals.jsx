// NewArrivals.jsx
import { motion } from "motion/react";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const products = [
     {
          id: 1,
          title: "Black T-Shirt",
          price: "1200 BDT",
          image: "/src/assets/category/black-tshirt.webp",
     },
     {
          id: 2,
          title: "Red Hoodie",
          price: "2500 BDT",
          image: "/src/assets/category/Hoodies.webp",
     },
     {
          id: 3,
          title: "Blue Jeans",
          price: "1800 BDT",
          image: "/src/assets/category/pants.webp",
     },
     {
          id: 4,
          title: "White Sweatshirt",
          price: "2000 BDT",
          image: "/src/assets/category/winter.webp",
     },
     {
          id: 5,
          title: "Grey Hoodie",
          price: "2400 BDT",
          image: "/src/assets/category/grey-hoodie.webp",
     },
     {
          id: 6,
          title: "Black Joggers",
          price: "1500 BDT",
          image: "/src/assets/category/black-joggers.webp",
     },
     {
          id: 7,
          title: "Green T-Shirt",
          price: "1300 BDT",
          image: "/src/assets/category/green-tshirt.webp",
     },
     {
          id: 8,
          title: "Brown Jacket",
          price: "3500 BDT",
          image: "/src/assets/category/brown-jacket.webp",
     },
];

const NewArrivals = () => {
     return (
          <section className="py-14 bg-secondary">
               <div className="xl:max-w-[75%] mx-auto px-5">
                    {/* Section Header */}
                    <div className="flex justify-between items-center mb-10">
                         <section>
                              <h4>Just Dropped</h4>
                              <h2 className="text-3xl md:text-4xl font-bold bebas text-accent">
                                   New Arrivals
                              </h2>
                         </section>
                         <NavLink
                              to="/shop"
                              className="text-sm md:text-base font-medium hover:text-primary transition-all duration-300"
                         >
                              View All
                         </NavLink>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                         {products.slice(0, 8).map((product) => (
                              <motion.div
                                   key={product.id}
                                   whileHover={{ scale: 1.03 }}
                                   className="group bg-base-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                              >
                                   <div className="relative">
                                        <img
                                             src={product.image}
                                             alt={product.title}
                                             className="w-full h-56 object-cover"
                                        />
                                        {/* Hover Icons */}
                                        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                             <button className="p-2 bg-white rounded-full shadow hover:bg-primary hover:text-accent">
                                                  <FiHeart size={18} />
                                             </button>
                                             <button className="p-2 bg-white rounded-full shadow hover:bg-primary hover:text-accent">
                                                  <FiShoppingBag size={18} />
                                             </button>
                                        </div>
                                   </div>
                                   <div className="p-4 flex flex-col gap-2">
                                        <h3 className="font-medium text-base md:text-lg">{product.title}</h3>
                                        <p className="text-sm md:text-base font-semibold text-accent">{product.price}</p>
                                   </div>
                              </motion.div>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default NewArrivals;
