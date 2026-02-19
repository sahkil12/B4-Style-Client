import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import Spinner from './../../../Components/Shared/Spinner'
import { MdAdminPanelSettings } from "react-icons/md";
import {
    FiBox, FiShoppingBag, FiUsers, FiTrendingUp
} from 'react-icons/fi';

const AdminDashboard = () => {
    const axiosSecure = useAxiosSecure()

    const { data, isLoading } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const res = axiosSecure.get("/admin/stats")
            return res
        }
    })
    const adminStats = data?.data
    // loading handle
    if (isLoading) {
        return <Spinner></Spinner>
    }
    console.log(adminStats?.latestOrders);

    const stats = [
        { label: 'Total Admin', value: adminStats?.totalAdmins, icon: <MdAdminPanelSettings size={18} /> },
        { label: 'Total Users', value: adminStats?.totalUsers, icon: <FiUsers /> },
        { label: 'Total Products', value: adminStats?.totalProducts, icon: <FiBox /> },
        { label: 'Total Orders', value: adminStats?.totalOrders, change: '+18%', icon: <FiShoppingBag /> },
        { label: 'Revenue', value: `৳ ${adminStats?.totalRevenue}`, change: '+24%', icon: <span className="font-bold">৳</span> },
    ];

    return (
        <div className="min-h-screen bg-secondary text-accent flex">
            <main className="flex-1 p-4 md:p-8">
                {/* Header */}
                <header className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-medium tracking-wider bebas mb-1.5">Dashboard Overview</h1>
                    <p className="text-neutral-400/85 text-sm md:text-base">Welcome back, Admin! Here's what's happening.</p>
                </header>

                {/* Stat Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
                    {stats?.map((stat, index) => (
                        <div key={index} className="bg-base-200/80 p-6 rounded-xl border border-accent/5 relative overflow-hidden group hover:border-primary/30 transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-accent/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-accent transition-all">
                                    {stat.icon}
                                </div>
                                {
                                    stat.change && (
                                        <div className="flex items-center gap-1 text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                                            <FiTrendingUp size={10} /> {stat.change}
                                        </div>
                                    )
                                }
                            </div>
                            <h3 className="text-3xl font-bold mb-2 tracking-tight">{stat.value}</h3>
                            <p className="text-neutral-500/95 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
                {/* Latest Orders */}
                <div className="bg-base-200/80 p-6 rounded-xl border border-accent/5">
                    <h2 className="text-lg font-bold mb-4">Latest Orders</h2>

                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Customer</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {adminStats?.latestOrders?.map(order => (
                                    console.log(order),
                                    <tr key={order._id}>
                                        <td>
                                            {order.shippingAddress?.name}
                                        </td>
                                        <td>
                                            ৳ {order.totalAmount}
                                        </td>
                                        <td>
                                            <span className="badge badge-success font-semibold">
                                                {order?.paymentStatus}
                                            </span>
                                        </td>
                                        <td>
                                            {new Date(order.createdAt)
                                                .toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default AdminDashboard;