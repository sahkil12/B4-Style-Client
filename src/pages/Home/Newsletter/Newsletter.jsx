import { FiSend } from "react-icons/fi";

const Newsletter = () => {
  return (
    <section className="bg-base-100 py-10 md:py-24 px-2">
      {/* Card Container */}
      <div className="max-w-4xl mx-auto bg-secondary border border-zinc-700 rounded-[18px] py-12 px-6 md:px-16 flex flex-col items-center text-center">
        {/* Subtitle */}
        <h4 className="text-primary text-xs md:text-sm font-medium tracking-[0.35em] uppercase mb-7">
          Stay Updated
        </h4>
        {/* Heading */}
        <h2 className="text-accent text-4xl md:text-5xl font-normal bebas tracking-wider mb-6">
          Join the B4 Style Family
        </h2>
        {/* Description */}
        <p className="text-neutral-400 text-sm md:text-base max-w-lg leading-relaxed mb-8">
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
            className="flex-grow bg-[#1c1c1c] border border-zinc-700 text-accent px-6 py-3.5 rounded-md focus:outline-none focus:border-primary transition-colors placeholder:text-neutral-500"
            required
          />
          <button 
            type="submit"
            className="bg-primary hover:bg-primary/85 cursor-pointer active:bg-primary/85 text-accent font-semibold px-8 py-3.5 rounded-md flex items-center justify-center gap-2 uppercase tracking-widest text-sm transition-all duration-300"
          >
            Subscribe <FiSend className="text-lg" />
          </button>
        </form>
        {/* Footer Disclaimer */}
        <p className="text-neutral-400 text-[10px] md:text-xs">
          By subscribing, you agree to our <span className="underline cursor-pointer">Privacy Policy</span>. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;