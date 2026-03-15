import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Spinner from "../../../Components/Shared/Spinner";
import { BsBoxSeam } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";

const TrackOrder = () => {
     const { id } = useParams();
     const axiosSecure = useAxiosSecure();

     const { data: order, isLoading } = useQuery({
          queryKey: ["track-order", id],
          queryFn: async () => {
               const res = await axiosSecure.get(`/user/orders/${id}`);
               return res.data;
          },
     });

     if (isLoading) {
          return <Spinner />;
     }

     const statusSteps = [
          { key: "order placed", label: "Order Placed", icon: <BsBoxSeam /> },
          { key: "processing", label: "Processing", icon: <FiSettings /> },
          { key: "delivered", label: "Delivered", icon: <AiOutlineCheck /> }
     ];

     const currentIndex = statusSteps.findIndex(
          (step) => step.key === order?.orderStatus
     );

     return (
          <div className="min-h-screen text-accent">
               <main className="p-4 lg:p-8 mt-5 max-w-7xl mx-auto">
                    {/* Header */}
                    <header className="mb-10">
                         <h1 className="text-4xl font-medium tracking-wider bebas mb-2">
                              ORDER TRACKING
                         </h1>
                         <p className="text-accent/60 text-sm">
                              Track your order status
                         </p>
                    </header>
                    {/* Order Card */}
                    <div className="bg-base-200 border border-accent/10 rounded-xl px-6 py-7 mb-10">

                         <div className="flex justify-between items-center">
                              <div>
                                   <h3 className="font-bold text-lg">{order.orderId}</h3>
                                   <p className="text-sm text-accent/60 mt-2">
                                        {new Date(order.createdAt).toLocaleDateString("en-BD", {
                                             day: "numeric",
                                             month: "short",
                                             year: "numeric",
                                        })}
                                   </p>
                              </div>

                              <span className="text-lg font-bold">
                                   ৳{order.totalAmount.toLocaleString()}
                              </span>
                         </div>
                    </div>
                    {/* Timeline */}
                    <div className="bg-base-200 border border-accent/10 rounded-xl p-8 md:p-10">

                         <div className="flex items-center justify-between relative">
                              {statusSteps?.map((step, index) => {
                                   const active = index <= currentIndex;
                                   return (
                                        <div key={step.key} className="flex flex-col items-center flex-1 relative">
                                             {/* Line */}
                                             {index !== 0 && (
                                                  <div
                                                       className={`absolute top-5 lg:top-7 left-[-50%] w-full h-[2px] 
                                                        ${index <= currentIndex ? "bg-green-500" : "bg-accent/20"}`}
                                                  />
                                             )}
                                             {/* Circle */}
                                             <div
                                                  className={`w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-lg
                                                            ${active
                                                            ? "bg-green-500 text-base-100"
                                                            : "bg-accent/20 text-accent/60"
                                                       }`}
                                             >
                                                  {step.icon}
                                             </div>
                                             {/* Label */}
                                             <p
                                                  className={`mt-4 text-sm capitalize font-medium
                                                  ${active ? "text-green-500" : "text-accent/40"}`}
                                             >
                                                  {step.label}
                                             </p>
                                        </div>
                                   );
                              })}
                         </div>
                    </div>
                    {/* Order Items */}
                    <div className="bg-base-200 border border-accent/10 rounded-xl p-6 lg:p-8 mt-10">
                         <h3 className="font-bold mb-4">Items</h3>

                         <div className="space-y-4">
                              {order?.items?.map((item) => (
                                   <div
                                        key={item.productId}
                                        className="flex justify-between text-sm border-b border-accent/10 pb-3.5"
                                   >
                                        <span>
                                             {item.title} × {item.quantity}
                                        </span>
                                        <span>৳{item.price.toLocaleString()}</span>
                                   </div>
                              ))}
                         </div>
                    </div>
               </main>
          </div>
     );
};

export default TrackOrder;