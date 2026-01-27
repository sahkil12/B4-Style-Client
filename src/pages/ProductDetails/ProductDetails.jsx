import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingBag, FiMinus, FiPlus, FiChevronLeft, FiTruck, FiShield, FiRotateCcw } from 'react-icons/fi';
import ProductCard from '../../utils/ProductCard';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {

     const { id } = useParams()
     const products = useLoaderData()
     // State for interactions
     const [selectedSize, setSelectedSize] = useState('M');
     const [quantity, setQuantity] = useState(1);

     const product = products?.filter(p => p.id == id)[0]
     // Demo Data for "You May Also Like"
     const relatedProducts = products
          .filter(p => p.category === product.category && p.id !== product.id)
          .slice(0, 3);

     const handleQuantity = (type) => {
          if (type === 'inc') setQuantity(prev => prev + 1);
          if (type === 'dec' && quantity > 1) setQuantity(prev => prev - 1);
     };

     return (
          <div className="min-h-screen text-accent pt-20 pb-20">
               <div className="xl:max-w-[75%] pt-8 mx-auto px-5">
                    {/* Back Button */}
                    <Link to={'/'} className="flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors mb-8 group active:text-center">
                         <FiChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                         <span className="text-sm font-medium">Back to Shop</span>
                    </Link>
                    {/* Main Product Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                         {/* Left Side: Image */}
                         <motion.div
                              initial={{ opacity: 0, x: -30 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="relative bg-[#1a1a1a] rounded-sm overflow-hidden aspect-[3/4]"
                         >
                              <img
                                   src={product?.image}
                                   alt={product?.title}
                                   className="w-full h-full hover:scale-110 transition-all duration-300 object-cover"
                              />
                              <div className="absolute top-6 left-6 flex flex-col gap-3">
                                   {product?.isNew && (
                                        <span className="bg-primary text-accent text-[11px] font-bold px-4 py-2 uppercase tracking-widest">New</span>
                                   )}
                                   {product?.discount && (
                                        <span className="bg-accent text-base-100 text-xs font-bold px-4 py-2 uppercase tracking-widest">{product?.discount}</span>
                                   )}
                              </div>
                         </motion.div>

                         {/* Right Side: Details */}
                         <motion.div
                              initial={{ opacity: 0, x: 30 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="flex flex-col justify-start"
                         >
                              <p className="text-primary font-semibold tracking-[3px] text-sm mb-4 uppercase">{product?.category}</p>
                              <h1 className="text-4xl md:text-5xl bebas tracking-wider mb-6 leading-tight">{product?.title}</h1>
                              {/*  */}
                              <div className="flex items-center gap-4 mb-8">
                                   <span className="text-3xl font-bold text-accent">৳{product?.price}</span>
                                   {
                                        product?.oldPrice && (
                                             <span className="text-neutral-500 line-through text-xl font-medium">৳{product?.oldPrice}</span>
                                        )
                                   }
                                   {
                                        product?.discount && (
                                             <span className="bg-primary/15 text-primary text-sm font-bold px-4 py-2 rounded-full">{product?.discount}</span>
                                        )
                                   }
                              </div>
                              {/*  */}
                              <p className="text-neutral-400 text-sm leading-relaxed mb-10 max-w-md">
                                   {product?.description}
                              </p>
                              {/* Size Selection */}
                              <div className="mb-8">
                                   <h4 className="text-base font-medium bebas tracking-[2.5px] mb-4">Select Size</h4>
                                   <div className="flex gap-3">
                                        {product?.sizes?.map(size => (
                                             <button
                                                  key={size}
                                                  onClick={() => setSelectedSize(size)}
                                                  className={`w-12 h-12 flex items-center justify-center border font-bold rounded-md text-sm transition-all
                                            ${selectedSize === size ? 'bg-primary text-accent border-primary' : 'border-accent/15 text-accent hover:border-accent'}`}
                                             >
                                                  {size}
                                             </button>
                                        ))}
                                   </div>
                              </div>

                              {/* Quantity & Actions */}
                              <div className="space-y-6">
                                   <h4 className="text-base font-medium bebas tracking-[2.5px] mb-4">Quantity</h4>
                                   <div className="flex flex-wrap items-center gap-4">
                                        {/* quantity button */}
                                        <div className="flex items-center border border-accent/10 h-14">
                                             <button onClick={() => handleQuantity('dec')} className="px-5 hover:text-primary transition-colors"><FiMinus /></button>
                                             <span className="w-10 text-center font-bold">{quantity}</span>
                                             <button onClick={() => handleQuantity('inc')} className="px-5 hover:text-primary transition-colors"><FiPlus /></button>
                                        </div>
                                        {/* add to card button */}
                                        <button className="flex-1 min-w-[200px] h-14 bg-primary text-accent font-bold text-sm sm:text-base uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary/90 transition-all active:scale-95">
                                             <FiShoppingBag size={18} /> Add to Cart
                                        </button>

                                        <button className="w-14 h-14 border border-accent/10 flex items-center justify-center hover:bg-primary hover:text-accent transition-all">
                                             <FiHeart size={20} />
                                        </button>
                                   </div>
                              </div>

                              {/* Trust Badges */}
                              <div className="mt-12 pt-8 border-t border-accent/10 space-y-4">
                                   <div className="flex items-center gap-4 text-neutral-300/85">
                                        <FiTruck className="text-primary" />
                                        <span className="text-xs font-medium">Free delivery across Bangladesh on orders over ৳2000</span>
                                   </div>
                                   <div className="flex items-center gap-4 text-neutral-300/85">
                                        <FiShield className="text-primary" />
                                        <span className="text-xs font-medium">Secure payment - Cash on Delivery available</span>
                                   </div>
                                   <div className="flex items-center gap-4 text-neutral-300/85">
                                        <FiRotateCcw className="text-primary" />
                                        <span className="text-xs font-medium">Easy 7-day return policy</span>
                                   </div>
                              </div>
                         </motion.div>
                    </div>
                    {/* You May Also Like Section */}
                    <section className="mt-32">
                         <div className="flex flex-col gap-4 mb-12">
                              <h2 className="text-3xl md:text-4xl bebas tracking-wider">You May Also Like</h2>
                              <div className="h-1 w-24 bg-primary"></div>
                         </div>
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                              {relatedProducts?.map(item => (
                                   <ProductCard key={item?.id} product={item} />
                              ))}
                         </div>
                    </section>
               </div>
          </div>
     );
};

export default ProductDetails;