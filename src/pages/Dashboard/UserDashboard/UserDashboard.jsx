import {
     FiHeart
} from 'react-icons/fi';
import useAuth from '../../../Hooks/useAuth';
import { MdOutlineShoppingCart } from 'react-icons/md';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../Components/Shared/Spinner';
import { Link } from 'react-router-dom';
import SEO from '../../../Components/Shared/SEO';

const UserDashboard = () => {
     const { user } = useAuth()
     const axiosSecure = useAxiosSecure();

     const { data: userStats, isLoading } = useQuery({
          queryKey: ["user-stats", user?.uid],
          queryFn: async () => {
               const res = await axiosSecure.get("/user/stats");
               return res.data;
          }
     });

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
               value: `৳ ${userStats?.totalSpent?.toLocaleString() || 0}`,
               icon: <span className="font-bold">৳</span>
          }
     ];

     const statusColor = {
          processing: "bg-yellow-500/10 text-yellow-500",
          delivered: "bg-green-500/10 text-green-500",
          cancelled: "bg-primary/10 text-primary"
     }

     return (
          <>
               <SEO
                    title="User Dashboard"
                    description="Manage your orders, and account activities from the B4 Style dashboard."
                    keywords="dashboard, manage orders, B4 Style dashboard"
               />

               <div className="min-h-screen text-accent ">
                    <main className="flex-1 p-4 lg:p-8 w-full max-w-full overflow-x-hidden mb-12">
                         {/* Header */}
                         <header className="mb-10">
                              <h1 className="text-3xl md:text-4xl font-medium tracking-wider bebas mb-1.5">WELCOME, {user?.displayName}!</h1>
                              <p className="text-accent/50 text-sm md:text-base">Here's your account overview</p>
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

                         <div className="flex items-center justify-between mb-5">
                              <h1 className="text-3xl bebas tracking-wider font-medium">
                                   Recent Orders
                              </h1>
                              <Link
                                   to="/dashboard/my-orders"
                                   className="text-sm text-primary font-bold"
                              >
                                   View All
                              </Link>
                         </div>
                         <div className="overflow-x-auto border rounded-t-2xl border-accent/10 relative">
                              <table className="w-full text-left">
                                   <thead className="h-14">
                                        <tr className="text-accent/55 text-xs bg-secondary uppercase tracking-[2px] font-bold h-16">
                                             <th className="px-6 pb-2">Order ID</th>
                                             <th className="px-6 pb-2 text-center">Payment Status</th>
                                             <th className="px-6 pb-2 text-center">Total Price</th>
                                             <th className="px-6 pb-2 text-center">Delivery Status</th>
                                             <th className="px-6 pb-2 text-center">Order At</th>
                                        </tr>
                                   </thead>
                                   {
                                        userStats?.latestOrders?.length > 0 ?
                                             <tbody className=''>
                                                  {userStats?.latestOrders?.map(order => (
                                                       <tr key={order._id} className="bg-base-200/90 hover:bg-base-200/95 border-b border-accent/10 transition-colors group max-w-72 h-20 truncate">
                                                            {/* Product Info */}
                                                            <td className="px-5 py-4 text-sm font-semibold">
                                                                 {order.orderId}
                                                            </td>
                                                            {/* Category */}
                                                            <td className="px-6 py-4 text-center">
                                                                 <span className="bg-accent/5 text-accent/60 px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider">
                                                                      {order.paymentStatus}
                                                                 </span>
                                                            </td>
                                                            {/* Price */}
                                                            <td className="px-6 py-4 text-center">
                                                                 <span className="font-bold text-accent/75">৳{order.totalAmount}</span>
                                                            </td>
                                                            {/* Status Badges */}
                                                            <td className="px-6 py-4">
                                                                 <div className="flex justify-center gap-2">
                                                                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest ${statusColor[order.orderStatus]}`}>
                                                                           {order.orderStatus}
                                                                      </span>
                                                                 </div>
                                                            </td>
                                                            <td className="px-6 py-4 text-center">
                                                                 {new Date(order.createdAt).toLocaleDateString()}
                                                            </td>
                                                       </tr>
                                                  ))}
                                             </tbody>
                                             :
                                             <tr>
                                                  <td colSpan="5" className="py-20 text-center">
                                                       <h2 className="text-xl font-semibold mb-2">
                                                            No Orders Yet
                                                       </h2>
                                                       <p className="text-accent/60 text-sm mb-3">
                                                            Start shopping to see your orders here
                                                       </p>
                                                       <Link
                                                            to="/shop"
                                                            className="btn btn-primary btn-sm"
                                                       >
                                                            Shop Now
                                                       </Link>
                                                  </td>
                                             </tr>}
                              </table>
                         </div>
                    </main>
               </div>
          </>
     );
};

export default UserDashboard;