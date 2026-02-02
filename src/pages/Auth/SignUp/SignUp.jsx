import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiUser, FiCheckCircle } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import UseAuth from '../../../Hooks/UseAuth';
import { ImSpinner9 } from 'react-icons/im';
import toast from 'react-hot-toast';

const SignUp = () => {
     const { createUser, googleCreate, updateUserProfile } = UseAuth()
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [accepted, setAccepted] = useState(false);
     const [error, setError] = useState("");
     const [nameError, setNameError] = useState("");
     const [formLoading, setFormLoading] = useState(false);
     const [googleLoading, setGoogleLoading] = useState(false);
     const [showPassword, setShowPassword] = useState(false);
     const navigate = useNavigate()
     // Simple Email Validation
     const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
     const loader = <span className='animate-spin'><ImSpinner9 size={22} /></span>

     const handleSignUp = async (e) => {
          e.preventDefault()
          setError("");

          if (!name || !email || !password) {
               toast.error("Please fill all fields", { duration: 1000 });
               return;
          }

          if (!isEmailValid) {
               toast.error("Invalid email address", { duration: 1000 });
               return;
          }
          if (password.length < 6) {
               toast.error("Password must be at least 6 characters");
               return;
          }
          if (name.length < 5) {
               setNameError("Name must be at least 5 characters");
               return;
          }
          if (name.length > 16) {
               setNameError("Name should be under 16 characters");
               return;
          }
          if (!accepted) {
               setError("Please accept Terms & Privacy Policy");
               return
          }
          try {
               setFormLoading(true)
               const result = await createUser(email, password)
               if (result) {
                    await updateUserProfile({
                         displayName: name,
                    })
                    toast.success(`${name}, your account was created successfully`, { duration: 1000 })
                    navigate('/')
               }
          }
          catch (error) {
               if (error?.code === "auth/email-already-in-use") {
                    setError("This Email is already exists")
               } else {
                    setError("Something went wrong. Try again.")
               }
          }
          finally {
               setFormLoading(false)
          }
     }
     // handle google sign up
     const handleGoogleSignUp = () => {
          setGoogleLoading(true);

          googleCreate()
               .then(res => {
                    toast.success(`Your Account Create Successfully`, { duration: 1000 })
                    navigate('/')
                    setGoogleLoading(false);
               })
               .catch(error => {
                    setError("Something is wrong try again!!");
                    setGoogleLoading(false);
               })
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
                              <img src="/b4-style-logo.png" loading="lazy" className='h-14' alt="B4 Style Logo" />
                         </div>
                         <h1 className="text-3xl font-semibold tracking-widest mb-3 bebas">Join The Style</h1>
                         <p className="text-neutral-500">Create your account today</p>
                    </div>
                    {/* Form */}
                    <div className='bg-base-200 border p-5 sm:p-10 rounded-lg max-w-md md:min-w-lg border border-accent/10 '>
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
                                             onChange={(e) => {
                                                  setName(e.target.value)
                                                  setNameError("")
                                             }}
                                        />
                                   </div>
                                   {nameError && <p className='text-primary test-xs'>{nameError}</p>}
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
                              <div className='flex items-center pt-2 gap-2'>
                                   <input
                                        type="checkbox"
                                        checked={accepted}
                                        onChange={(e) => setAccepted(e.target.checked)}
                                        className="checkbox checkbox-sm checkbox-primary" />
                                   <span className='text-sm font-medium text-neutral-400'> I agree to Terms & Privacy Policy</span>
                              </div>
                              {/* error message */}
                              {error && <p className='text-base text-primary'>{error}</p>}
                              <div className="pt-3 space-y-4">
                                   <button
                                        type="button"
                                        disabled={googleLoading}
                                        onClick={handleGoogleSignUp}
                                        className="w-full bg-accent text-base-100 text-xs sm:text-sm font-bold py-3 rounded-sm flex items-center justify-center gap-2 hover:bg-accent/90 transition-all uppercase tracking-wider cursor-pointer"
                                   >
                                        {googleLoading ? loader : <><FcGoogle size={22} />
                                             <span>Join with Google</span></>}
                                   </button>
                                   {/* Main Sign In Button */}
                                   <button
                                        type="submit"
                                        disabled={formLoading }
                                        className="w-full bg-primary text-accent font-bold py-3 text-xs sm:text-sm rounded-sm flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-[0.98] transition-all uppercase tracking-widest group cursor-pointer"
                                   >
                                        {formLoading ? loader : <> Create Account
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
                                   Sign In
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