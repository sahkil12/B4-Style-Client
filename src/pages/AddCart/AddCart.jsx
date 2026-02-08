import { motion } from 'framer-motion';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { FiShoppingBag } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import { MdDeleteForever } from 'react-icons/md';

const AddCart = () => {
     const {
          cart,
          isCartLoading,
          updateCartQuantity,
          removeCartItem,
          removeCartLoad,
          clearAllCart,
          clearCartLoading,
          updateCartQuantityLoading
     } = useCart()
     // total amount count
     const subtotal = cart?.reduce(
          (sum, item) => sum + item?.product?.price * item?.quantity, 0
     )

     return (
          <div className="min-h-[calc(100vh-200px)] bg-base-100 text-accent p-2.5 mt-20 sm:p-6">
               <div className="xl:max-w-[75%] mx-auto py-6 md:py-10">
                    {/* Page Title */}
                    {
                         cart?.length > 0 && (
                              <div className='flex items-end mb-12 justify-between'>
                                   <h1 className="bebas text-3xl sm:text-4xl md:text-5xl tracking-wider">
                                        SHOPPING CART
                                   </h1>
                                   {/*  */}
                                   <button
                                        onClick={() => clearAllCart.mutate()}
                                        className="flex items-center text-xs sm:text-sm font-semibold text-neutral-300 gap-1 hover:bg-primary hover:text-accent py-2 px-2.5 rounded-xs active:bg-primary active:text-accent transition-all duration-200 cursor-pointer"
                                        disabled={clearCartLoading}
                                   >
                                        <MdDeleteForever size={20} /> CLEAR ALL
                                   </button>
                              </div>
                         )
                    }
                    {/* main content */}
                    {cart?.length > 0 && (
                         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                              {/* Left Side: Cart Items */}
                              <div className="lg:col-span-8 space-y-4">
                                   {/* loading skelton */}
                                   {isCartLoading || clearCartLoading &&
                                        Array.from({ length: 3 }).map((_, idx) => (
                                             <div key={idx} className="animate-pulse h-36 flex gap-5 p-4 bg-accent/5 rounded-md shadow ">
                                                  <div className="w-28 rounded-sm bg-accent/15 "></div>
                                                  <div className="w-full flex justify-between gap-3 py-2">
                                                       <div className='w-full space-y-5'>
                                                            <div className="h-5 bg-accent/15 rounded w-3/8 "></div>
                                                            <div className="h-5 bg-accent/15 rounded w-3/12"></div>
                                                       </div>
                                                       <span className="h-7 rounded-full bg-accent/15 w-7"></span>
                                                  </div>
                                             </div>
                                        ))}
                                   {/* Item Card */}
                                   {!isCartLoading &&
                                        cart?.map((item, index) => (
                                             <motion.div
                                                  key={index}
                                                  initial={{ opacity: 0, y: 20 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ duration: .25, ease: "easeOut" }}
                                                  className="bg-base-200/70 border border-accent/10 rounded-lg p-3 sm:p-5 flex gap-3 sm:gap-5 relative"
                                             >
                                                  {/* Product Image */}
                                                  <div className="w-24 h-24 md:w-32 md:h-32 bg-accent/50 rounded-md overflow-hidden flex items-center justify-center">
                                                       <Link to={`/product/${item?.product._id}`}>
                                                            <img
                                                                 src={item?.product?.images[0]}
                                                                 alt={item?.product?.slug}
                                                                 loading='lazy'
                                                                 className="object-cover w-24 md:w-36 h-24 md:h-32"
                                                            />
                                                       </Link>
                                                  </div>
                                                  {/* Product Info */}
                                                  <div className="flex-1 flex flex-col justify-between">
                                                       <div className="flex justify-between items-start">
                                                            <div>
                                                                 <h3 className="uppercase text-sm mb-1.5 sm:text-lg font-semibold tracking-wider">{item?.product?.title}</h3>
                                                                 <p className="text-neutral-400 text-sm font-medium">Size: {item?.size}</p>
                                                            </div>
                                                            <button
                                                                 disabled={removeCartLoad}
                                                                 onClick={() => removeCartItem?.mutate(item?._id)}
                                                                 className="text-accent hover:text-primary active:text-primary cursor-pointer transition-colors">
                                                                 <IoClose size={24} />
                                                            </button>
                                                       </div>
                                                       {/*  */}
                                                       <div className="flex justify-between items-center gap-1.5  mt-4">
                                                            {/* Quantity Controller */}
                                                            <div className="flex items-center border border-accent/20 rounded-md overflow-hidden">
                                                                 <button
                                                                      disabled={updateCartQuantityLoading}
                                                                      onClick={() =>
                                                                           updateCartQuantity.mutate(
                                                                                { cartItemId: item?._id, type: "dec" }
                                                                           )}
                                                                      className="p-2 hover:bg-accent/10 active:bg-accent/10 transition-colors cursor-pointer">
                                                                      <HiMinus size={14} />
                                                                 </button>
                                                                 <span className="px-4 py-1 text-sm font-bold">{item?.quantity}</span>
                                                                 <button
                                                                      disabled={updateCartQuantityLoading || item?.quantity >= item?.product?.stock}
                                                                      onClick={() =>
                                                                           updateCartQuantity.mutate(
                                                                                { cartItemId: item?._id, type: "inc" }
                                                                           )}
                                                                      className={`p-2 transition-colors ${item?.quantity >= item?.product?.stock ? ' bg-primary/80 cursor-not-allowed' : 'hover:bg-accent/10 active:bg-accent/10 cursor-pointer'}`}>
                                                                      <HiPlus size={14} />
                                                                 </button>
                                                            </div>
                                                            {/* Price */}
                                                            <p className="font-semibold text-sm sm:text-base md:text-lg">৳ {item?.product?.price * item?.quantity} </p>
                                                       </div>
                                                  </div>
                                             </motion.div>
                                        ))
                                   }
                              </div>
                              {/* Right Side: Order Summary */}
                              <div className="lg:col-span-4">
                                   <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: .25, ease:"easeOut" }}
                                        className="bg-base-200/70 border border-accent/10 rounded-lg p-6"
                                   >
                                        <h2 className="bebas text-2xl mb-6 tracking-wider">ORDER SUMMARY</h2>

                                        <div className="space-y-4 text-sm font-medium">
                                             <div className="flex justify-between border-b border-accent/10 pb-8">
                                                  <span className="text-neutral-400">Subtotal</span>
                                                  <span>৳ {subtotal}.00</span>
                                             </div>
                                             <div className="flex justify-between items-center pt-2">
                                                  <span className="font-semibold text-lg">Total</span>
                                                  <span className="font-semibold text-lg">৳ {subtotal}.00</span>
                                             </div>
                                        </div>
                                        {/* Checkout Button */}
                                        <button className="bg-primary py-2.5 sm:py-3 w-full mt-8 rounded-xs text-xs sm:text-sm tracking-widest flex font-semibold items-center justify-center gap-2 group">
                                             PROCEED TO CHECKOUT
                                             <span className="group-hover:translate-x-1 transition-transform"><FaArrowRightLong size={15} /></span>
                                        </button>

                                        <button className="w-full text-center text-neutral-400 hover:text-accent transition-colors text-sm mt-4 underline underline-offset-4">
                                             <Link to={'/shop'}> Continue Shopping</Link>
                                        </button>
                                   </motion.div>
                              </div>
                         </div>
                    )}
                    {/* Empty State  */}
                    {!isCartLoading && cart.length === 0 && (
                         <div className="flex flex-col space-y-3 w-fit mx-auto text-center pt-20 col-span-full">
                              <span className="p-6 text-accent/70 bg-accent/10 rounded-full mx-auto mb-7"> < FiShoppingBag size={45} /> </span>
                              <h2 className="bebas tracking-wider text-2xl text-accent/90">Your Cart is Empty</h2>
                              <p className='text-neutral-400'>Looks like you haven't added anything yet.</p>
                              <Link to={'/shop'} className="py-2.5 group flex items-center font-semibold gap-2 w-fit mx-auto bg-primary mt-4 rounded-none px-10">
                                   GO SHOPPING <FaArrowRightLong className="group-hover:ml-1 transition-all duration-200" size={16} />
                              </Link>
                         </div>
                    )}
               </div>
          </div>
     );
};

export default AddCart;