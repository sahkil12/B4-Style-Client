import {
    FiBox, FiShoppingBag, FiUsers, FiTrendingUp
} from 'react-icons/fi';

const AdminDashboard = () => {
    const stats = [
        { label: 'Total Users', value: '3', change: '+12%', icon: <FiUsers /> },
        { label: 'Total Products', value: '8', change: '+3', icon: <FiBox /> },
        { label: 'Total Orders', value: '248', change: '+18%', icon: <FiShoppingBag /> },
        { label: 'Revenue', value: '৳1,45,200', change: '+24%', icon: <span className="font-bold">৳</span> },
    ];

    return (
        <div className="min-h-screen bg-secondary text-accent flex">
            <main className="flex-1 p-8">
                {/* Header */}
                <header className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-medium tracking-wider bebas mb-1.5">Dashboard Overview</h1>
                    <p className="text-neutral-400/85 text-sm md:text-base">Welcome back, Admin! Here's what's happening.</p>
                </header>

                {/* Stat Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {stats?.map((stat, index) => (
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