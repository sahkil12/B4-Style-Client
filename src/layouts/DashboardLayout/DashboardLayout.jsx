import { NavLink, Outlet } from "react-router";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { FaHome, FaBox, FaMoneyBillWave, FaSearchLocation, FaUserCheck, FaUserClock, FaUserShield, FaWallet } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import useUserRole from "../../Hooks/useUserRole";
import Loader from "../../Components/Shared/Loader";

const DashboardLayout = () => {
     const { role, isLoading } = useUserRole()
     console.log(isLoading, role?.role);
     if (isLoading) {
          <Loader></Loader>
     }

     return (
          <div className="drawer xl:drawer-open">
               <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

               <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-gray-200 mb-5 py-4 w-full xl:hidden">
                         <div className="flex-none ">
                              <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                   <RiMenuUnfold2Fill size={26}></RiMenuUnfold2Fill>
                              </label>
                         </div>
                         <div className="mx-2 flex-1 px-2 text-xl sm:text-2xl font-semibold">Dashboard</div>
                    </div>
                    {/* Page content here */}
                    <div className="min-h-screen bg-secondary">
                         <Outlet></Outlet>
                    </div>
               </div>
               <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-accent/90 z-1 border-r-2 border-accent/10 font-medium text-lg min-h-full w-80 p-4 overflow-y-hidden space-y-3">
                         {/* Sidebar content here */}
                         <div className="mb-4 flex items-center gap-3">
                              <img src="/b4-style-logo.webp" className="w-10 h-10 md:w-12 md:h-12" alt="" />
                              <span className="bebas tracking-widest text-3xl text-accent font-medium">B4 Style</span>
                         </div>
                         <span className="uppercase text-sm text-primary font-bold">{role?.role}</span>
                         <div className="border mb-5 border-neutral-700"></div>
                         <li>
                              <NavLink end className={({ isActive }) => isActive ? 'bg-primary/95 ' : ''} to="/dashboard" >
                                   <span className={`flex items-center gap-4 font-semibold`}>
                                        <FaHome /> Home
                                   </span>
                              </NavLink>
                         </li>
                         {/* admin panel */}
                         <>
                              <li>
                                   <NavLink className={({ isActive }) => isActive ? 'bg-primary/95' : ''} to="/dashboard/sddf">
                                        <span className="flex items-center gap-4 font-semibold">
                                             <FaUserShield /> Manage Admins
                                        </span>
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink className={({ isActive }) => isActive ? 'bg-primary/95' : ''} to="/dashboard/sdfsf">
                                        <span className="flex items-center gap-4 font-semibold">
                                             <FaUserClock /> Pending Riders
                                        </span>
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink className={({ isActive }) => isActive ? 'bg-primary/95' : ''} to="/dashboard/cashout-requests">
                                        <span className="flex items-center gap-4 font-semibold">
                                             <FaWallet /> Cashout Requests
                                        </span>
                                   </NavLink>
                              </li>
                         </>
                         <li>
                              <NavLink className={({ isActive }) => isActive ? 'bg-primary/95' : ''} to="/dashboard/myParcels">
                                   <span className="flex items-center gap-4 font-semibold">
                                        <FaBox /> My Parcels
                                   </span>
                              </NavLink>
                         </li>

                         <li>
                              <NavLink className={({ isActive }) => isActive ? 'bg-primary/95' : ''} to="/dashboard/payment-history">
                                   <span className="flex items-center gap-4 font-semibold">
                                        <FaMoneyBillWave /> Payment History
                                   </span>
                              </NavLink>
                         </li>
                    </ul>
               </div>
          </div>
     );
};

export default DashboardLayout;