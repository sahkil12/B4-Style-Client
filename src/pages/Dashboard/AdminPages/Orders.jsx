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
            case 'Pending': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
            case 'Processing': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
            case 'Shipped': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
            case 'Delivered': return 'bg-green-500/10 text-green-500 border-green-500/20';
            case 'Cancelled': return 'bg-red-500/10 text-red-500 border-red-500/20';
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
                    <select className="appearance-none bg-base-200 border border-white/5 rounded-lg py-3 pl-6 pr-12 text-sm outline-none cursor-pointer hover:border-white/20 transition-all font-bold">
                        <option>All Status</option>
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                        <option>Cancelled</option>
                    </select>
                    <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
                </div>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto rounded-xl border border-white/5 bg-base-200">
                <table className="table w-full">
                    <thead>
                        <tr className="text-neutral-500 text-[10px] uppercase tracking-[2px] font-black border-b border-white/5">
                            <th className="bg-transparent py-6 px-6">Order ID</th>
                            <th className="bg-transparent py-6">Customer</th>
                            <th className="bg-transparent py-6 text-center">Items</th>
                            <th className="bg-transparent py-6 text-center">Total</th>
                            <th className="bg-transparent py-6 text-center">Status</th>
                            <th className="bg-transparent py-6 text-center">Date</th>
                            <th className="bg-transparent py-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-white/5 transition-colors border-b border-white/5 last:border-none">
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
                                            className={`appearance-none px-4 py-1.5 rounded-md text-[10px] font-black tracking-widest uppercase border cursor-pointer outline-none transition-all ${getStatusStyles(order.status)}`}
                                            onChange={(e) => {
                                                const newOrders = orders.map(o => o.id === order.id ? {...o, status: e.target.value} : o);
                                                setOrders(newOrders);
                                            }}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Processing">Processing</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                        {/* Minimal arrow for the status dropdown like in screenshot */}
                                        <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" size={12} />
                                    </div>
                                </td>

                                {/* Date */}
                                <td className="text-center text-xs font-bold text-neutral-400">
                                    {order.date}
                                </td>

                                {/* Action Buttons */}
                                <td className="px-6 py-5 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button className="p-2 bg-neutral-800 hover:bg-white hover:text-black rounded-lg border border-white/5 transition-all text-neutral-400">
                                            <FiEye size={16} />
                                        </button>
                                        <button className="p-2 bg-neutral-800 hover:bg-primary text-neutral-400 hover:text-white rounded-lg border border-white/5 transition-all">
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