import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineTrash, HiMinus, HiPlus } from 'react-icons/hi';
import { IoClose } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const AddCart = () => {
     return (
          <div className="min-h-screen bg-base-100 text-accent p-4 mt-20 sm:p-6">
               <div className="xl:max-w-[75%] mx-auto py-5">
                    {/* Page Title */}
                    <h1 className="bebas text-4xl md:text-5xl mb-10 tracking-wider">
                         SHOPPING CART
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                         {/* Left Side: Cart Items */}
                         <div className="lg:col-span-8 space-y-4">
                              {/* Item Card */}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   className="bg-base-200/70 border border-accent/10 rounded-lg p-3 sm:p-5 flex gap-3 sm:gap-5 relative"
                              >
                                   {/* Product Image */}
                                   <div className="w-24 h-24 md:w-32 md:h-32 bg-accent/50 rounded-md overflow-hidden flex items-center justify-center">
                                        <img
                                             src="https://i.ibb.co.com/fG4rTLsr/stealth-hoodie-webp.jpg"
                                             alt="Midnight Hoodie"
                                             loading='lazy'
                                             className="object-cover w-full h-full"
                                        />
                                   </div>
                                   {/* Product Info */}
                                   <div className="flex-1 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                             <div>
                                                  <h3 className="uppercase text-sm mb-1.5 sm:text-lg font-semibold tracking-wider">Midnight Hoodie</h3>
                                                  <p className="text-neutral-400 text-sm font-medium">Size: S</p>
                                             </div>
                                             <button className="text-accent hover:text-primary transition-colors">
                                                  <IoClose size={24} />
                                             </button>
                                        </div>
                                        {/*  */}
                                        <div className="flex justify-between items-center gap-1.5  mt-4">
                                             {/* Quantity Controller */}
                                             <div className="flex items-center border border-accent/20 rounded-md overflow-hidden">
                                                  <button className="p-2 hover:bg-accent/10 transition-colors"><HiMinus size={14} /></button>
                                                  <span className="px-4 py-1 text-sm font-bold">1</span>
                                                  <button className="p-2 hover:bg-accent/10 transition-colors"><HiPlus size={14} /></button>
                                             </div>
                                             {/* Price */}
                                             <p className="font-semibold text-base md:text-xl">$2400.00</p>
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                         {/* Right Side: Order Summary */}
                         <div className="lg:col-span-4">
                              <motion.div
                                   initial={{ opacity: 0, x: 20 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   className="bg-base-200/70 border border-accent/10 rounded-lg p-6"
                              >
                                   <h2 className="bebas text-2xl mb-6 tracking-wider">ORDER SUMMARY</h2>

                                   <div className="space-y-4 text-sm font-medium">
                                        <div className="flex justify-between">
                                             <span className="text-neutral-400">Subtotal</span>
                                             <span>$2400.00</span>
                                        </div>
                                        <div className="flex justify-between border-b border-accent/10 pb-4">
                                             <span className="text-neutral-400">Shipping</span>
                                             <span className="text-green-500">Free</span>
                                        </div>

                                        <div className="flex justify-between items-center pt-2">
                                             <span className="font-semibold text-lg">Total</span>
                                             <span className="font-semibold text-lg">$2400.00</span>
                                        </div>
                                   </div>
                                   {/* Checkout Button */}
                                   <button className="bg-primary py-2.5 sm:py-3 w-full mt-8 rounded-xs text-xs sm:text-sm tracking-widest flex font-semibold items-center justify-center gap-2 group">
                                        PROCEED TO CHECKOUT
                                        <span className="group-hover:translate-x-1 transition-transform"><FaArrowRightLong size={15}/></span>
                                   </button>

                                   <button className="w-full text-center text-gray-400 hover:text-accent transition-colors text-sm mt-4 underline underline-offset-4">
                                        Continue Shopping
                                   </button>
                              </motion.div>
                         </div>

                    </div>
               </div>
          </div>
     );
};

export default AddCart;