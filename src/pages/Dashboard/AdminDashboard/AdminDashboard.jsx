import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiGrid, FiBox, FiShoppingBag, FiUsers, FiBarChart2,
    FiSettings, FiArrowLeft, FiLogOut, FiTrendingUp
} from 'react-icons/fi';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    // Sidebar Menu Items
    const menuItems = [
        { name: 'Overview', icon: <FiGrid /> },
        { name: 'Products', icon: <FiBox /> },
        { name: 'Orders', icon: <FiShoppingBag /> },
        { name: 'Users', icon: <FiUsers /> },
        { name: 'Analytics', icon: <FiBarChart2 /> },
        { name: 'Settings', icon: <FiSettings /> },
    ];
    // Demo Data for Stat Cards
    const stats = [
        { label: 'Total Users', value: '3', change: '+12%', icon: <FiUsers /> },
        { label: 'Total Products', value: '8', change: '+3', icon: <FiBox /> },
        { label: 'Total Orders', value: '248', change: '+18%', icon: <FiShoppingBag /> },
        { label: 'Revenue', value: '৳1,45,200', change: '+24%', icon: <span className="font-bold">৳</span> },
    ];

    return (
        <div className="min-h-screen bg-secondary text-accent flex">
            {/* --- SIDEBAR --- */}
            <aside className="w-64 bg-[#0a0a0a] border-r border-white/5 flex flex-col fixed h-full z-50">
                {/* Logo Section */}
                <div className="p-6 border-b border-white/5">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-white text-black font-bold p-1 text-xs">B4</div>
                        <h2 className="font-bold tracking-tighter">B4 STYLE</h2>
                    </div>
                    {/* Admin Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                        Admin
                    </div>
                </div>
                {/* Navigation Menu */}
                <nav className="flex-1 px-4 py-6 space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium transition-all group
                                ${activeTab === item.name
                                    ? 'bg-primary text-accent shadow-lg shadow-primary/20'
                                    : 'text-neutral-500 hover:bg-white/5 hover:text-accent'}`}
                        >
                            <span className={activeTab === item.name ? 'text-accent' : 'text-neutral-500 group-hover:text-primary'}>
                                {item.icon}
                            </span>
                            {item.name}
                        </button>
                    ))}
                </nav>
                {/* Bottom Sidebar Actions */}
                <div className="p-4 border-t border-white/5 space-y-1">
                    <button className="w-full flex items-center gap-4 px-4 py-3 text-sm font-medium text-neutral-500 hover:text-accent transition-colors">
                        <FiArrowLeft /> Back to Store
                    </button>
                    <button className="w-full flex items-center gap-4 px-4 py-3 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-all">
                        <FiLogOut /> Sign Out
                    </button>

                    {/* Admin Profile Mini */}
                    <div className="mt-4 pt-4 border-t border-white/5 px-4">
                        <p className="text-xs font-bold truncate">Shakil</p>
                        <p className="text-[10px] text-neutral-600 truncate">tazwershakilshakil@gmail.com</p>
                    </div>
                </div>
            </aside>
            {/* --- MAIN CONTENT AREA --- */}
            <main className="flex-1 ml-64 p-8 md:p-12">

                {/* Header */}
                <header className="mb-10">
                    <h1 className="text-3xl font-bold uppercase tracking-wider bebas mb-1">Dashboard Overview</h1>
                    <p className="text-neutral-500 text-sm">Welcome back, Admin! Here's what's happening today.</p>
                </header>

                {/* Stat Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-neutral-800 rounded-lg text-primary group-hover:bg-primary group-hover:text-accent transition-all">
                                    {stat.icon}
                                </div>
                                <div className="flex items-center gap-1 text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                                    <FiTrendingUp size={10} /> {stat.change}
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold mb-1 tracking-tight">{stat.value}</h3>
                            <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;