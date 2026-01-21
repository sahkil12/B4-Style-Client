
const Hero = () => {
     return (
          <section
               className="relative h-screen w-full bg-cover bg-center"
               style={{
                    backgroundImage:
                         "url('/src/assets/b4-style-hero-1.jpg')",
               }}
          >
               {/* Overlay */}
               <div className="absolute inset-0 bg-black/70"></div>

               {/* Content */}
               <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
                    <div className="max-w-xl text-white space-y-6">
                         <p className="text-sm tracking-[0.25em] text-primary">
                              NEW COLLECTION 2025
                         </p>

                         <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                              BORN FOR <br />
                              <span className="text-primary">STYLE</span>
                         </h1>

                         <p className="text-gray-300">
                              Elevate your wardrobe with premium streetwear. Bold designs for the
                              fashion-forward generation in Bangladesh.
                         </p>

                         <div className="flex gap-4 pt-2">
                              <button className="bg-primary px-6 py-3 text-sm font-semibold hover:bg-red-600 transition">
                                   SHOP NOW →
                              </button>
                              <button className="border border-white/40 px-6 py-3 text-sm font-semibold">
                                   OUR STORY
                              </button>
                         </div>

                         <div className="flex gap-10 pt-10">
                              <Stat title="10K+" label="HAPPY CUSTOMERS" />
                              <Stat title="200+" label="UNIQUE STYLES" />
                              <Stat title="64+" label="DISTRICTS" />
                         </div>
                    </div>
               </div>
          </section>
     );
};

const Stat = ({ title, label }) => (
     <div>
          <h3 className="text-primary text-2xl font-bold">{title}</h3>
          <p className="text-xs text-gray-400 tracking-wide">{label}</p>
     </div>
);

export default Hero;
