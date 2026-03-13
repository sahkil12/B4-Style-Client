import { FiUser, FiSave } from 'react-icons/fi';
import useAuth from '../../../Hooks/useAuth';
import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { ImSpinner9 } from 'react-icons/im';
import toast from 'react-hot-toast';

const Settings = () => {
     const { user, updateUserProfile } = useAuth()
     const axiosSecure = useAxiosSecure();
     const [loading, setLoading] = useState(false)

     // Shared styles for consistency
     const labelStyle = "block text-xs font-bold tracking-widest mb-2 text-accent/60";
     const inputStyle = "w-full bg-secondary/80 border border-accent/5 rounded-md py-3.5 px-4 focus:border-primary/50 outline-none transition-all text-sm text-accent placeholder:text-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed";

     const handleData = async (e) => {
          e.preventDefault();
          setLoading(true);
          const email = e.target.email.value;
          const name = e.target.name.value;
          const number = e.target.number.value;

          const bdPhoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;

          if (!bdPhoneRegex.test(number)) {
               setLoading(false);
               return toast.error("Please provide a valid Bangladeshi number");
          }

          try {
               await updateUserProfile({ displayName: name });

               const res = await axiosSecure.patch('/users', { email, name, number });
               if (res.data.success) {
                    toast.success("Updated Successfully");
               }
          } catch (err) {
               console.error(err);
          } finally {
               setLoading(false);
          }
     }

     return (
          <div className="flex-1 p-4 lg:p-8 w-full min-h-screen text-accent">

               {/* Header Section */}
               <div className="mb-10">
                    <h1 className="text-4xl font-medium tracking-wider bebas mb-2">SETTINGS</h1>
                    <p className="text-accent/60 text-sm font-medium">Manage your account settings</p>
               </div>
               {/* Centered Form Container */}
               <div className="flex justify-center items-start pt-6">
                    <div className="w-full max-w-2xl bg-base-200 rounded-xl border border-accent/5 overflow-hidden shadow-lg">
                         {/* Profile Header within Card */}
                         <div className="p-7 border-b border-accent/5 flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                   <FiUser size={20} />
                              </div>
                              <h3 className="text-lg font-medium bebas tracking-[2px]">Profile</h3>
                         </div>
                         {/* Settings Form */}
                         <form
                              onSubmit={handleData}
                              className="p-8 space-y-6">
                              {/* Email Field */}
                              <div className="space-y-2">
                                   <label className={labelStyle}>Email</label>
                                   <input
                                        type="email"
                                        name='email'
                                        disabled
                                        defaultValue={user?.email}
                                        className={inputStyle}
                                   />
                                   <p className="text-[11px] text-neutral-500 font-medium italic">
                                        Email cannot be changed
                                   </p>
                              </div>
                              {/* Full Name Field */}
                              <div className="space-y-2">
                                   <label className={labelStyle}>Full Name</label>
                                   <input
                                        type="text"
                                        required
                                        name='name'
                                        placeholder="Your full name"
                                        className={inputStyle}
                                   />
                              </div>
                              {/* Phone Number Field */}
                              <div className="space-y-2">
                                   <label className={labelStyle}>Phone Number</label>
                                   <input
                                        type="number"
                                        required
                                        name='number'
                                        placeholder="01XXXXXXXXX"
                                        className={inputStyle}
                                   />
                              </div>
                              {/* Action Button */}
                              <div className="pt-4">
                                   <button
                                        className="bg-primary text-accent px-8 py-3.5 rounded-md flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer"
                                   >
                                        {loading ?
                                             <span className='animate-spin'><ImSpinner9 size={20} /></span>
                                             :
                                             <> <FiSave size={16} /> Save Changes</>}
                                   </button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Settings;