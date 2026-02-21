import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FiSearch, FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import Spinner from "../../../Components/Shared/Spinner";

const AllProducts = () => {
     const axiosSecure = useAxiosSecure();

     const { data: products = [], isLoading } = useQuery({
          queryKey: ["products"],
          queryFn: async () => {
               const res = await axiosSecure.get("/products");
               return res.data;
          }
     });

     if (isLoading) {
          return <Spinner></Spinner>
     }
     return (
          <div className="flex-1 p-4 md:p-12 bg-secondary min-h-screen text-accent">
               {/* Header Section */}
               <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
                    <div>
                         <h1 className="text-3xl font-bold uppercase tracking-wider bebas mb-1">Products</h1>
                         <p className="text-neutral-500 text-sm">{products?.length} total products</p>
                    </div>
                    <button className="bg-primary text-accent px-6 py-3 rounded-md flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                         <FiPlus size={18} /> Add Product
                    </button>
               </div>

               {/* Filter & Search Bar */}
               <div className="flex flex-wrap items-center gap-4 mb-8">
                    <div className="relative flex-1 min-w-[300px]">
                         <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                         <input
                              type="text"
                              placeholder="Search products..."
                              className="w-full bg-[#1a1a1a] border border-white/5 rounded-lg py-3 pl-12 pr-4 outline-none focus:border-primary/50 transition-all text-sm"
                         />
                    </div>
                    <div >
                         <select className="select select-lg w-40 bg-base-200 border border-accent/5 rounded-lg py-3 pl-6 pr-12 text-sm outline-none cursor-pointer focus:border-primary/70 transition-all ">
                              <option>All</option>
                              <option>T-Shirts</option>
                              <option>Hoodies</option>
                              <option>Pants</option>
                         </select>
                    </div>
               </div>

               {/* Products Table */}
               <div className="overflow-x-auto">
                    <table className="w-full text-left border-separate border-spacing-y-3">
                         <thead>
                              <tr className="text-neutral-500 text-[10px] uppercase tracking-[2px] font-bold">
                                   <th className="px-6 pb-2">Product</th>
                                   <th className="px-6 pb-2 text-center">Category</th>
                                   <th className="px-6 pb-2 text-center">Price</th>
                                   <th className="px-6 pb-2 text-center">Status</th>
                                   <th className="px-6 pb-2 text-right">Actions</th>
                              </tr>
                         </thead>
                         <tbody>
                              {products?.map((item) => (
                                   <tr key={item._id} className="bg-[#1a1a1a] hover:bg-[#222] transition-colors group">
                                        {/* Product Info */}
                                        <td className="px-6 py-4 rounded-l-xl">
                                             <div className="flex items-center gap-4">
                                                  <div className="w-12 h-14 bg-neutral-800 rounded-lg overflow-hidden flex-shrink-0 border border-white/5">
                                                       <img src={item.images[0]} alt="" className="w-full h-full object-cover" />
                                                  </div>
                                                  <div className="min-w-0">
                                                       <h4 className="text-sm font-bold truncate 
                                                       max-w-[250px]">{item?.title}</h4>
                                                       <p className="text-[11px] text-neutral-500 font-bold uppercase mt-1">Sizes: {item.sizes}</p>
                                                  </div>
                                             </div>
                                        </td>
                                        {/* Category */}
                                        <td className="px-6 py-4 text-center">
                                             <span className="bg-neutral-800 text-neutral-400 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                                                  {item.category}
                                             </span>
                                        </td>
                                        {/* Price */}
                                        <td className="px-6 py-4 text-center">
                                             <div className="flex flex-col gap-2 items-center">
                                                  <span className="font-bold text-sm">৳{item.price}</span>
                                                  {item.discount && (
                                                       <span className="text-xs mb-2 text-primary font-bold">-{item.discount}%</span>
                                                  )}
                                             </div>
                                        </td>
                                        {/* Status Badges */}
                                        <td className="px-6 py-4">
                                             <div className="flex justify-center gap-2">
                                                  {item.isNew && (
                                                       <span className="bg-primary/10 text-primary/95 border border-primary/20 px-2 py-1 rounded text-[11px] font-bold tracking-widest">
                                                            New
                                                       </span>
                                                  )}
                                                  {item.isBestSeller && (
                                                       <span className="bg-primary/10 text-primary/95 border border-primary/20 px-2 py-1 rounded text-[11px] font-black tracking-widest">
                                                            Trending
                                                       </span>
                                                  )}

                                             </div>
                                        </td>
                                        {/* Action Buttons */}
                                        <td className="px-6 py-4 rounded-r-xl text-right">
                                             <div className="flex justify-end gap-2">
                                                  <button className="p-2 bg-neutral-800 hover:bg-white hover:text-black rounded-lg transition-all">
                                                       <FiEdit2 size={14} />
                                                  </button>
                                                  <button className="p-2 bg-neutral-800 hover:bg-primary text-neutral-400 hover:text-accent rounded-lg transition-all">
                                                       <FiTrash2 size={14} />
                                                  </button>
                                             </div>
                                        </td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default AllProducts;