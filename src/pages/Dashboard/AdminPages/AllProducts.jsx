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
          <div className="flex-1 p-4 lg:p-8 bg-secondary min-h-screen text-accent">
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
                    <div className="relative flex-1 min-w-72">
                         <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                         <input
                              type="text"
                              placeholder="Search products..."
                              className="w-full bg-base-200 border border-accent/5 rounded-lg py-3 pl-12 pr-4 outline-none focus:border-primary/50 transition-all text-sm"
                         />
                    </div>
                    <div >
                         <select className="select select-lg w-48 bg-base-200 border border-accent/5 rounded-lg py-3 pl-6 pr-12 text-sm outline-none cursor-pointer focus:border-primary/70 transition-all">
                              <option className="hover:bg-primary">All</option>
                              <option className="hover:bg-primary">T-Shirts</option>
                              <option className="hover:bg-primary">Hoodies</option>
                              <option className="hover:bg-primary">Pants</option>
                              <option className="hover:bg-primary">Shirts</option>
                              <option className="hover:bg-primary">Winter Wear</option>
                         </select>
                    </div>
               </div>
               {/* Products Table */}
               <div className="overflow-x-auto border rounded-t-2xl border-accent/10">
                    <table className="w-full text-left">
                         <thead className="h-14">
                              <tr className="text-neutral-400/85 text-xs bg-secondary uppercase tracking-[2px] font-bold">
                                   <th className="px-6 pb-2">Product</th>
                                   <th className="px-6 pb-2 text-center">Category</th>
                                   <th className="px-6 pb-2 text-center">Price</th>
                                   <th className="px-6 pb-2 text-center">Status</th>
                                   <th className="px-6 pb-2 text-center">Stock</th>
                                   <th className="px-6 pb-2 text-right">Actions</th>
                              </tr>
                         </thead>
                         <tbody>
                              {products?.map((item) => (
                                   <tr key={item._id} className="bg-base-200/90 hover:bg-base-200/95 border-b border-accent/10 transition-colors group">
                                        {/* Product Info */}
                                        <td className="px-5 py-4">
                                             <div className="flex items-center gap-4">
                                                  <div className="w-14 h-16 bg-accent/5 rounded-lg overflow-hidden flex-shrink-0 border border-accent/5">
                                                       <img src={item.images[0]} alt={item.slug} className="w-full h-full object-cover" />
                                                  </div>
                                                  <div className="min-w-0">
                                                       <h4 className="text-sm font-semibold truncate 
                                                       max-w-64">{item?.title}</h4>
                                                       <p className="text-[11px] text-neutral-500 font-bold uppercase flex gap-1 mt-2">Sizes: {item.sizes?.map((s, idx) => <span key={idx}>{s},</span>)}</p>
                                                  </div>
                                             </div>
                                        </td>
                                        {/* Category */}
                                        <td className="px-6 py-4 text-center">
                                             <span className="bg-accent/5 text-accent/60 px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider">
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
                                          <td className="text-center">
                                             <span className="text-primary text-sm font-bold">
                                                  {item.stock}
                                             </span>
                                        </td>
                                        {/* Action Buttons */}
                                        <td className="px-6 py-4 rounded-r-xl text-right">
                                             <div className="flex justify-end gap-2">
                                                  <button className="p-2.5 bg-accent/5 hover:bg-accent/80 hover:text-primary rounded-md transition-all cursor-pointer">
                                                       <FiEdit2 size={16} />
                                                  </button>
                                                  <button className="p-2.5 bg-base-100/30 border border-accent/10 hover:bg-primary text-primary hover:text-accent cursor-pointer rounded-md transition-all">
                                                       <FiTrash2 size={16} />
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