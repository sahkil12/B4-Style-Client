import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiUser, FiCheckCircle } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import UseAuth from '../../../Hooks/UseAuth';
import { ImSpinner9 } from 'react-icons/im';

const SignUp = () => {
     const { createUser, googleCreate, loading } = UseAuth()
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState("");
     const [showPassword, setShowPassword] = useState(false);

     // Simple Email Validation for visual check
     const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

     const handleSignUp = async (e) => {
          e.preventDefault()
          setError("");

          if (!name || !email || !password) {
               setError("Please fill all fields");
               return;
          }

          if (!isEmailValid) {
               setError("Invalid email address");
               return;
          }
          if (password.length < 6) {
               setError("Password must be at least 6 characters");
               return;
          }

          try {
               const result = await createUser(email, password)
               console.log(result);
          }
          catch (error) {
               setError(error.message);

          }

     }

     const handleGoogleSignUp = () => {
          googleCreate()
     }

     const inputStyle = `w-full bg-secondary border border-accent/10 rounded-md py-3.5 pl-14 pr-12 focus:border-primary outline-none transition-all text-accent placeholder:text-neutral-600`

     return (
          <div className="flex items-center justify-center text-accent px-4 pt-12 pb-14 md:pb-4">
               <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className=""
               >
                    {/* Header */}
                    <div className="text-center mb-10">
                         {/* Replace with your actual Logo component or IMG tag */}
                         <div className="mb-6 flex justify-center">
                              <img src="/b4-style-logo.png" className='h-14' alt="" />
                         </div>
                         <h1 className="text-3xl font-semibold tracking-widest mb-3 bebas">Join The Style</h1>
                         <p className="text-neutral-500">Create your account today</p>
                    </div>
                    {/* Form */}
                    <div className='bg-base-200 border p-6 sm:p-10 rounded-lg max-w-md md:min-w-lg border border-accent/10 '>
                         <form className="space-y-4"
                              onSubmit={handleSignUp}
                         >
                              {/* Full Name Field */}
                              <div className="space-y-2">
                                   <label className="block text-sm font-semibold tracking-wider">Full Name</label>
                                   <div className="relative flex items-center text-neutral-500 focus-within:text-primary transition-colors">
                                        <FiUser className="absolute left-4" size={20} />
                                        <input
                                             type="text"
                                             placeholder="Your full name"
                                             className={inputStyle}
                                             onChange={(e) => setName(e.target.value)}
                                        />
                                   </div>
                              </div>
                              {/* Email Field */}
                              <div className="space-y-2">
                                   <label className="block text-sm font-semibold tracking-wider">Email</label>
                                   <div className="relative flex items-center text-neutral-500 focus-within:text-primary transition-colors">
                                        <FiMail className="absolute left-4" size={20} />
                                        <input
                                             type="email"
                                             placeholder="your@email.com"
                                             className={inputStyle}
                                             onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {isEmailValid && (
                                             <FiCheckCircle className="absolute right-4 text-green-500" size={20} />
                                        )}
                                   </div>
                              </div>

                              {/* Password Field */}
                              <div className="space-y-2">
                                   <label className="block text-sm font-semibold tracking-wider">Password</label>
                                   <div className="relative flex items-center text-neutral-500 focus-within:text-primary transition-colors">
                                        <FiLock className="absolute left-4" size={20} />
                                        <input
                                             type={showPassword ? "text" : "password"}
                                             className={inputStyle}
                                             onChange={(e) => setPassword(e.target.value)}
                                             placeholder="*******"
                                        />
                                        <button
                                             type="button"
                                             onClick={() => setShowPassword(!showPassword)}
                                             className="absolute right-4 hover:text-accent cursor-pointer"
                                        >
                                             {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                        </button>
                                   </div>
                              </div>
                              <div className="pt-4 space-y-4">
                                   <button
                                        type="button"
                                        onClick={handleGoogleSignUp}
                                        className="w-full bg-accent text-base-100 text-xs sm:text-sm font-bold py-3 rounded-sm flex items-center justify-center gap-2 hover:bg-accent/90 transition-all uppercase tracking-wider"
                                   >
                                        {loading ? <span className='animate-spin'><ImSpinner9 size={22} /></span> : <><FcGoogle size={22} />
                                             <span>Join with Google</span></>}
                                   </button>
                                   {/* Main Sign In Button */}
                                   <button
                                        type="submit"
                                        className="w-full bg-primary text-accent font-bold py-3 text-xs sm:text-sm rounded-sm flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-[0.98] transition-all uppercase tracking-widest group"
                                   >

                                        {loading ? <span className='animate-spin'><ImSpinner9 size={22} /></span> : <>Create Account
                                             <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" /></>}
                                   </button>
                              </div>
                         </form>
                    </div>

                    {/* Footer */}
                    <div className="mt-7 text-center space-y-4 text-neutral-500 text-base font-medium">
                         <p>
                              Already have an account?{' '}
                              <Link to="/auth/sign_in" className="text-primary hover:underline ml-1 transition-all">
                                   Sign Up
                              </Link>
                         </p>
                         <Link to="/shop" className="inline-flex items-center gap-2 hover:text-accent/90 transition-colors group">
                              Continue as Guest
                              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                         </Link>
                    </div>
               </motion.div>
          </div>
     );
};

export default SignUp;