import {
     FiHeart
} from 'react-icons/fi';
import useAuth from '../../../Hooks/useAuth';
import { MdOutlineShoppingCart } from 'react-icons/md';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../Components/Shared/Spinner';

const UserDashboard = () => {
     const { user } = useAuth()
     const axiosSecure = useAxiosSecure();

     const { data: userStats, isLoading } = useQuery({
          queryKey: ["user-stats"],
          queryFn: async () => {
               const res = await axiosSecure.get("/user/stats");
               return res.data;
          }
     });

     console.log(userStats);

     if (isLoading) {
          return <Spinner></Spinner>
     }

     const stats = [
          {
               label: "Total Orders",
               value: userStats?.totalOrders || 0,
               icon: <MdOutlineShoppingCart />
          },
          {
               label: "Wishlist Items",
               value: userStats?.wishlistItems || 0,
               icon: <FiHeart />
          },
          {
               label: "Total Amount Spent",
               value: `৳ ${userStats?.totalSpent || 0}`,
               icon: <span className="font-bold">৳</span>
          }
     ];

     return (
          <div className="min-h-screen bg-secondary text-accent flex">
               <main className="flex-1 p-8">
                    {/* Header */}
                    <header className="mb-10">
                         <h1 className="text-3xl md:text-4xl font-medium tracking-wider bebas mb-1.5">WELCOME, {user?.displayName}!</h1>
                         <p className="text-neutral-400 text-sm">Here's your account overview</p>
                    </header>

                    {/* Stat Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 lg:mb-16">
                         {stats?.map((stat, index) => (
                              <div key={index} className="bg-base-200 p-6 rounded-xl border border-accent/5 relative overflow-hidden group hover:border-primary/30 transition-all">
                                   <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-neutral-800 rounded-lg text-primary group-hover:bg-primary group-hover:text-accent transition-all">
                                             {stat.icon}
                                        </div>
                                   </div>
                                   <h3 className="text-3xl font-bold mb-3 tracking-tight">{stat.value}</h3>
                                   <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                              </div>
                         ))}
                    </div>

                    <h1 className='text-3xl bebas mb-5 tracking-wider font-medium'>Recent Orders</h1>
                    <div className="overflow-x-auto border rounded-t-2xl border-accent/10 relative">
                         <table className="w-full text-left">
                              <thead className="h-14">
                                   <tr className="text-accent/55 text-xs bg-secondary uppercase tracking-[2px] font-bold">
                                        <th className="px-6 pb-2">Order ID</th>
                                        <th className="px-6 pb-2 text-center">Payment Status</th>
                                        <th className="px-6 pb-2 text-center">Total Price</th>
                                        <th className="px-6 pb-2 text-center">Delivery Status</th>
                                        <th className="px-6 pb-2 text-center">Order At</th>
                                        <th className="px-6 pb-2 text-right">Actions</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {userStats?.latestOrders?.map(order => (
                                        <tr key={order._id} className="bg-base-200/90 hover:bg-base-200/95 border-b border-accent/10 transition-colors group">
                                             {/* Product Info */}
                                             <td className="px-5 py-4">
                                                  <div className="flex items-center gap-4">
                                                       {order.orderId}
                                                  </div>
                                             </td>
                                             {/* Category */}
                                             <td className="px-6 py-4 text-center">
                                                  <span className="bg-accent/5 text-accent/60 px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider">
                                                       {order.paymentStatus}
                                                  </span>
                                             </td>
                                             {/* Price */}
                                             <td className="px-6 py-4 text-center">
                                                  <div className="flex flex-col gap-2 items-center">
                                                       <span className="font-bold text-sm">৳{order.totalAmount}</span>
                                                  </div>
                                             </td>
                                             {/* Status Badges */}
                                             <td className="px-6 py-4">
                                                  <div className="flex justify-center gap-2">
                                                       <span className="bg-primary/5 text-primary/95 border border-primary/20 px-2 py-1.5 rounded text-[11px] font-bold tracking-widest">
                                                            {order.orderStatus}
                                                       </span>
                                                  </div>
                                             </td>
                                             <td className="px-6 py-4">
                                                  {new Date(order.createdAt).toLocaleDateString()}
                                             </td>
                                             {/* Action Buttons */}
                                             <td className="px-6 py-4 rounded-r-xl text-right">
                                                  <div className="flex justify-end gap-2">
                                                       <button
                                                            className="p-2.5 bg-accent/5 border border-accent/5 hover:bg-accent/80 hover:text-primary rounded-md transition-all cursor-pointer">
                                                            {/* <FiEdit2 size={14} /> */}
                                                            Track Order
                                                       </button>
                                                  </div>
                                             </td>
                                        </tr>
                                   ))}
                              </tbody>
                         </table>

                    </div>

               </main>
          </div>
     );
};

export default UserDashboard;