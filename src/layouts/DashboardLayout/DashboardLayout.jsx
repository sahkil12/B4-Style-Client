import { Link, NavLink, Outlet } from "react-router";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import useUserRole from "../../Hooks/useUserRole";
import Loader from "../../Components/Shared/Loader";
import { RiHome9Line } from "react-icons/ri";
import { FiLogOut } from 'react-icons/fi';
import useAuth from "../../Hooks/useAuth";
import { adminLinks, userLinks } from "../../utils/DashboardLinks";

const DashboardLayout = () => {
     const { role, isLoading } = useUserRole()
     const { user, logOutUser } = useAuth()
     // loader
     if (isLoading) {
          return <Loader></Loader>
     }
     const links = role?.role === "admin" ? adminLinks : userLinks;

     return (
          <div className="drawer xl:drawer-open">
               <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

               <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-primary text-accent sticky top-0 shadow-md py-5 w-full flex gap-2 xl:hidden px-5">
                         <div className="flex-none">
                              <label htmlFor="my-drawer-2" aria-label="open sidebar" className="">
                                   <RiMenuUnfold2Fill className="cursor-pointer" size={26}></RiMenuUnfold2Fill>
                              </label>
                         </div>
                         <div className="mx-2 flex-1 px-2 text-xl sm:text-2xl font-semibold">Dashboard</div>
                    </div>
                    {/* Page content here */}
                    <div className="min-h-screen bg-secondary">
                         <Outlet></Outlet>
                    </div>
               </div>
               {/* drawer sidebar */}
               <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-accent/90 z-1 border-r-2 border-accent/10 font-medium text-lg min-h-full flex flex-col w-72 overflow-y-hidden space-y-3">
                         {/* Sidebar content here */}
                         <section className="p-3">
                              <div className="mb-4 flex items-center gap-3">
                                   <img src="/b4-style-logo.webp" className="w-10 h-10" alt="" />
                                   <span className="bebas tracking-wider text-xl text-accent font-medium">B4 Style</span>
                              </div>
                              <span className="uppercase text-sm bg-primary/15 px-5 py-2 rounded-full text-primary font-bold">{role?.role}</span>
                         </section>
                         <div className="border-b mb-5 border-accent/10"></div>
                         {/* links section */}
                         <section className="flex-1 space-y-2.5 text-accent/85 px-1">
                              {links?.map((link) => {
                                   const Icon = link.icon;
                                   return (
                                        <li key={link.name}>
                                             <NavLink
                                                  end={link.path === "/dashboard"}
                                                  to={link.path}
                                                  className={({ isActive }) =>
                                                       `flex items-center gap-3 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors
                                                          ${isActive
                                                            ? "bg-primary text-accent"
                                                            : "text-accent/85 hover:bg-accent/5    active:bg-accent/5"
                                                       }`
                                                  }
                                             >
                                                  <Icon size={21} />
                                                  {link.name}
                                             </NavLink>
                                        </li>
                                   );
                              })}
                         </section>
                         {/* last part */}
                         <div className="border-t border-accent/10"></div>
                         <section className="space-y-1.5 py-1.5 pb-3 p-1">
                              <Link to={'/shop'} className="w-full flex items-center gap-3 px-4 py-3 text-[15px] font-medium text-neutral-400 rounded-lg hover:bg-accent/5 cursor-pointer transition-colors">
                                   <RiHome9Line size={22} /> Back to Store
                              </Link>
                              <button
                                   onClick={() => logOutUser()}
                                   className="w-full flex items-center gap-3 px-4 py-3 text-[15px] font-medium text-primary hover:bg-primary/10 cursor-pointer rounded-lg transition-all">
                                   <FiLogOut size={22} /> Sign Out
                              </button>
                              {/* Admin Profile Mini */}
                              <div className="mt-2 pt-4 border-t border-accent/10 px-4">
                                   <p className="text-sm mb-1.5 font-semibold truncate">{user?.displayName}</p>
                                   <p className="text-xs text-neutral-500 truncate">{user?.email}</p>
                              </div>
                         </section>
                    </ul>
               </div>
          </div>
     );
};

export default DashboardLayout;