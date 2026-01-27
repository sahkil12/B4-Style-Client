import { motion } from 'motion/react';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, animation }) => {
     return (
          <Link to={`/product/${product.id}`}>
               <motion.div
                    variants={animation}
                    className="group cursor-pointer">
                    {/* Image Container */}
                    <div className="relative aspect-[6/6] overflow-hidden rounded-sm transition-all duration-200 ease-in-out">
                         <img
                              src={product.image}
                              alt={product.title}
                              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105 group-active:scale-105"
                         />
                         {/* Badges */}
                         <div className="absolute top-4 left-3 flex flex-col gap-3">
                              {product.isNew && (
                                   <span className="bg-secondary/90 backdrop-blur-lg text-accent rounded-sm text-[10px] font-semibold px-3 py-2 uppercase">
                                        New
                                   </span>
                              )}
                              {product.discount && (
                                   <span className="bg-primary text-accent text-[10px] rounded-sm font-bold px-3 py-1.5">
                                        {product.discount}
                                   </span>
                              )}
                              {
                                   product.badge && (
                                        < span className="bg-primary/90 backdrop-blur-xl text-accent text-[10px] font-bold px-3 py-2 uppercase tracking-wider rounded-sm">
                                             {product?.badge}
                                        </span>
                                   )
                              }
                         </div>
                         {/* Wishlist Icon */}
                         <button className={`absolute top-4 right-3 p-2.5 bg-secondary/85 md:opacity-0 group-hover:opacity-100 rounded-full transition-all duration-200 hover:bg-primary/90 active:bg-primary/90 cursor-pointer text-accent hover:scale-115 active:scale-115`}>
                              <FiHeart size={16} />
                         </button>
                         {/* Quick Add Button */}
                         <div className="absolute bottom-0 left-0 w-full p-2.5 sm:p-3 translate-y-0 sm:translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-out">
                              <button className="w-full bg-primary hover:bg-primary/90 active:bg-primary/90 cursor-pointer text-accent font-semibold py-2.5 flex items-center justify-center gap-2 text-xs uppercase tracking-widest transition-all">
                                   <FiShoppingBag /> Quick Add
                              </button>
                         </div>
                    </div>
                    {/* Product Info */}
                    <div className="p-4 space-y-1.5 rounded-b-xl bg-secondary">
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
          </Link>
     );
};

export default ProductCard;