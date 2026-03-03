
import React, { useState } from 'react';
import { FiSearch, FiTrash2, FiShield, FiUserCheck, FiUserMinus } from 'react-icons/fi';

const Users = () => {
     // Demo Users Data
     const [users, setUsers] = useState([
          { id: 1, name: 'sdfdfds', email: 'jahev94027@ixunbo.com', role: 'USER', joined: '3/3/2026', status: 'Active', avatarColor: 'bg-neutral-800' },
          { id: 2, name: 'Shakil', email: 'jahewv94027@ixunbo.com', role: 'USER', joined: '3/3/2026', status: 'Active', avatarColor: 'bg-neutral-800' },
          { id: 3, name: 'Shakil (You)', email: 'tazwershakilshakil@gmail.com', role: 'ADMIN', joined: '2/13/2026', status: 'Active', avatarColor: 'bg-primary/20' },
     ]);

     return (
          <div className="flex-1 p-4 lg:p-8 w-full min-h-screen text-accent">
               {/* Header Section */}
               <div className="mb-7">
                    <h1 className="text-4xl font-medium tracking-wider bebas mb-2">Users</h1>
                    <p className="text-accent/60 text-sm font-medium">{users.length} registered users</p>
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
               <div className="overflow-x-auto w-full rounded-xl border border-accent/5 ">
                    <table className="table w-full">
                         {/* head */}
                         <thead className='bg-secondary/80 border border-accent'>
                              <tr className="text-accent/60 text-[11px] uppercase tracking-[2px] font-black border-b border-white/85">
                                   <th className="bg-transparent py-6 px-6">User</th>
                                   <th className="bg-transparent py-6 text-center">Role</th>
                                   <th className="bg-transparent py-6 text-center">Joined</th>
                                   <th className="bg-transparent py-6 text-center">Status</th>
                                   <th className="bg-transparent py-6 text-right">Actions</th>
                              </tr>
                         </thead>
                         <tbody>
                              {users.map((user) => (
                                   <tr key={user.id} className="bg-base-200/90 hover:bg-accent/5 transition-colors border-b border-accent/5 last:border-none">
                                        {/* User Info */}
                                        <td className="px-6 py-5">
                                             <div className="flex items-center gap-4">
                                                  <div className={`w-10 h-10 ${user.avatarColor} rounded-lg flex items-center justify-center border border-white/5`}>
                                                       {user.role === 'ADMIN' ? (
                                                            <FiShield className="text-primary" size={20} />
                                                       ) : (
                                                            <div className="text-neutral-500 font-bold text-xs">U</div>
                                                       )}
                                                  </div>
                                                  <div className="min-w-0">
                                                       <h4 className={`text-sm font-bold ${user.name.includes('(You)') ? 'text-primary' : 'text-accent'}`}>
                                                            {user.name}
                                                       </h4>
                                                       <p className="text-[11px] text-neutral-500 font-medium truncate">{user.email}</p>
                                                  </div>
                                             </div>
                                        </td>

                                        {/* Role Badge */}
                                        <td className="text-center">
                                             <span className={`px-3 py-1 rounded-md text-[9px] font-black tracking-widest uppercase border ${user.role === 'ADMIN'
                                                  ? 'bg-primary/10 border-primary/20 text-primary'
                                                  : 'bg-neutral-800 border-white/10 text-neutral-400'
                                                  }`}>
                                                  {user.role}
                                             </span>
                                        </td>

                                        {/* Joined Date */}
                                        <td className="text-center">
                                             <span className="text-xs font-bold text-neutral-400">{user.joined}</span>
                                        </td>

                                        {/* Status Badge */}
                                        <td className="text-center">
                                             <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider">
                                                  {user.status}
                                             </span>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-6 py-5">
                                             <div className="flex justify-end gap-3">
                                                  {/* Toggle Admin Role Button */}
                                                  <div className="tooltip tooltip-left" data-tip={user.role === 'ADMIN' ? 'Remove Admin' : 'Make Admin'}>
                                                       <button
                                                            className={`p-2 rounded-lg border border-white/5 transition-all flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest
                                                ${user.role === 'ADMIN'
                                                                      ? 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500 hover:text-black'
                                                                      : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'}`}
                                                       >
                                                            {user.role === 'ADMIN' ? <FiUserMinus size={16} /> : <FiUserCheck size={16} />}
                                                       </button>
                                                  </div>

                                                  {/* Delete Button */}
                                                  <button className="p-2 bg-neutral-800 hover:bg-primary text-neutral-500 hover:text-white rounded-lg border border-white/5 transition-all">
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

export default Users;