import React, { useState } from 'react';
import { FiSearch, FiEye, FiTrash2, FiChevronDown } from 'react-icons/fi';

const Orders = () => {
    // Demo Orders Data based on your screenshots
    const [orders, setOrders] = useState([
        { id: 'ORD-1001', customer: 'Rahim Ahmed', phone: '01712345678', items: 3, total: 4270, status: 'Pending', date: '2025-02-12' },
        { id: 'ORD-1002', customer: 'Karim Hossain', phone: '01812345678', items: 1, total: 890, status: 'Processing', date: '2025-02-11' },
        { id: 'ORD-1003', customer: 'Fatima Begum', phone: '01912345678', items: 2, total: 3780, status: 'Shipped', date: '2025-02-10' },
        { id: 'ORD-1004', customer: 'Nusrat Jahan', phone: '01612345678', items: 4, total: 6860, status: 'Delivered', date: '2025-02-08' },
        { id: 'ORD-1005', customer: 'Tanvir Islam', phone: '01512345678', items: 1, total: 2490, status: 'Cancelled', date: '2025-02-07' },
    ]);

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

    return (
        <div className="flex-1 p-8 md:p-12 bg-base-100 min-h-screen text-accent font-['Inter']">

            {/* Header Section */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold uppercase tracking-wider bebas mb-1">Orders</h1>
                <p className="text-neutral-500 text-sm font-bold">{orders.length} total orders</p>
            </div>

            {/* Search & Global Filter Row */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="relative flex-1 min-w-[300px]">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                    <input
                        type="text"
                        placeholder="Search orders..."
                        className="w-full bg-base-200 border border-white/5 rounded-lg py-3 pl-12 pr-4 outline-none focus:border-primary/50 transition-all text-sm"
                    />
                </div>
                <div className="relative">
                    <select className="min-w-44 bg-base-200 border border-accent/5 rounded-lg pl-6 pr-12 text-sm outline-none cursor-pointer focus:border-primary/80 transition-all font-semibold select select-lg">
                        <option className='hover:bg-primary text-accent hover:text-accent font-medium'>All Status</option>
                        <option className='hover:bg-primary text-accent hover:text-accent font-medium'>Pending</option>
                        <option className='hover:bg-primary text-accent hover:text-accent font-medium'>Processing</option>
                        <option className='hover:bg-primary text-accent hover:text-accent font-medium'>Delivered</option>
                        <option className='hover:bg-primary text-accent hover:text-accent font-medium'>Cancelled</option>
                    </select>

                </div>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto rounded-xl border border-white/5 bg-base-200">
                <table className="table w-full">
                    <thead className='bg-secondary'>
                        <tr className="text-accent/60 text-[12px] uppercase tracking-[2px] font-bold border-b border-white/5">
                            <th className="bg-transparent py-6 px-6">Order ID</th>
                            <th className="bg-transparent py-6">Customer</th>
                            <th className="bg-transparent py-6 text-center">Items</th>
                            <th className="bg-transparent py-6 text-center">Total</th>
                            <th className="bg-transparent py-6 text-center">Status</th>
                            <th className="bg-transparent py-6 text-center">Date</th>
                            <th className="bg-transparent py-6 text-right pr-8">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-accent/5 transition-colors border-b border-accent/5 last:border-none">
                                {/* Order ID */}
                                <td className="px-6 py-5 font-bold text-sm tracking-tight text-accent">
                                    {order.id}
                                </td>
                                {/* Customer Info */}
                                <td className="py-5">
                                    <div>
                                        <h4 className="text-sm font-bold text-accent">{order.customer}</h4>
                                        <p className="text-[11px] text-neutral-500 font-medium">{order.phone}</p>
                                    </div>
                                </td>
                                {/* Items Count */}
                                <td className="text-center font-bold text-sm">
                                    {order.items}
                                </td>
                                {/* Total Price */}
                                <td className="text-center font-bold text-sm">
                                    <span className="text-lg">৳</span>{order.total}
                                </td>
                                {/* Status Dropdown Style */}
                                <td className="text-center">
                                    <div className="relative inline-block">
                                        <select
                                            value={order.status}
                                            className={`px-4 py-1.5 w-36 space-y-2 rounded-md text-[11px] font-bold tracking-widest uppercase border cursor-pointer outline-none transition-all select bg-secondary
                                            ${getStatusStyles(order.status)}`}
                                            onChange={(e) => {
                                                const newOrders = orders.map(o => o.id === order.id ? { ...o, status: e.target.value } : o);
                                                setOrders(newOrders);
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
                                        {/* Minimal arrow for the status dropdown like in screenshot */}
                                        {/* <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" size={12} /> */}
                                    </div>
                                </td>
                                {/* Date */}
                                <td className="text-center text-xs font-bold text-neutral-400">
                                    {order.date}
                                </td>
                                {/* Action Buttons */}
                                <td className="px-6 py-5 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button className="p-3 bg-base-100/40 cursor-pointer hover:bg-primary hover:text-accent rounded-md border border-accent/10 transition-all text-accent/70">
                                            <FiEye size={16} />
                                        </button>
                                        <button className="p-3 bg-base-100/40 hover:bg-primary text-accent/75 hover:text-accent rounded-md border border-accent/10 cursor-pointer transition-all">
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

export default Orders;