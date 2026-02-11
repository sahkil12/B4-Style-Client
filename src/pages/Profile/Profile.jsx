import { motion } from 'framer-motion';
import { FiUser, FiPackage, FiHeart, FiSettings, FiLogOut } from 'react-icons/fi';
import useWishlist from './../../Hooks/useWishlist';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Profile = () => {
     const { logOutUser, user } = useAuth()
     const { wishlistCount } = useWishlist()
     const navigate = useNavigate()

     const menuItems = [
          {
               id: 1,
               title: "MY ORDERS",
               subtitle: "View your order history",
               icon: <FiPackage size={22} />,

          },
          {
               id: 2,
               title: "WISHLIST",
               subtitle: `${wishlistCount} items saved`,
               icon: <FiHeart size={22} />,
               to: '/wishlist'
          },
          {
               id: 3,
               title: "ACCOUNT SETTINGS",
               subtitle: "Update your profile",
               icon: <FiSettings size={22} />,
          },
          {
               id: 4,
               title: "SIGN OUT",
               subtitle: "Sign out of your account",
               icon: <FiLogOut size={22} />,
               isLogIn: true,
               logout: logOutUser
          }
     ];

     return (
          <div className="text-accent flex items-center justify-center px-4 mt-20 py-20">
               <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-xl space-y-4"
               >
                    {/* Profile Header Section box */}
                    <div className="bg-base-200 border-2 border-primary/15 p-4 sm:p-6 rounded-xl flex items-center gap-4">
                         <div className="w-14 h-14 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-accent/10">
                              <FiUser size={30} />
                         </div>
                         <div>
                              <h2 className="text-xl text-wrap sm:text-2xl font-medium tracking-wider bebas">{user?.displayName}</h2>
                              <p className="text-neutral-500 text-xs sm:text-sm font-medium ">{user?.email}</p>
                         </div>
                    </div>
                    {/* Menu Items Section box */}
                    <div className="space-y-3">
                         {menuItems?.map((item) => (
                              <div
                                   onClick={() => {
                                        if (item?.logout) {
                                             item.logout();
                                        }
                                        if (item?.to) {
                                             navigate(item.to);
                                        }
                                   }}
                                   key={item.id}
                                   className={`cursor-pointer p-5 rounded-xl flex items-center gap-5 transition-all duration-300 hover:translate-x-2 border bg-base-200 border-accent/10
                                  ${item.isLogIn ? 'hover:bg-primary/15 active:bg-primary/15 group' : 'hover:border-primary/35 active:border-primary/35'}`}
                              >
                                   {/* Icon Box */}
                                   <div className={`
                                  w-12 h-12 rounded-lg flex items-center justify-center
                                  ${item.isLogIn ? 'bg-primary/15 text-primary' : 'bg-neutral-800 text-primary'}`}>
                                        {item.icon}
                                   </div>
                                   {/* Text Info */}
                                   <div className="flex-1">
                                        <h3 className={`text-lg font-medium tracking-[2.5px] bebas ${item.isLogIn ? 'text-primary' : 'text-accent'}`}>
                                             {item.title}
                                        </h3>
                                        <p className="text-neutral-500 text-xs mt-1 font-medium">
                                             {item.subtitle}
                                        </p>
                                   </div>
                              </div>
                         ))}
                    </div>
               </motion.div>
          </div>
     );
};

export default Profile;