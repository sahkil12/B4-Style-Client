import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FiX, FiPlus, FiImage } from 'react-icons/fi';
import { motion } from 'framer-motion';

const AddProductModal = ({ close }) => {
     const axiosSecure = useAxiosSecure();
     const queryClient = useQueryClient();
     const { register, handleSubmit, setValue, watch } = useForm({
          defaultValues: {
               isNew: false,
               isBestSeller: false
          }
     });

     const clothSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL',];
     const pantsSizes = [30, 32, 34, 36, 38, 40];
     const allSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '30', '32', '34', '36', '38', '40']

     const [selectedSizes, setSelectedSizes] = useState([]);
     const [category, setCategory] = useState("");

     let sizes = []

     if (category === "") {
          sizes = allSizes
     }
     else if (category === "Pants") {
          sizes = pantsSizes
     }
     else {
          sizes = clothSizes
     }

     const toggleSize = (size) => {
          if (selectedSizes.includes(size)) {
               setSelectedSizes(selectedSizes.filter(s => s !== size));
          } else {
               setSelectedSizes([...selectedSizes, size]);
          }
     };

     const onSubmit = async (data) => {
          const product = {
               title: data.title,
               slug: data.title,
               category: data.category,
               price: Number(data.price),
               discount: Number(data.discount),
               stock: Number(data.stock),
               description: data.description,
               sizes: selectedSizes,
               images: [data.imageUrl],
               isNew: data.isNew,
               isBestSeller: data.isBestSeller,
               createdAt: new Date()
          };

          console.log(product);

          try {
               await axiosSecure.post("/products", product);
               queryClient.invalidateQueries(["products"]);
               close();
          } catch (error) {
               console.error("Error adding product:", error);
          }
     };
     // Shared Tailwind Classes
     const labelStyle = "block text-[10px] font-bold uppercase tracking-widest mb-2 text-accent/70";
     const inputStyle = "w-full bg-base-200/85 border border-white/5 rounded-md py-3.5 px-4 focus:border-primary/50 outline-none transition-all text-sm text-accent placeholder:text-neutral-500";

     return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-base-100/75 backdrop-blur-sm p-2">
               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-secondary w-full max-w-2xl rounded-xl border-2 border-accent/10 overflow-hidden"
               >
                    {/* Header */}
                    <div className="flex justify-between items-center p-5 border-b border-accent/5">
                         <h3 className="text-xl font-medium tracking-wider bebas">ADD PRODUCT</h3>
                         <button onClick={close} className="text-accent/60 hover:text-primary active:text-primary cursor-pointer transition-colors">
                              <FiX size={22} />
                         </button>
                    </div>
                    {/* form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="p-5 md:p-8 space-y-5 max-h-[80vh] overflow-y-auto custom-scrollbar">
                         {/* Image Section */}
                         {/* <div className="flex items-center gap-6">
                              <div className="w-20 h-20 bg-base-200 rounded-lg flex items-center justify-center border border-dashed border-accent/10 text-accent/50">
                                   <FiImage size={30} />
                              </div>

                         </div> */}

                         {/* name & image row */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="flex-1 space-y-2">
                                   <label className={labelStyle}>Select Image</label>
                                   <input
                                        type='file'
                                        {...register("imageUrl")}
                                        className="border-2 w-full py-3 px-4 rounded-md bg-base-200/85 border-accent/10 focus:border-primary/35 border-dashed text-sm text-accent/80 outline-none"
                                   />
                              </div>
                              <div className="space-y-2">
                                   <label className={labelStyle}>Product Name *</label>
                                   <input {...register("title")} required placeholder="Enter product name" className={inputStyle} />
                              </div>

                         </div>
                         {/* stock & Category Row */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                   <label className={labelStyle}>Category *</label>
                                   <select
                                        onClick={(e) => setCategory(e.target.value)}
                                        {...register("category")} className={`w-full bg-base-200 border border-accent/5 rounded-md px-4 focus:border-primary/50 outline-none transition-all text-sm text-accent cursor-pointer select select-lg`}>
                                        <option value="">Select Category</option>
                                        <option className="hover:bg-primary">T-Shirts</option>
                                        <option className="hover:bg-primary">Hoodies</option>
                                        <option className="hover:bg-primary">Pants</option>
                                        <option className="hover:bg-primary">Shirts</option>
                                        <option className="hover:bg-primary">Winter Wear</option>
                                   </select>
                              </div>
                              <div className="space-y-2">
                                   <label className={labelStyle}>Stock *</label>
                                   <input {...register("stock")} required placeholder="Products Stock" className={inputStyle} />
                              </div>
                         </div>
                         {/* Price Row */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                   <label className={labelStyle}>Price (৳) *</label>
                                   <input type="number"
                                        {...register("price")}
                                        required
                                        placeholder="0"
                                        className={inputStyle} />
                              </div>
                              {/* discount  */}
                              <div className="space-y-2">
                                   <label className={labelStyle}>Discount</label>
                                   <input type="number"
                                        {...register("discount")}
                                        maxLength={2}
                                        placeholder="0"
                                        className={inputStyle} />
                              </div>
                         </div>
                         {/* Description */}
                         <div className="space-y-2">
                              <label className={labelStyle}>Description</label>
                              <textarea
                                   {...register("description")}
                                   rows="3"
                                   placeholder="Describe your product..."
                                   className={`${inputStyle} resize-none`}
                              ></textarea>
                         </div>
                         {/* Sizes Selection */}
                         <div className="space-y-2">
                              <label className={labelStyle}>Sizes</label>
                              <div className="flex flex-wrap gap-1.5">
                                   {sizes?.map(size => (
                                        <button
                                             key={size}
                                             type="button"
                                             onClick={() => toggleSize(size)}
                                             className={`w-10 h-10 rounded-md text-[10px] font-bold transition-all border ${selectedSizes.includes(size)
                                                  ? 'bg-primary border-primary text-accent'
                                                  : 'bg-base-100/35 border-accent/10 text-accent/70 hover:border-accent/20'
                                                  }`}
                                        >
                                             {size}
                                        </button>
                                   ))}
                              </div>
                         </div>
                         {/* Toggles */}
                         <div className="flex gap-3 sm:gap-6 pt-2">
                              <label className="flex items-center gap-3 cursor-pointer group">
                                   <input
                                        type="checkbox"
                                        {...register("isNew")}
                                        className="toggle bg-secondary border border-primary/50 toggle-primary toggle-sm"
                                   />
                                   <span className="text-[11px] font-black uppercase tracking-widest text-accent/60 group-hover:text-accent/90 transition-colors">New Arrival</span>
                              </label>
                              {/* best seller */}
                              <label className="flex items-center gap-3 cursor-pointer group">
                                   <input
                                        type="checkbox"
                                        {...register("isBestSeller")}
                                        className="toggle bg-secondary border border-primary/50 toggle-primary toggle-sm"
                                   />
                                   <span className="text-[11px] font-black uppercase tracking-widest text-accent/60 group-hover:text-accent/90 transition-colors">Trending</span>
                              </label>
                         </div>
                         {/* Action Buttons */}
                         <div className="flex justify-end gap-4 pt-2 md:pt-0">
                              <button
                                   type="button"
                                   onClick={close}
                                   className="py-3.5 border border-accent/20 px-5 rounded-md text-[11px] font-bold uppercase tracking-widest text-accent/80 hover:text-accent hover:bg-primary active:bg-primary cursor-pointer transition-colors"
                              >
                                   Cancel
                              </button>
                              <button
                                   type="submit"
                                   className="bg-primary text-accent py-3 md:py-3.5 px-5 md:px-7 rounded-md flex items-center justify-center gap-2 text-[10px] md:text-[11px] cursor-pointer font-bold uppercase tracking-widest transition-all"
                              >
                                   <FiPlus /> Add Product
                              </button>
                         </div>
                    </form>
               </motion.div>
          </div>
     );
};

export default AddProductModal;