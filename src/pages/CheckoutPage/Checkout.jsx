import { motion } from 'framer-motion';
import { FiChevronLeft, FiLock, FiCreditCard } from 'react-icons/fi';
import { Link, Navigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import UseAuth from '../../Hooks/UseAuth';
import { useEffect, useState } from 'react';
import { cartSkeleton } from '../../utils/Skelton';
import Loader from '../../../src/Components/Shared/Loader'
import { useForm } from 'react-hook-form';

const Checkout = () => {

     const cities = [
          { name: "Chittagong", shipping: 70 },
          { name: "Dhaka", shipping: 120 },
          { name: "Sylhet", shipping: 120 },
          { name: "Khulna", shipping: 120 },
          { name: "Rajshahi", shipping: 120 },
          { name: "Barishal", shipping: 120 },
          { name: "Rangpur", shipping: 120 },
          { name: "Mymensingh", shipping: 120 },
     ];
     const { cart, isCartLoading } = useCart()
     const { user } = UseAuth()
     const {
          register,
          handleSubmit,
          watch,
          formState: { errors }
     } = useForm()

     const [shipping, setShipping] = useState(0);
     const city = watch("city")

     useEffect(() => {
          const found = cities.find(c => c.name === city);
          setShipping(found?.shipping || 0);
     }, [city]);

     const subtotal = cart?.reduce(
          (sum, item) => sum + item?.product?.price * item?.quantity, 0
     ) || 0

     const total = subtotal + shipping;

     const isPayDisabled =
          !city ||
          cart.length === 0 ||
          isCartLoading;

     const onSubmit = (data) => {
          console.log("All valid data", data);
          // Stripe next step here
     };

     // Common Input Styling
     const inputClasses = "w-full bg-base-200 border border-accent/10 rounded-lg p-3.5 focus:border-primary/80 outline-none transition-all text-accent/80 placeholder:text-neutral-500/80";
     const labelClasses = "block text-[10px] font-semibold uppercase tracking-[2px] mb-2.5 text-neutral-400";

     if (cart?.length < 1) {
          return <Navigate to={'/'} replace></Navigate>
     }

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
                              <div className="bg-base-200/70 p-4 md:p-8 rounded-xl border border-accent/15">
                                   <h2 className="text-xl border-b border-accent/5 pb-4 font-medium bebas tracking-[2.5px] mb-4">Contact Information</h2>
                                   <div className="space-y-2">
                                        <label className={labelClasses}>Your Email</label>
                                        <input
                                             readOnly
                                             defaultValue={user?.email}
                                             {...register("email")}
                                             type="email"
                                             placeholder="Enter your email"
                                             className={inputClasses} />
                                   </div>
                              </div>
                              {/* Section 2: Shipping Address */}
                              <div className="bg-base-200/70 p-4 md:p-8 rounded-xl border border-accent/15">
                                   <h2 className="text-xl font-medium bebas tracking-[2.5px] mb-6 border-b border-accent/5 pb-4">Delivery Address</h2>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* first name */}
                                        <div className="space-y-2">
                                             <label className={labelClasses}>First Name</label>
                                             <input
                                                  {...register("firstName", {
                                                       required: "First name is required"
                                                  })}
                                                  className={inputClasses} />
                                             {
                                                  errors.firstName && (
                                                       <p className="text-primary/95 font-medium text-sm">
                                                            {errors.firstName.message}
                                                       </p>
                                                  )
                                             }
                                        </div>
                                        {/* last name */}
                                        <div className="space-y-2">
                                             <label className={labelClasses}>Last Name</label>
                                             <input
                                                  {...register("lastName")}
                                                  type="text"
                                                  placeholder="Last Name"
                                                  className={inputClasses} />
                                        </div>
                                        {/* address */}
                                        <div className="md:col-span-2 space-y-2">
                                             <label className={labelClasses}>Address</label>
                                             <input
                                                  {...register("address", {
                                                       required: "Address is required"
                                                  })}
                                                  className={inputClasses} />
                                             {
                                                  errors.address && (
                                                       <p className="text-primary/95 font-medium text-sm">
                                                            {errors.address.message}
                                                       </p>
                                                  )
                                             }
                                        </div>
                                        {/* city */}
                                        <div className="space-y-2">
                                             <label className={labelClasses}>City</label>
                                             <select
                                                  {...register("city",
                                                       {
                                                            required: "City is required"
                                                       })}
                                                  className={`select select-xl text-base w-full bg-base-200 border border-accent/10 rounded-lg focus:border-primary/80 outline-none transition-all text-accent/80 `}
                                             >
                                                  <option value="">Select City</option>
                                                  {cities?.map(city => (
                                                       <option key={city.name} value={city?.name}>
                                                            {city?.name}</option>
                                                  ))}
                                             </select>
                                             {
                                                  errors.city && (
                                                       <p className="text-primary/95 font-medium text-sm">
                                                            {errors.city.message}
                                                       </p>
                                                  )
                                             }
                                        </div>
                                        {/* phone number */}
                                        <div className="space-y-2">
                                             <label className={labelClasses}>Phone Number</label>
                                             <input
                                                  {...register("phone", {
                                                       required: "Phone number is required",
                                                       pattern: {
                                                            value: /^(01)[0-9]{9}$/,
                                                            message: "Enter a valid Bangladeshi phone number"
                                                       }
                                                  })}
                                                  type="tel"
                                                  placeholder="01XXXXXXXXX"
                                                  className={inputClasses} />
                                             {
                                                  errors.phone && (
                                                       <p className="text-primary/95 font-medium text-sm">
                                                            {errors.phone.message}
                                                       </p>
                                                  )
                                             }
                                        </div>
                                   </div>
                              </div>
                              {/* stripe added soon */}
                              <p className="text-xs text-neutral-500 mt-3">
                                   Stripe payment will be enabled shortly
                              </p>
                         </div>
                         {/* Right side card */}
                         <div className="lg:col-span-4 sticky top-24">
                              <div className="bg-base-200/70 p-4 md:p-8 rounded-xl border border-accent/10 space-y-6">
                                   <h2 className="text-xl font-medium bebas tracking-[3px] border-b border-accent/5 pb-4">Order Summary</h2>
                                   {/* Scrollable Product List */}
                                   <div className="max-h-[300px] overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                                        {
                                             isCartLoading && <>
                                                  {cartSkeleton}
                                                  {cartSkeleton}
                                             </>
                                        }
                                        {!isCartLoading && cart?.map((item) => (
                                             <div key={item._id} className="flex gap-4 items-center">
                                                  <div className="relative w-20 h-24 bg-secondary rounded-sm overflow-hidden flex-shrink-0">
                                                       <img src={item?.product?.images[0]} alt={item?.product?.slug} className="w-full h-full object-cover" />
                                                       <span className="absolute -top-0.5 -right-0.5 bg-primary text-accent text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                                            {item?.quantity}
                                                       </span>
                                                  </div>
                                                  <div className="flex-1 min-w-0">
                                                       <h4 className="text-xs font-bold uppercase truncate tracking-wider">{item?.product?.title}</h4>
                                                       <p className="text-[11px] text-neutral-400 mt-1 font-bold">SIZE: {item.size}</p>
                                                       <p className="text-sm font-bold mt-2.5">৳{item?.product?.price.toFixed(2)}</p>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                                   {/* Totals Section */}
                                   <div className="pt-6 border-t border-accent/10 space-y-4">
                                        <div className="flex justify-between text-sm md:text-[15px] text-neutral-400">

                                             <span>Subtotal</span>
                                             <span className="font-semibold text-accent">৳{subtotal.toFixed(2)}</span>
                                        </div>
                                        {/* delivery fee */}
                                        <div className="flex justify-between text-sm md:text-[15px] text-neutral-400">
                                             <span>Shipping</span>
                                             <span className="font-semibold text-accent">+{shipping.toFixed(2)}</span>
                                        </div>
                                        {/* delivery area  */}
                                        {city && (
                                             <div className="flex justify-between text-sm text-neutral-400">
                                                  <span>Delivery Area</span>
                                                  <span className="font-semibold text-emerald-700">{city}</span>
                                             </div>
                                        )}

                                        <div className="flex justify-between text-lg font-semibold pt-4 border-t border-accent/5">
                                             <span className="tracking-widest">Total</span>
                                             <span className="text-primary/90 font-bold">৳{total.toFixed(2)}</span>
                                        </div>
                                   </div>
                                   {/* Payment Button */}
                                   <button
                                        onClick={handleSubmit(onSubmit)}
                                        disabled={isPayDisabled}
                                        className={`w-full text-accent font-bold py-3 rounded-sm tracking-[1.5px] transition-all active:scale-[0.98]  
                                   ${isPayDisabled
                                                  ? "bg-neutral-700 cursor-not-allowed"
                                                  : "bg-primary hover:bg-primary/90 cursor-pointer"}
                                   `}>
                                        Pay ৳{total.toFixed(2)}
                                   </button>
                              </div>
                              {/* delivery policy */}
                              <div className="bg-primary/10 border border-primary/30 mt-5 p-4 rounded-xl flex flex-col gap-5">
                                   <div className="flex items-center gap-2 ">
                                        <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></div>
                                        <span className="text-[12px] text-primary/90 flex flex-wrap items-center gap-2 font-semibold uppercase tracking-widest">Chittagong District <p className='text-primary text-sm'>70৳</p></span>
                                   </div>
                                   <div className="flex items-center gap-2 ">
                                        <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></div>
                                        <span className="text-[12px] text-primary/90 flex flex-wrap items-center gap-2 font-semibold uppercase tracking-widest">Out Of Chittagong District <p className='text-primary text-sm'>120৳</p></span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Checkout;