import { motion } from 'motion/react';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';

const ProductCard = ({ product, animation, top }) => {
     return (
          <motion.div
               variants={animation}
               className="group cursor-pointer">
               {/* Image Container */}
               <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a] rounded-sm hover:-translate-y-2 transition-all duration-200 ease-in-out">
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
                    {
                         product.badge && (
                              < span className="absolute top-3 left-3 bg-primary/90 backdrop-blur-xl text-accent text-[11px] font-bold px-3 py-1.5 uppercase tracking-wider rounded-sm">
                                   {product.badge}
                              </span>
                         )
                    }
                    {/* Wishlist Icon */}
                    <button className={`absolute ${top} right-3 p-2 bg-secondary/85 backdrop-blur-lg rounded-full text-accent sm:opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-primary/90 hover:text-accent active:bg-primary/90 active:text-accent hover:scale-115 active:scale-115`}>
                         <FiHeart size={16} />
                    </button>
                    {/* Quick Add Button */}
                    <div className="absolute bottom-0 left-0 w-full p-2.5 sm:p-4 translate-y-0 sm:translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                         <button className="w-full bg-primary hover:bg-primary/90 active:bg-primary/90 cursor-pointer text-accent font-semibold py-3 flex items-center justify-center gap-2 text-sm uppercase tracking-widest transition-all">
                              <FiShoppingBag /> Quick Add
                         </button>
                    </div>
               </div>
               {/* Product Info */}
               <div className="p-4 space-y-1.5 rounded-b-2xl">
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
          </motion.div >
     );
};

export default ProductCard;