import { useQuery, useQueryClient } from '@tanstack/react-query';
import { FiSearch, FiUserCheck, FiUserMinus } from 'react-icons/fi';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Spinner from '../../../Components/Shared/Spinner';
import { FaUser } from 'react-icons/fa6';
import { MdAdminPanelSettings } from 'react-icons/md';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Users = () => {
     const axiosSecure = useAxiosSecure();
     const { user: loginUser } = useAuth()
     const queryClient = useQueryClient()

     const { data: allUsers, isLoading } = useQuery({
          queryKey: ["users"],
          queryFn: async () => {
               const res = await axiosSecure.get('/users')
               return res.data
          }
     })
     // make admin
     const handleMakeAdmin = async (id) => {

          const confirm = await Swal.fire({
               title: "Are you sure?",
               text: "Do you want to make this user admin?",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#E60000",
               cancelButtonColor: "#000000",
               confirmButtonText: "Yes, Continue",
               cancelButtonText: "Cancel",
               color: "#0E0E0E"
          });
          if (!confirm.isConfirmed) return;
          try {
               await axiosSecure.patch(`/users/make-admin/${id}`)
               queryClient.invalidateQueries(["users"])
               Swal.fire({
                    icon: "success",
                    title: "User is now admin",
                    showConfirmButton: false,
                    timer: 1500
               });
          }
          catch {
               Swal.fire({
                    icon: "error",
                    title: "Failed!",
                    showConfirmButton: false,
                    timer: 1500
               });
          }
     }
     // remove admin
     const handleRemoveAdmin = async (user) => {
          if (loginUser?.email === user?.email) {
               Swal.fire({
                    icon: "error",
                    title: "You cannot remove your own admin role",
                    showConfirmButton: false,
                    timer: 1500
               })
               return
          }

          const confirm = await Swal.fire({
               title: "Are you sure?",
               text: "Do you want to Remove this admin?",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#E60000",
               cancelButtonColor: "#000000",
               confirmButtonText: "Yes, Continue",
               cancelButtonText: "Cancel",
               color: "#0E0E0E"
          });
          if (!confirm.isConfirmed) return;
          try {
               await axiosSecure.patch(`/users/remove-admin/${user._id}`)
               queryClient.invalidateQueries(["users"])
               Swal.fire({
                    icon: "success",
                    title: "Admin Removed",
                    showConfirmButton: false,
                    timer: 1500
               });
          }
          catch {
               Swal.fire({
                    icon: "error",
                    title: "Failed!",
                    showConfirmButton: false,
                    timer: 1500
               });
          }
     }

     if (isLoading) {
          return <Spinner></Spinner>
     }

     return (
          <div className="flex-1 p-4 lg:p-8 w-full min-h-screen text-accent">
               {/* Header Section */}
               <div className="mb-7">
                    <h1 className="text-4xl font-medium tracking-wider bebas mb-2">Users</h1>
                    <p className="text-accent/60 text-sm font-medium">{allUsers.length || 0} registered users</p>
               </div>
               {/* Search Bar */}
               <div className="relative mb-8 max-w-md">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/60" />
                    <input
                         type="text"
                         placeholder="Search users..."
                         className="w-full bg-base-200/60 border border-accent/10 rounded-lg py-3.5 pl-12 pr-4 outline-none focus:border-primary/50 transition-all text-sm"
                    />
               </div>
               {/* Responsive Table Container */}
               <div className="overflow-x-auto w-full rounded-t-2xl border border-accent/10 relative">
                    <table className="w-full text-left">
                         {/* head */}
                         <thead className=''>
                              <tr className="text-accent/65 text-xs bg-secondary uppercase tracking-[2px] font-semibold">
                                   <th className="bg-transparent py-6 px-6">User</th>
                                   <th className="bg-transparent py-6 text-center">Role</th>
                                   <th className="bg-transparent py-6 text-center">Joined</th>
                                   <th className="bg-transparent py-6 pr-6 text-right">Actions</th>
                              </tr>
                         </thead>
                         <tbody>
                              {allUsers?.map((user) => (
                                   <tr key={user._id} className="bg-base-200/90 hover:bg-base-200 transition-colors border-b border-accent/10">
                                        {/* User Info */}
                                        <td className="px-6 py-5">
                                             <div className="flex items-center gap-4">
                                                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center border border-accent/5`}>
                                                       {user.role === 'admin' ? (
                                                            <MdAdminPanelSettings className="text-primary" size={20} />
                                                       ) : (
                                                            <div className="text-neutral-500 font-bold text-xs"><FaUser size={15} /></div>
                                                       )}
                                                  </div>
                                                  <div className="min-w-0">
                                                       <h4 className={`text-sm font-bold ${user.role === "admin" ? 'text-primary' : 'text-accent'}`}>
                                                            {user.name}
                                                       </h4>
                                                       <p className="text-xs text-accent/60 mt-1 font-medium truncate">{user.email}</p>
                                                  </div>
                                             </div>
                                        </td>
                                        {/* Role Badge */}
                                        <td className="text-center">
                                             <span className={`px-3 py-1.5 rounded-md text-[10px] font-semibold tracking-widest uppercase border ${user.role === 'admin'
                                                  ? 'bg-primary/10 border-primary/20 text-primary'
                                                  : 'bg-accent/5 border-accent/10 text-accent/70'
                                                  }`}>
                                                  {user.role}
                                             </span>
                                        </td>
                                        {/* Joined Date */}
                                        <td className="text-center">
                                             <span className="text-xs font-bold text-neutral-400">
                                                  {new Date(user.createAt).toLocaleDateString()}</span>
                                        </td>
                                        {/* Actions */}
                                        <td className="px-6 py-5">
                                             <div className="flex justify-end gap-3">
                                                  <div>
                                                       {user.role === 'admin' ? <button
                                                            onClick={() => handleRemoveAdmin(user)}
                                                            className={`py-2 px-3 rounded-lg border border-accent/5 transition-all flex items-center gap-2 cursor-pointer text-[10px] md:text-[11px] font-bold uppercase tracking-widest bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500 hover:text-base-100`}
                                                       >
                                                            <FiUserMinus size={16} /> Remove Admin
                                                       </button>
                                                            :
                                                            <button
                                                                 onClick={() => handleMakeAdmin(user?._id)}
                                                                 className={`py-2 px-3 rounded-lg border border-accent/5 transition-all flex items-center gap-2 cursor-pointer text-[10px] md:text-[11px] font-bold uppercase tracking-widest bg-primary/10 text-primary/90 hover:bg-primary hover:text-accent/90`}
                                                            >
                                                                 <FiUserCheck size={16} /> Make Admin
                                                            </button>
                                                       }
                                                  </div>
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

export default Users;