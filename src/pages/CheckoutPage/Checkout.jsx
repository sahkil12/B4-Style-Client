import { motion } from 'framer-motion';
import { FiChevronLeft, FiLock, FiCreditCard } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Checkout = () => {
     // Demo Order Items
     const orderItems = [
          { id: 2, title: "Sherpa Lined Jacket", size: "S", price: 4200, qty: 1, image: "/assets/category/winter.webp" },
          { id: 3, title: "Slim Fit Chinos", size: "28", price: 1400, qty: 1, image: "/assets/category/blue-jeans.webp" },
     ];

     const subtotal = orderItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
     const shipping = 0; // Free Shipping
     const total = subtotal + shipping;

     // Common Input Styling
     const inputClasses = "w-full bg-base-200 border border-accent/10 rounded-lg py-4 px-4 focus:border-primary/80 outline-none transition-all text-accent placeholder:text-neutral-500/80";
     const labelClasses = "block text-[10px] font-bold uppercase tracking-widest mb-2 text-neutral-400";

     return (
          <div className="min-h-screen bg-base-100 text-accent p-2.5 mt-20 sm:p-6">
               <div className="xl:max-w-[75%] mx-auto py-6 md:py-10">
                    {/* Back Button & Title */}
                    <div className="mb-12">
                         <Link to="/cart" className="flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors mb-8 text-sm font-medium group">
                              <FiChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                              Back to Cart
                         </Link>
                         <h1 className="text-4xl md:text-5xl bebas tracking-wider uppercase">Checkout</h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                         {/* --- Left Column: Forms (8 Cols) --- */}
                         <div className="lg:col-span-8 space-y-8">
                              {/* Section 1: Contact Information */}
                              <div className="bg-base-200/70 p-6 md:p-8 rounded-xl border border-accent/15">
                                   <h2 className="text-xl border-b border-accent/5 pb-4 font-medium bebas tracking-[2.5px] mb-4">Contact Information</h2>
                                   <input type="email" placeholder="Enter your email" className={inputClasses} />
                              </div>

                              {/* Section 2: Shipping Address */}
                              <div className="bg-base-200/70 p-6 md:p-8 rounded-xl border border-accent/15">
                                   <h2 className="text-xl font-medium bebas tracking-[2.5px] mb-6 border-b border-accent/5 pb-4">Delivery Address</h2>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                             <label className={labelClasses}>First Name</label>
                                             <input type="text" placeholder="First Name" className={inputClasses} />
                                        </div>
                                        <div className="space-y-2">
                                             <label className={labelClasses}>Last Name</label>
                                             <input type="text" placeholder="Last Name" className={inputClasses} />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                             <label className={labelClasses}>Address</label>
                                             <input type="text" placeholder="Your Present Address" className={inputClasses} />
                                        </div>
                                        {/* <div className="md:col-span-2 space-y-2">
                                             <label className={labelClasses}>Apartment, suite, etc. (optional)</label>
                                             <input type="text" placeholder="Apartment, suite, unit etc." className={inputClasses} />
                                        </div> */}
                                        <div className="space-y-2">
                                             <label className={labelClasses}>City</label>
                                             <input type="text" placeholder="City" className={inputClasses} />
                                        </div>
                                        <div className="space-y-2">
                                             <label className={labelClasses}>Phone Number</label>
                                             <input type="tel" placeholder="Phone Number" className={inputClasses} />
                                        </div>
                                   </div>
                              </div>

                              {/* Section 3: Payment demo --- (use stripe card)*/}
                              <div className="bg-base-200/70 p-6 md:p-8 rounded-xl border border-accent/15">
                                   <div className="flex justify-between items-center mb-6 border-b border-accent/5 pb-4">
                                        <h2 className="text-xl font-medium bebas tracking-[2.5px] ">Payment</h2>
                                        <div className="flex items-center gap-2 text-[10px] text-neutral-500 font-bold uppercase tracking-widest">
                                             <FiLock className="text-primary" /> Secure Checkout
                                        </div>
                                   </div>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="md:col-span-2 space-y-2">
                                             <label className={labelClasses}>Card Number</label>
                                             <div className="relative">
                                                  <input type="text" placeholder="0000 0000 0000 0000" className={`${inputClasses} pl-12`} />
                                                  <FiCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={20} />
                                             </div>
                                        </div>
                                        <div className="space-y-2">
                                             <label className={labelClasses}>MM / YY</label>
                                             <input type="text" placeholder="MM/YY" className={inputClasses} />
                                        </div>
                                        <div className="space-y-2">
                                             <label className={labelClasses}>CVV</label>
                                             <input type="text" placeholder="123" className={inputClasses} />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                             <label className={labelClasses}>Name on Card</label>
                                             <input type="text" placeholder="Full Name" className={inputClasses} />
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* --- Right Column: Order Summary (4 Cols) --- */}
                         <div className="lg:col-span-4 sticky top-28">
                              <div className="bg-base-200/70 p-6 md:p-8 rounded-sm border border-accent/5 space-y-6">
                                   <h2 className="text-sm font-bold uppercase tracking-[3px] border-b border-accent/5 pb-4">Order Summary</h2>

                                   {/* Scrollable Product List */}
                                   <div className="max-h-[400px] overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                                        {orderItems.map((item) => (
                                             <div key={item.id} className="flex gap-4 items-center">
                                                  <div className="relative w-20 h-24 bg-secondary rounded-sm overflow-hidden flex-shrink-0">
                                                       <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                                       <span className="absolute -top-1 -right-1 bg-primary text-accent text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                                            {item.qty}
                                                       </span>
                                                  </div>
                                                  <div className="flex-1 min-w-0">
                                                       <h4 className="text-xs font-bold uppercase truncate tracking-wider">{item.title}</h4>
                                                       <p className="text-[10px] text-neutral-500 mt-1 font-bold">SIZE: {item.size}</p>
                                                       <p className="text-sm font-bold mt-2">৳{item.price.toFixed(2)}</p>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>

                                   {/* Totals Section */}
                                   <div className="pt-6 border-t border-accent/5 space-y-3">
                                        <div className="flex justify-between text-sm text-neutral-400">
                                             <span>Subtotal</span>
                                             <span className="font-bold text-accent">৳{subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-neutral-400">
                                             <span>Shipping</span>
                                             <span className="text-green-500 font-bold uppercase text-[10px] tracking-widest">Free</span>
                                        </div>
                                        <div className="flex justify-between text-xl font-bold pt-4 border-t border-accent/5">
                                             <span className="bebas tracking-widest">Total</span>
                                             <span className="text-primary">৳{total.toFixed(2)}</span>
                                        </div>
                                   </div>

                                   {/* Payment Button */}
                                   <button className="w-full bg-primary text-accent font-bold py-5 rounded-sm uppercase tracking-[3px] hover:bg-primary/90 transition-all active:scale-[0.98] shadow-lg shadow-primary/10">
                                        Pay ৳{total.toFixed(2)}
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Checkout;