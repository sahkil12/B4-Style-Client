import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { ImSpinner9 } from "react-icons/im";
import useAuth from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import axiosPublic from '../../../Hooks/axiosPublic';

const SignIn = () => {
     const { googleCreate, loginUser } = useAuth()
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [showPassword, setShowPassword] = useState(false);
     const [formLoading, setFormLoading] = useState(false);
     const [googleLoading, setGoogleLoading] = useState(false);
     const [error, setError] = useState("");
     const navigate = useNavigate()
     const location = useLocation()
     const from = location.state?.from?.pathname;
     // Simple Email Validation
     const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
     const loader = <span className='animate-spin'><ImSpinner9 size={22} /></span>

     const saveUserToDB = async (user) => {
          try {
               await axiosPublic.post('/users', user);
               toast.success("Your Account is Successfully Created", { duration: 1000 });
          } catch (err) {
               throw (err.message)
          }
     };

     const handleSignIn = async (e) => {
          e.preventDefault()
          setError("")

          if (!email || !password) {
               toast.error("Please fill all fields", { duration: 1000 });
               return;
          }
          if (!isEmailValid) {
               toast.error("Invalid email address", { duration: 1000 });
               return;
          }
          try {
               setFormLoading(true)
               const result = await loginUser(email, password)
               if (result) {
                    toast.success("Logged in successfully", { duration: 1000 })
                    navigate(from || '/');
                    setFormLoading(false)
               }
          }
          catch (error) {
               setError("Invalid email or password");
               setFormLoading(false);
          }
     }
     // handle google sign in
     const handleGoogleSignin = () => {
          setGoogleLoading(true);

          googleCreate()
               .then(async (res) => {
                    if (res) {
                         const name = res.user?.displayName
                         const email = res.user?.email
                         await saveUserToDB({ name, email })
                         navigate(from || '/');
                         setGoogleLoading(false);
                    }
               })
               .catch(error => {
                    console.log(error);
                    setError("Something is wrong try again!!");
                    setGoogleLoading(false);
               })
     }

     const inputClass = "w-full bg-secondary/90 border border-accent/10 rounded-md py-3.5 pl-14 pr-12 focus:border-primary outline-none transition-all text-accent placeholder:text-neutral-600"

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
                              <img src="/b4-style-logo.webp" loading="lazy" className='h-14' alt="B4 Style Logo" />
                         </div>
                         <h1 className="text-3xl font-semibold tracking-widest mb-3 bebas">Welcome Back</h1>
                         <p className="text-neutral-500">Sign In to your account</p>
                    </div>

                    <div className='bg-base-200 border p-5 sm:p-10 rounded-lg max-w-md md:min-w-lg border border-accent/10 '>
                         {/* Form */}
                         <form className="space-y-4"
                              onSubmit={handleSignIn}
                         >
                              {/* Email Input */}
                              <div className="space-y-2">
                                   <label className="block text-sm font-semibold tracking-wider" htmlFor="email">Email</label>
                                   <div className="relative flex items-center text-neutral-500 focus-within:text-primary transition-colors">
                                        <FiMail className="absolute left-4" size={20} />
                                        <input
                                             type="email"
                                             id="email"
                                             name='email'
                                             value={email}
                                             onChange={(e) => setEmail(e.target.value)}
                                             placeholder="your@gmail.com"
                                             className={inputClass}
                                        />
                                        {/* Conditional Check Icon based on validation */}
                                        {isEmailValid && (
                                             <FiCheckCircle className="absolute right-4 text-green-500 transition-opacity" size={20} />
                                        )}
                                   </div>
                              </div>
                              {/* Password Input */}
                              <div className="space-y-2">
                                   <label className="block text-sm font-semibold tracking-wider" htmlFor="password">Password</label>
                                   <div className="relative flex items-center text-neutral-500 focus-within:text-primary transition-colors">
                                        <FiLock className="absolute left-4" size={20} />
                                        <input
                                             type={showPassword ? "text" : "password"}
                                             id="password"
                                             value={password}
                                             onChange={(e) => setPassword(e.target.value)}
                                             placeholder="*******"
                                             className={inputClass}
                                        />
                                        {/* Toggle Password Visibility */}
                                        <button
                                             type="button"
                                             onClick={() => setShowPassword(!showPassword)}
                                             className="absolute right-4 hover:text-accent transition-colors cursor-pointer"
                                        >
                                             {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                        </button>
                                   </div>
                              </div>
                              {/* Forgot Password */}
                              <div className="flex justify-end">
                                   <Link to={'/auth/forgot_password'} className="text-sm text-primary hover:underline font-medium transition-all">
                                        Forgot password?
                                   </Link>
                              </div>
                              {error && <p className='text-base text-primary'>{error}</p>}
                              <div className="space-y-4 pt-2">
                                   {/* Google Sign In Button*/}
                                   <button
                                        type="button"
                                        disabled={googleLoading}
                                        onClick={handleGoogleSignin}
                                        className={`w-full ${googleLoading && "opacity-80 cursor-not-allowed"} bg-accent text-base-100 text-xs sm:text-sm font-bold py-3 rounded-sm flex items-center justify-center gap-2 hover:bg-accent/90 cursor-pointer transition-all uppercase tracking-wider`}
                                   >

                                        {googleLoading ? loader : <> <FcGoogle size={22} /> <span>Sign in with Google</span></>}
                                   </button>
                                   {/* Main Sign In Button */}
                                   <button
                                        type="submit"
                                        disabled={formLoading}
                                        className={`w-full ${formLoading && "opacity-80 cursor-not-allowed"} bg-primary text-accent font-bold py-3 text-xs sm:text-sm rounded-sm flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-[0.98] transition-all cursor-pointer uppercase tracking-widest group`}
                                   >
                                        {formLoading ? loader : <> Sign in <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" /></>}
                                   </button>
                              </div>
                         </form>
                    </div>
                    {/* Footer Links */}
                    <div className="mt-7 text-center space-y-4 text-neutral-500 text-base font-medium">
                         <p>
                              Don't have an account?{' '}
                              <Link to="/auth/sign_up" className="text-primary hover:underline ml-1 transition-all">
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

export default SignIn;