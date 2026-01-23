import React from 'react';
import { FiSend } from "react-icons/fi";

const Newsletter = () => {
  return (
    <section className="bg-black py-20 px-5">
      {/* Inner Card Container */}
      <div className="max-w-5xl mx-auto bg-[#0f0f0f] border border-zinc-800 rounded-[20px] py-16 px-6 md:px-20 flex flex-col items-center text-center">
        
        {/* Red Subtitle */}
        <h4 className="text-[#ff0000] text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-6">
          Stay Updated
        </h4>

        {/* Main Heading */}
        <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
          Join the B4 Style Family
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-sm md:text-base max-w-lg leading-relaxed mb-10">
          Subscribe to our newsletter and be the first to know about new arrivals, 
          exclusive offers, and style tips.
        </p>

        {/* Form Area */}
        <form 
          className="w-full max-w-xl flex flex-col md:flex-row gap-4 mb-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow bg-[#1a1a1a] border border-zinc-800 text-white px-6 py-4 rounded-md focus:outline-none focus:border-red-600 transition-colors placeholder:text-zinc-600"
            required
          />
          <button 
            type="submit"
            className="bg-[#ff0000] hover:bg-[#d90000] text-white font-bold px-8 py-4 rounded-md flex items-center justify-center gap-3 uppercase tracking-widest text-sm transition-all duration-300"
          >
            Subscribe <FiSend className="text-lg" />
          </button>
        </form>

        {/* Footer Disclaimer */}
        <p className="text-zinc-500 text-[10px] md:text-xs">
          By subscribing, you agree to our <span className="underline cursor-pointer">Privacy Policy</span>. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;