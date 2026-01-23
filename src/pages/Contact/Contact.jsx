import React from 'react';
import { FiSend, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Contact = () => {
     return (
          <div className="bg-base-100 text-accent min-h-screen ">
               {/* 1. Header Section */}
               <section className="pt-20 pb-12 text-center">
                    <section className='bg-secondary py-14'>
                         <h4 className="text-primary text-xs md:text-[15px] font-semibold tracking-[0.35em] uppercase mb-4">
                              Get In Touch
                         </h4>
                         <h2 className="text-5xl md:text-6xl font-bold tracking-widest bebas mb-5">
                              Contact Us
                         </h2>
                         <p className="text-neutral-400 text-sm md:text-base max-w-2xl px-6 mx-auto leading-relaxed">
                              Have a question or feedback? We'd love to hear from you. Our team is here
                              to help customers across Bangladesh.
                         </p>
                    </section>
               </section>

               {/* 2. Main Content Section (Form & Info) */}
               <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                         {/* Left Side: Contact Form */}
                         <div className="space-y-8">
                              <div>
                                   <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Send Us A Message</h3>
                                   <p className="text-zinc-500 text-sm">Fill out the form below and we'll get back to you as soon as possible.</p>
                              </div>

                              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                             type="text"
                                             placeholder="Your Name"
                                             className="w-full bg-[#111111] border border-zinc-800 p-4 rounded-md focus:outline-none focus:border-[#ff0000] transition-colors"
                                        />
                                        <input
                                             type="email"
                                             placeholder="Your Email"
                                             className="w-full bg-[#111111] border border-zinc-800 p-4 rounded-md focus:outline-none focus:border-[#ff0000] transition-colors"
                                        />
                                   </div>
                                   <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full bg-[#111111] border border-zinc-800 p-4 rounded-md focus:outline-none focus:border-[#ff0000] transition-colors"
                                   />
                                   <textarea
                                        placeholder="Your Message"
                                        rows="6"
                                        className="w-full bg-[#111111] border border-zinc-800 p-4 rounded-md focus:outline-none focus:border-[#ff0000] transition-colors resize-none"
                                   ></textarea>

                                   <button className="bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold py-4 px-8 rounded-sm flex items-center gap-3 uppercase tracking-widest text-xs transition-all duration-300">
                                        Send Message <FiSend size={16} />
                                   </button>
                              </form>
                         </div>

                         {/* Right Side: Contact Info Cards */}
                         <div className="space-y-8">
                              <div>
                                   <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Contact Information</h3>
                                   <p className="text-zinc-500 text-sm">Reach out to us through any of the following channels. We serve all 64 districts of Bangladesh!</p>
                              </div>

                              <div className="space-y-4">
                                   {/* Visit Us */}
                                   <div className="flex items-start gap-5 bg-[#0a0a0a] border border-zinc-900 p-6 rounded-xl hover:border-zinc-700 transition-colors">
                                        <div className="p-3 bg-[#1a1a1a] rounded-lg text-[#ff0000]">
                                             <FiMapPin size={24} />
                                        </div>
                                        <div>
                                             <h4 className="font-bold uppercase text-xs tracking-widest mb-1">Visit Us</h4>
                                             <p className="text-zinc-400 text-sm">Patiya, Chittagong<br />Bangladesh BD</p>
                                        </div>
                                   </div>

                                   {/* Call Us */}
                                   <div className="flex items-start gap-5 bg-[#0a0a0a] border border-zinc-900 p-6 rounded-xl hover:border-zinc-700 transition-colors">
                                        <div className="p-3 bg-[#1a1a1a] rounded-lg text-[#ff0000]">
                                             <FiPhone size={24} />
                                        </div>
                                        <div>
                                             <h4 className="font-bold uppercase text-xs tracking-widest mb-1">Call Us</h4>
                                             <p className="text-zinc-400 text-sm">+880 1310-079634</p>
                                             <p className="text-zinc-500 text-[10px] uppercase mt-1 tracking-wider">Sat - Thu: 10am - 8pm</p>
                                        </div>
                                   </div>

                                   {/* Email Us */}
                                   <div className="flex items-start gap-5 bg-[#0a0a0a] border border-zinc-900 p-6 rounded-xl hover:border-zinc-700 transition-colors">
                                        <div className="p-3 bg-[#1a1a1a] rounded-lg text-[#ff0000]">
                                             <FiMail size={24} />
                                        </div>
                                        <div>
                                             <h4 className="font-bold uppercase text-xs tracking-widest mb-1">Email Us</h4>
                                             <p className="text-zinc-400 text-sm">b4style@gmail.com</p>
                                        </div>
                                   </div>
                              </div>

                              {/* Delivery Alert Banner */}
                              <div className="bg-[#1a0000] border border-red-900/30 p-5 rounded-xl flex flex-col gap-1">
                                   <div className="flex items-center gap-2 text-[#ff0000]">
                                        <div className="w-2 h-2 bg-[#ff0000] rounded-full animate-pulse"></div>
                                        <span className="text-[10px] font-black uppercase tracking-widest">Delivery Available</span>
                                   </div>
                                   <p className="text-zinc-400 text-xs">We deliver across all 64 districts of Bangladesh. Cash on Delivery available!</p>
                              </div>

                              {/* Follow Us */}
                              <div className="space-y-4">
                                   <h4 className="text-xs font-bold uppercase tracking-[0.2em]">Follow Us</h4>
                                   <div className="flex gap-3">
                                        <a href="#" className="p-3 bg-[#111111] border border-zinc-800 rounded-lg hover:bg-[#ff0000] transition-all group">
                                             <FaInstagram size={18} className="group-hover:text-white transition-colors" />
                                        </a>
                                        <a href="#" className="p-3 bg-[#111111] border border-zinc-800 rounded-lg hover:bg-[#ff0000] transition-all group">
                                             <FaFacebookF size={18} className="group-hover:text-white transition-colors" />
                                        </a>
                                   </div>
                              </div>
                         </div>

                    </div>
               </section>
          </div>
     );
};

export default Contact;