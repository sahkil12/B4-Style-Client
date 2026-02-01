import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { ImSpinner9 } from "react-icons/im";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import UseAuth from "../../../Hooks/UseAuth";

const ForgotPassword = () => {
     const { resetPassword } = UseAuth();
     const [email, setEmail] = useState("");
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState("");

     const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

     const handleReset = async (e) => {
          e.preventDefault();
          setError("");

          if (!email) {
               toast.error("Please enter your email", {duration: 1000});
               return;
          }

          if (!isEmailValid) {
               toast.error("Invalid email address", {duration: 1000});
               return;
          }

          try {
               setLoading(true);
               await resetPassword(email);
               toast.success("Password reset link sent to your email. Check your spam email", {duration: 1000});
               setEmail("");
          } catch (error) {
               setError("Failed to send reset email. Try again.");
          } finally {
               setLoading(false);
          }
     };

     const inputClass ="w-full bg-secondary/90 border border-accent/10 rounded-md py-3.5 pl-14 pr-4 focus:border-primary outline-none transition-all text-accent placeholder:text-neutral-600";

     return (
          <div className="flex items-center justify-center text-accent px-4 py-12">
               <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-lg"
               >
                    {/* Header */}
                    <div className="text-center mb-10">
                         <div className="mb-6 flex justify-center">
                              <img src="/b4-style-logo.png" className="h-14" alt="logo" />
                         </div>
                         <h1 className="text-3xl font-semibold tracking-widest mb-3 bebas">
                              Forgot Password
                         </h1>
                         <p className="text-neutral-500">
                              We’ll send you a reset link
                         </p>
                    </div>
                    {/* Form */}
                    <div className="bg-base-200 border p-6 sm:p-10 rounded-lg border-accent/10">
                         <form onSubmit={handleReset} className="space-y-4">
                              {/* Email */}
                              <div className="space-y-2">
                                   <label className="block text-sm font-semibold tracking-wider">
                                        Email
                                   </label>
                                   <div className="relative flex items-center text-neutral-500 focus-within:text-primary">
                                        <FiMail className="absolute left-4" size={20} />
                                        <input
                                             type="email"
                                             placeholder="your@email.com"
                                             value={email}
                                             onChange={(e) => setEmail(e.target.value)}
                                             className={inputClass}
                                        />
                                   </div>
                              </div>

                              {error && <p className="text-base text-primary">{error}</p>}
                              {/* Submit */}
                              <button
                                   type="submit"
                                   disabled={loading}
                                   className={`w-full bg-primary text-accent font-bold py-3 text-xs sm:text-sm rounded-sm flex items-center justify-center gap-2 uppercase tracking-widest cursor-pointer group active:scale-[0.98] hover:bg-primary/90 
                                    ${loading && "opacity-80 cursor-not-allowed"}`}
                              >
                                   {loading ? (
                                        <span className="animate-spin">
                                             <ImSpinner9 size={22} />
                                        </span>
                                   ) : (
                                        <>
                                             Send Reset Link
                                             <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
                                        </>
                                   )}
                              </button>
                         </form>
                    </div>

                    {/* Footer */}
                    <div className="mt-7 text-center text-neutral-500 font-medium">
                         <Link
                              to="/auth/sign_in"
                              className="text-primary hover:underline"
                         >
                              Back to Sign In
                         </Link>
                    </div>
               </motion.div>
          </div>
     );
};

export default ForgotPassword;
