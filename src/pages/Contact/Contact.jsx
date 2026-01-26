import React from 'react';
import { FiSend, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { motion } from 'motion/react';

const inputStyles = "w-full bg-accent/10 border border-neutral-700 p-3 md:p-4 rounded-lg focus:outline-none focus:border-primary transition-colors"

const socials = [
     { icon: <FaFacebookF size={20} />, link: "https://www.facebook.com/" },
     { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/" },
     { icon: <FaTiktok size={20} />, link: "https://www.tiktok.com/" },
];

const contactInfo = [
     { icon: <FiMapPin size={22} />, title: 'Visit Us', info: `Patiya, Chittagong Bangladesh BD` },
     { icon: <FiPhone size={22} />, title: 'Call Us', info: `+880 1310-079634` },
     { icon: <FiMail size={22} />, title: 'Email Us', info: `b4style@gmail.com` }
]

const Contact = () => {
     return (
          <div className="bg-base-100 text-accent min-h-screen">
               {/* 1. Header Section */}
               <section className="pb-12 bg-secondary mt-[81px] text-center">
                    <motion.section
                         initial={{ opacity: 0, y: 40 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: .6, ease: "easeOut" }}
                         viewport={{ once: true }}
                         className='py-14'>
                         <h4 className="text-primary text-xs md:text-[15px] font-semibold tracking-[0.35em] uppercase mb-5">
                              Get In Touch
                         </h4>
                         <h2 className="text-5xl md:text-6xl font-medium tracking-wider bebas mb-5">
                              Contact Us
                         </h2>
                         <p className="text-neutral-400 text-sm md:text-base max-w-2xl px-6 mx-auto leading-relaxed">
                              Have a question or feedback? We'd love to hear from you. Our team is here
                              to help customers across Bangladesh.
                         </p>
                    </motion.section>
               </section>
               {/* 2. Main Content Section (Form & Info) */}
               <section className="max-w-7xl mx-auto px-4 md:px-12 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                         {/* Left Side: Contact Form */}
                         <motion.div
                              initial={{ opacity: 0, x: -75 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: .9 }}
                              viewport={{ once: true }}
                              className="space-y-8">
                              <div>
                                   <h3 className="text-3xl font-normal bebas tracking-wider mb-2">Send Us A Message</h3>
                                   <p className="text-neutral-400">Fill out the form below and we'll get back to you as soon as possible.</p>
                              </div>
                              {/* contact form */}
                              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                             type="text"
                                             placeholder="Your Name"
                                             className={inputStyles}
                                        />
                                        <input
                                             type="email"
                                             placeholder="Your Email"
                                             className={inputStyles}
                                        />
                                   </div>
                                   <input
                                        type="text"
                                        placeholder="Subject"
                                        className={inputStyles}
                                   />
                                   <textarea
                                        placeholder="Your Message"
                                        rows="6"
                                        className={`${inputStyles} resize-none`}
                                   ></textarea>
                                   {/* button */}
                                   <button className="bg-primary hover:bg-primary/85 text-accent font-semibold py-4 px-10 rounded-sm flex items-center gap-3 uppercase tracking-widest text-sm transition-all duration-300">
                                        Send Message <FiSend size={16} />
                                   </button>
                              </form>
                         </motion.div>
                         {/* Right Side: Contact Info Cards */}
                         <motion.div
                              initial={{ opacity: 0, x: 75 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: .9 }}
                              viewport={{ once: true }}
                              className="space-y-8">
                              <div>
                                   <h3 className="text-3xl font-normal bebas tracking-wider mb-2">Contact Information</h3>
                                   <p className="text-neutral-400">Reach out to us through any of the following channels. We serve all 64 districts of Bangladesh!</p>
                              </div>

                              <div className="space-y-4">
                                   {
                                        contactInfo?.map((info, ind) => (
                                             <div key={ind} className="flex items-start gap-5 bg-base-200/50 border border-accent/10 p-5 md:p-7 rounded-xl hover:border-accent/15 transition-all duration-300 hover:translate-x-2 active:translate-x-2 group">
                                                  <div className="p-3.5 bg-primary/10 rounded-lg text-primary group-hover:scale-115 transition-all duration-300 group-active:scale-110">
                                                       {info.icon}
                                                  </div>
                                                  <div>
                                                       <h4 className="font-medium bebas text-base tracking-[2px] mb-1 group-hover:text-primary active:text-primary transition-all duration-200">{info.title}</h4>
                                                       <p className="text-neutral-400 text-sm">{info.info}</p>
                                                  </div>
                                             </div>
                                        ))
                                   }
                              </div>
                              {/* Delivery Alert Banner */}
                              <div className="bg-primary/10 border border-primary/35 p-6 rounded-xl flex flex-col gap-2.5">
                                   <div className="flex items-center gap-2 text-primary">
                                        <div className="w-3.5 h-3.5 bg-primary rounded-full animate-pulse"></div>
                                        <span className="text-[11px] font-bold uppercase tracking-widest">Delivery Available</span>
                                   </div>
                                   <p className="text-accent/60 text-xs">We deliver across all 64 districts of Bangladesh. Cash on Delivery available!</p>
                              </div>
                              {/* Follow Us link*/}
                              <div className="space-y-6">
                                   <h4 className="text-xl font-medium bebas tracking-[0.15em]">Follow Us</h4>
                                   <div className="flex gap-4">
                                        {
                                             socials?.map((social, ind) => (
                                                  <a key={ind} target='_blank' href={social.link} className="p-3 bg-secondary border border-accent/10 rounded-lg hover:bg-primary active:bg-primary transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 active:-translate-y-1.5 active:scale-105">
                                                       {social.icon}
                                                  </a>
                                             ))
                                        }
                                   </div>
                              </div>
                         </motion.div>
                    </div>
               </section>
          </div>
     );
};

export default Contact;