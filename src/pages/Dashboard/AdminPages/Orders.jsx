import { useState } from 'react';
import { FiSearch, FiEye, FiTrash2 } from 'react-icons/fi';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import Spinner from '../../../Components/Shared/Spinner';

const Orders = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")

    const { data: orders, isLoading, refetch } = useQuery({
        queryKey: ["orders", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get('/orders')
            return res.data
        }
    })
    // status change
    const handleStatusChange = async (id, status) => {

        await axiosSecure.patch(`/orders/${id}`, {
            orderStatus: status
        })
        refetch()
    }
    const filteredOrders = orders?.filter(order =>
        order.orderId.toLowerCase().includes(search.toLowerCase())
    )?.filter(order =>
        statusFilter === "all" || order.orderStatus.toLowerCase() === statusFilter.toLowerCase()
    )

    // Status Color Mapping Logic
    const getStatusStyles = (status) => {
        switch (status) {
            case 'Pending': return 'text-yellow-500 border-yellow-500/30';
            case 'Processing': return 'text-blue-500 border-blue-500/30';
            case 'Delivered': return 'text-green-500 border-green-500/30';
            case 'Cancelled': return 'text-red-500 border-red-500/30';
            default: return 'bg-neutral-800 text-neutral-400 border-white/5';
        }
    };
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className="flex-1 p-4 lg:p-8 w-full bg-base-100 min-h-screen text-accent font-['Inter']">

            {/* Header Section */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold uppercase tracking-wider bebas mb-1">Orders</h1>
                <p className="text-neutral-500 text-sm font-bold">{orders?.length} total orders</p>
            </div>
            {/* Search & Global Filter Row */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="relative flex-1 min-w-[300px]">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/50" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search orders with id..."
                        className="w-full bg-base-200 border border-accent/5 rounded-lg py-3 pl-12 pr-4 outline-none focus:border-primary/50 transition-all text-sm"
                    />
                </div>
                <div className="relative">
                    <select
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="min-w-44 bg-base-200 border border-accent/5 rounded-lg pl-6 pr-12 text-sm outline-none cursor-pointer focus:border-primary/80 transition-all font-semibold select select-lg">
                        <option value="all" className='hover:bg-primary text-accent hover:text-accent font-medium'>All Status</option>
                        <option className='hover:bg-primary text-accent hover:text-accent font-medium'>Pending</option>
                        <option className='hover:bg-primary text-accent hover:text-accent font-medium'>Processing</option>
                        <option className='hover:bg-primary text-accent hover:text-accent font-medium'>Delivered</option>
                        <option className='hover:bg-primary text-accent hover:text-accent font-medium'>Cancelled</option>
                    </select>
                </div>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto rounded-xl border border-accent/5 bg-base-200">
                {filteredOrders.length > 0 ?
                    < table className="w-full text-left">
                        {/* head */}
                        <thead className=''>
                            <tr className="text-accent/65 text-xs bg-secondary uppercase tracking-[2px] font-semibold">
                                <th className="bg-transparent py-6 px-6">Order ID</th>
                                <th className="bg-transparent py-6 text-left">Customer</th>
                                <th className="bg-transparent py-6 text-center">Items</th>
                                <th className="bg-transparent py-6 text-right">Total</th>
                                <th className="bg-transparent py-6 text-center">Status</th>
                                <th className="bg-transparent py-6 text-center">Date</th>
                                <th className="bg-transparent py-6 pr-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders?.map((order) => (
                                <tr key={order._id} className="bg-base-100/5 hover:bg-base-100/10 transition-colors border-b border-accent/10 ">
                                    {/* Order ID */}
                                    <td className="px-6 py-5 font-bold text-sm tracking-tight text-accent">
                                        {order.orderId}
                                    </td>
                                    {/* user info */}
                                    <td className="py-5">
                                        <div>
                                            <h4 className="text-sm font-bold text-accent">{order.shippingAddress?.name}</h4>
                                            <p className="text-[11px] text-accent/60 mt-1 font-medium">{order.shippingAddress?.phone}</p>
                                        </div>
                                    </td>
                                    {/* item */}
                                    <td className="text-center font-bold text-sm">
                                        {order?.items?.length}
                                    </td>
                                    {/*  total taka*/}
                                    <td className="text-right font-bold text-sm">
                                        <span className="text-lg">৳</span>{order.totalAmount}
                                    </td>
                                    {/* order status */}
                                    <td className="text-center">
                                        <div className="relative inline-block">
                                            <select
                                                value={order.orderStatus}
                                                className={`px-4 py-1.5 mx-5 w-36 space-y-2 rounded-md text-[11px] font-bold tracking-widest uppercase border cursor-pointer outline-none transition-all select bg-secondary
                                            ${getStatusStyles(order.orderStatus)}`}
                                                onChange={(e) => {
                                                    handleStatusChange(order._id, e.target.value)
                                                }}

                                            >
                                                <option
                                                    value="Pending"
                                                    className='hover:bg-primary text-accent hover:text-accent'>
                                                    Pending
                                                </option>
                                                <option
                                                    value="Processing"
                                                    className='hover:bg-primary text-accent hover:text-accent'>
                                                    Processing
                                                </option>
                                                <option
                                                    value="Delivered"
                                                    className='hover:bg-primary text-accent hover:text-accent'>
                                                    Delivered
                                                </option>
                                                <option
                                                    value="Cancelled"
                                                    className='hover:bg-primary text-accent hover:text-accent'>
                                                    Cancelled
                                                </option>
                                            </select>
                                        </div>
                                    </td>
                                    {/* date */}
                                    <td className="text-center text-xs font-bold text-accent/75 px-2">
                                        {new Date(order.createdAt).toLocaleDateString()}
                                    </td>
                                    {/* Action Buttons */}
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-3 bg-base-100/40 cursor-pointer hover:bg-primary hover:text-accent rounded-md border border-accent/10 transition-all text-accent/70">
                                                <FiEye size={16} />
                                            </button>
                                            <button className="p-3 bg-base-100/40 hover:bg-primary text-primary/80 hover:text-accent rounded-md border border-accent/10 cursor-pointer transition-all">
                                                <FiTrash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table> :
                    <div className="flex justify-center text-center py-20">
                        <p className="text-xl font-semibold text-accent "> No Products Found..</p>
                    </div>
                }
            </div>
        </div >
    );
};

export default Orders;