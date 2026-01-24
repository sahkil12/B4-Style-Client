import {
     LuTarget,
     LuEye,
     LuZap,
     LuMapPin,
     LuTruck
} from "react-icons/lu";


const About = () => {
     return (
          <div className="bg-base-100 text-accent">
               {/* 1. Hero Section: Our Story */}
               <section className="pt-36 md:pt-44 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                         <h4 className="text-primary text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6">
                              Our Story
                         </h4>
                         <h2 className="text-5xl md:text-7xl font-medium uppercase tracking-wider bebas mb-8 leading-none">
                              Born For Style
                         </h2>
                         <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                              We believe fashion is more than clothing—it's a statement. B4 Style
                              was created for the young generation of Bangladesh who dare to stand
                              out and express their unique identity.
                         </p>
                    </div>
               </section>
               {/* 2. Mission, Vision, Values */}
               <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                         {/* Mission */}
                         <div className="space-y-4">
                              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 text-[#ff0000]">
                                   <LuTarget size={24} />
                              </div>
                              <h3 className="text-xl font-bold uppercase tracking-wider">Our Mission</h3>
                              <p className="text-zinc-500 text-sm leading-relaxed">
                                   To redefine streetwear in Bangladesh by creating bold, premium pieces that empower the young generation to express their authentic selves.
                              </p>
                         </div>

                         {/* Vision */}
                         <div className="space-y-4">
                              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 text-[#ff0000]">
                                   <LuEye size={24} />
                              </div>
                              <h3 className="text-xl font-bold uppercase tracking-wider">Our Vision</h3>
                              <p className="text-zinc-500 text-sm leading-relaxed">
                                   To become Bangladesh's leading streetwear brand, inspiring the youth to embrace boldness and individuality in fashion.
                              </p>
                         </div>

                         {/* Values */}
                         <div className="space-y-4">
                              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 text-[#ff0000]">
                                   <LuZap size={24} />
                              </div>
                              <h3 className="text-xl font-bold uppercase tracking-wider">Our Values</h3>
                              <p className="text-zinc-500 text-sm leading-relaxed">
                                   Quality, authenticity, and innovation drive everything we do. We craft each piece with precision and passion for the style-conscious youth.
                              </p>
                         </div>
                    </div>
               </section>

               {/* 3. From Vision to Reality Section */}
               <section className="py-24 bg-[#050505]">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                         <div className="order-2 lg:order-1">
                              <h4 className="text-[#ff0000] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                                   The Beginning
                              </h4>
                              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
                                   From Vision To Reality
                              </h2>
                              <div className="space-y-6 text-zinc-400 text-sm leading-relaxed">
                                   <p>
                                        B4 Style was born from a simple idea: create clothing that speaks louder than words for the young generation of Bangladesh. Founded by Mustafa Tazwer Shakil, we set out to challenge the norms of conventional fashion in our country.
                                   </p>
                                   <p>
                                        Our journey began with a small collection of oversized tees and hoodies, each piece designed to make a statement. Today, we've grown into a trusted streetwear brand serving customers across all 64 districts of Bangladesh.
                                   </p>
                                   <p>
                                        Every piece in our collection tells a story of craftsmanship and attention to detail. We source premium materials and ensure quality that lasts, all while keeping our prices accessible for the youth.
                                   </p>
                              </div>
                              <button className="mt-10 bg-[#ff0000] hover:bg-white hover:text-black text-white font-bold py-4 px-10 text-xs uppercase tracking-[0.2em] transition-all duration-300">
                                   Explore Our Collection →
                              </button>
                         </div>

                         {/* Image Side with Badge */}
                         <div className="relative order-1 lg:order-2">
                              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                                   <img
                                        src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000&auto=format&fit=crop"
                                        alt="B4 Style Fashion"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                   />
                              </div>
                              {/* BD Badge */}
                              <div className="absolute -bottom-6 -left-6 bg-[#ff0000] p-6 rounded-xl shadow-2xl">
                                   <h3 className="text-3xl font-black italic">BD</h3>
                                   <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Made in Bangladesh</p>
                              </div>
                         </div>
                    </div>
               </section>

               {/* 4. Small Info Bar */}
               <div className="bg-zinc-900/50 border-y border-zinc-800 py-6">
                    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-10 md:gap-20 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
                         <div className="flex items-center gap-3 text-zinc-400">
                              <LuMapPin size={16} className="text-[#ff0000]" />
                              Based in: <span className="text-white">Patiya, Chittagong</span>
                         </div>
                         <div className="flex items-center gap-3 text-zinc-400">
                              <LuTruck size={16} className="text-[#ff0000]" />
                              Delivering to: <span className="text-white">All 64 Districts</span>
                         </div>
                    </div>
               </div>

               {/* 5. Stats Section */}
               <section className="bg-[#ff0000] py-16">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                         <div className="space-y-1">
                              <h2 className="text-4xl md:text-5xl font-black">10K+</h2>
                              <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Happy Customers</p>
                         </div>
                         <div className="space-y-1">
                              <h2 className="text-4xl md:text-5xl font-black">200+</h2>
                              <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Unique Styles</p>
                         </div>
                         <div className="space-y-1">
                              <h2 className="text-4xl md:text-5xl font-black">64</h2>
                              <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Districts Served</p>
                         </div>
                         <div className="space-y-1">
                              <h2 className="text-4xl md:text-5xl font-black">4.9</h2>
                              <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Customer Rating</p>
                         </div>
                    </div>
               </section>

          </div>
     );
};

export default About;