import { motion } from 'framer-motion';
import { FiUser, FiPackage, FiHeart, FiSettings, FiLogOut } from 'react-icons/fi';

const Profile = () => {
    // Demo User Data
    const user = {
        name: "SHAKIL",
        email: "jahewv94027@ixunbo.com"
    };

    const menuItems = [
        {
            id: 1,
            title: "MY ORDERS",
            subtitle: "View your order history",
            icon: <FiPackage size={22} />,
            highlight: true // Red border wala item
        },
        {
            id: 2,
            title: "WISHLIST",
            subtitle: "0 items saved",
            icon: <FiHeart size={22} />,
            highlight: false
        },
        {
            id: 3,
            title: "ACCOUNT SETTINGS",
            subtitle: "Update your profile",
            icon: <FiSettings size={22} />,
            highlight: false
        },
        {
            id: 4,
            title: "SIGN OUT",
            subtitle: "Sign out of your account",
            icon: <FiLogOut size={22} />,
            isLogout: true // Reddish background/text
        }
    ];

    return (
        <div className="min-h-screen bg-secondary text-accent flex items-center justify-center px-4 py-20">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-lg space-y-4"
            >
                {/* --- Profile Header Section --- */}
                <div className="bg-[#1a1a1a] border border-white/5 p-6 rounded-xl flex items-center gap-5">
                    <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center text-primary border border-white/10">
                        <FiUser size={32} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold tracking-wider bebas">{user.name}</h2>
                        <p className="text-neutral-500 text-sm font-medium">{user.email}</p>
                    </div>
                </div>

                {/* --- Menu Items Section --- */}
                <div className="space-y-3">
                    {menuItems.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ x: 5 }}
                            className={`
                                cursor-pointer p-5 rounded-xl flex items-center gap-5 transition-all duration-300 border
                                ${item.highlight ? 'border-primary/50 bg-[#1a1a1a]' : 'border-white/5 bg-[#1a1a1a]'}
                                ${item.isLogout ? 'hover:bg-red-500/10 border-red-500/20 group' : 'hover:border-primary/30'}
                            `}
                        >
                            {/* Icon Box */}
                            <div className={`
                                w-12 h-12 rounded-lg flex items-center justify-center
                                ${item.isLogout ? 'bg-red-500/10 text-red-500' : 'bg-neutral-800 text-primary'}
                                ${item.highlight ? 'ring-1 ring-primary/30' : ''}
                            `}>
                                {item.icon}
                            </div>

                            {/* Text Info */}
                            <div className="flex-1">
                                <h3 className={`text-sm font-bold tracking-[2px] uppercase ${item.isLogout ? 'text-red-500' : 'text-accent'}`}>
                                    {item.title}
                                </h3>
                                <p className="text-neutral-500 text-xs mt-0.5 font-medium">
                                    {item.subtitle}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer simple credit if needed */}
                <p className="text-center text-[10px] text-neutral-600 uppercase tracking-[3px] pt-6">
                    B4 Style Premium Member
                </p>
            </motion.div>
        </div>
    );
};

export default Profile;