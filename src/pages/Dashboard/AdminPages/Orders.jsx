import { useState } from 'react';
import { FiSearch, FiEye, FiTrash2, FiX } from 'react-icons/fi';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Spinner from '../../../Components/Shared/Spinner';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Orders = () => {

    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient()
    const [search, setSearch] = useState("")
    const [modalOpen, setModalOpen] = useState(null)
    const [page, setPage] = useState(1);
    const [statusFilter, setStatusFilter] = useState("all")

    const { data: orders, isLoading, refetch, error } = useQuery({
        queryKey: ["orders", page],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orders?page=${page}&limit=25`)
            return res.data
        }
    })
    // status change
    const handleStatusChange = async (id, status) => {
        try {
            await axiosSecure.patch(`/orders/${id}`, {
                orderStatus: status
            })
            refetch()
            toast.success("Delivery Status Update")
        } catch {
            toast.error("Failed to update status")
        }
    }
    const filteredOrders = orders?.orders.filter(order =>
        order.orderId.toLowerCase().includes(search.toLowerCase())
    )?.filter(order =>
        statusFilter === "all" || order.orderStatus.toLowerCase() === statusFilter.toLowerCase()
    )

    const totalPages = Math.ceil((orders?.total || 0) / 25)
    const pages = Array.from({ length: totalPages }, (_, i) => i + 0)
    // delete order
    const handleDelete = async (id) => {

        const confirm = await Swal.fire({
            title: "Delete Order?",
            text: "This cannot be undone",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#E60000",
            cancelButtonColor: "#000000",
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
            color: "#0E0E0E"
        });
        if (!confirm.isConfirmed) return;
        try {
            // delete api call
            await axiosSecure.delete(`/orders/delete/${id}`);
            queryClient.invalidateQueries({
                queryKey: ["orders"]
            });
            Swal.fire({
                icon: "success",
                title: "Order Deleted!",
                showConfirmButton: false,
                timer: 1500,
            })
        }
        catch {
            Swal.fire({
                icon: "error",
                title: "Failed!",
                showConfirmButton: false,
                timer: 1500,
            })
        }
    }
    // Status Color Mapping Logic
    const getStatusStyles = (status) => {
        switch (status) {
            case 'processing': return 'text-blue-500 border-blue-500/30';
            case 'delivered': return 'text-green-500 border-green-500/30';
            case 'cancelled': return 'text-red-500 border-red-500/30';
            default: return 'bg-neutral-800 text-neutral-400 border-white/5';
        }
    };
    if (isLoading) {
        return <Spinner></Spinner>
    }

    if (error) {
        return <p className="text-accent text-center my-14">Failed to load orders. Please try again later.</p>
    }

    return (
        <div className="flex-1 p-4 lg:p-8 w-full min-h-screen text-accent">
            {/* Header Section */}
            <div className="mb-10">
                <h1 className="text-4xl font-medium tracking-wider bebas mb-2">Orders</h1>
                <p className="text-accent/60 text-sm font-medium">{orders?.total} total orders</p>
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
                                        {order.items.reduce((sum, item) => sum + item.quantity, 0)}
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
                                                    value="processing"
                                                    className='hover:bg-primary text-accent hover:text-accent'>
                                                    Processing
                                                </option>
                                                <option
                                                    value="delivered"
                                                    className='hover:bg-primary text-accent hover:text-accent'>
                                                    Delivered
                                                </option>
                                                <option
                                                    value="cancelled"
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
                                            <button
                                                onClick={() => setModalOpen(order)}
                                                className="p-3 bg-base-100/40 cursor-pointer hover:bg-primary hover:text-accent rounded-md border border-accent/10 transition-all text-accent/70">
                                                <FiEye size={16} />
                                            </button>
                                            {/* delete button */}
                                            <button
                                                onClick={() => handleDelete(order._id)}
                                                className="p-3 bg-base-100/40 hover:bg-primary text-primary/80 hover:text-accent rounded-md border border-accent/10 cursor-pointer transition-all">
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
            {/* modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-base-100/80 backdrop-blur-sm transition-opacity">
                    <div className="relative w-full max-w-xl bg-[#0E0E0E] border border-accent/10 rounded-2xl p-8 shadow-2xl animate-in zoom-in-95 duration-200">
                        {/* Close Button */}
                        <button
                            onClick={() => setModalOpen(null)}
                            className="absolute top-6 cursor-pointer right-6 p-2 text-accent/70 hover:text-primary transition-colors"
                        >
                            <FiX size={24} />
                        </button>
                        {/* Modal Header */}
                        <h2 className="text-2xl font-medium tracking-wider mb-8 text-accent bebas">
                            {modalOpen?.orderId}
                        </h2>
                        {/* Modal Body - Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                            <div>
                                <p className="text-neutral-500 text-[11px] uppercase tracking-widest font-bold mb-1">Customer</p>
                                <p className="text-accent/80 text-sm font-medium">{modalOpen?.shippingAddress?.name}</p>
                            </div>
                            <div>
                                <p className="text-neutral-500 text-[11px] uppercase tracking-widest font-bold mb-1">Email</p>
                                <p className="text-accent/80 font-medium text-sm">{modalOpen?.shippingAddress?.email || "N/A"}</p>
                            </div>
                            <div>
                                <p className="text-neutral-500 text-[11px] uppercase tracking-widest font-bold mb-1">Phone</p>
                                <p className="text-accent/80 text-sm font-medium">{modalOpen?.shippingAddress?.phone}</p>
                            </div>
                            <div>
                                <p className="text-neutral-500 text-[11px] uppercase tracking-widest font-bold mb-1">Address</p>
                                <p className="text-accent/80 text-sm font-medium">{modalOpen?.shippingAddress?.address || "Patiya, Chittagong"}</p>
                            </div>
                            <div>
                                <p className="text-neutral-500 text-[11px] uppercase tracking-widest font-bold mb-1">Items</p>
                                <p className="text-accent/80 text-sm font-medium">{modalOpen?.items?.reduce((sum, item) => sum + item.quantity, 0)}</p>
                            </div>
                            <div>
                                <p className="text-neutral-500 text-[11px] uppercase tracking-widest font-bold mb-1">Total</p>
                                <p className="text-accent/90 font-semibold text-base">৳{modalOpen?.totalAmount}</p>
                            </div>
                            <div>
                                <p className="text-neutral-500 text-[11px] uppercase tracking-widest font-bold mb-1">Date</p>
                                <p className="text-accent/80 text-sm font-medium">{new Date(modalOpen?.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <p className="text-neutral-500 text-[11px] uppercase tracking-widest font-bold mb-1">Status</p>
                                <span className={`inline-block px-3 bg-accent/5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${getStatusStyles(modalOpen?.orderStatus)}`}>
                                    {modalOpen?.orderStatus}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {
                totalPages > 1 && (
                    <div className='flex justify-center gap-5 items-center mt-6 mb-8'>
                        {/* prev button */}
                        <button
                            disabled={page === 1}
                            className={`px-7 py-1.5 rounded-sm font-semibold transition ${page === 1 ? 'bg-accent/15 cursor-not-allowed text-accent/80' : 'cursor-pointer bg-accent text-base-100 hover:bg-primary hover:text-accent'}`}
                            onClick={() => setPage(page - 1)}>Prev</button>

                        <div className='flex gap-2 items-center justify-center'>
                            {
                                pages?.map(p => (
                                    <button
                                        key={p}
                                        onClick={() => setPage(p + 1)}
                                        className={`px-4 py-2 rounded cursor-pointer
                            ${page === p + 1 ? "bg-primary text-accent" : "bg-base-200"}`}
                                    >
                                        {p + 1}
                                    </button>
                                ))
                            }
                        </div>
                        {/* next button */}
                        <button
                            disabled={page === totalPages}
                            className={`px-7 py-1.5 rounded-sm font-semibold transition ${page === totalPages ? 'bg-accent/15 cursor-not-allowed text-accent/80' : 'cursor-pointer bg-accent text-base-100 hover:bg-primary hover:text-accent'}`}
                            onClick={() => setPage(page + 1)}>Next</button>
                    </div>
                )
            }
        </div >
    );
};

export default Orders;