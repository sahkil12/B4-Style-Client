import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { BsBoxSeam } from "react-icons/bs";
import { SiTicktick } from "react-icons/si";
import Spinner from './../../../Components/Shared/Spinner';

const MyOrders = () => {

     const axiosSecure = useAxiosSecure();

     const { data: orders, isLoading } = useQuery({
          queryKey: ["user-orders"],
          queryFn: async () => {
               const res = await axiosSecure.get("/user/orders");
               return res.data;
          }
     })
     console.log(orders);

     if (isLoading) {
          return <Spinner></Spinner>
     }

     return (
          <div className="min-h-screen text-accent ">
               <main className="flex-1 p-4 lg:p-8 w-full max-w-full overflow-x-hidden mb-12">
                    {/* Header */}
                    <header className="mb-10">
                         <h1 className="text-4xl font-medium tracking-wider bebas mb-2">MY ORDERS</h1>
                         <p className="text-accent/60 text-sm font-medium">View All Orders</p>
                    </header>
                    
                    <div className="space-y-4">
                         {orders?.map(order => (
                              <div
                                   key={order._id}
                                   className="flex items-center justify-between bg-base-200 border border-accent/10 rounded-xl px-6 py-5"
                              >
                                   {/* left */}
                                   <div className="flex items-center gap-4">
                                        {order.orderStatus === "delivered" ? (
                                             <div className="w-11 h-11 flex items-center justify-center bg-green-600/15 rounded-lg">
                                                  <SiTicktick className="text-green-500 font-bold" size={18} />    
                                             </div>
                                        ) : (
                                             <div className="w-11 h-11 flex items-center justify-center bg-blue-600/15 rounded-lg">  
                                                  <BsBoxSeam className="text-blue-500 font-bold" size={18} />
                                             </div>
                                        )}

                                        <div>
                                             <h3 className="font-bold">
                                                  {order.orderId}
                                             </h3>
                                             <p className="text-xs text-accent/50">
                                                  {order.items.length} items •
                                                  {new Date(order.createdAt).toLocaleDateString()}
                                             </p>
                                        </div>
                                   </div>
                                   {/* right */}
                                   <div className="flex items-center gap-6">
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
                                             {order.orderStatus}
                                        </span>
                                        <span className="font-bold">
                                             ৳{order.totalAmount}
                                        </span>
                                        <Link
                                             to={`/dashboard/track-order/${order._id}`}
                                             className="text-primary text-sm font-bold"
                                        >
                                             Track
                                        </Link>
                                   </div>
                              </div>
                         ))}
                    </div>
               </main>
          </div>
     );
};

export default MyOrders;