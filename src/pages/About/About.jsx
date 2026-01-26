import {
     LuTarget,
     LuEye,
     LuZap,
     LuMapPin,
     LuTruck
} from "react-icons/lu";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import displayImage from '../../../public/assets/Others/about-display-pic.png'
import { motion } from 'motion/react';

const stats = [
     { title: "10K+", subtitle: "Happy Customers" },
     { title: "200+", subtitle: "Unique Styles" },
     { title: 64, subtitle: "Districts Served" },
     { title: 4.9, subtitle: "    Customer Rating" },
]

const Missions = [
     {
          icon: <LuTarget size={28} />,
          title: 'Our Mission',
          subtitle: "To redefine streetwear in Bangladesh by creating bold, premium pieces that empower the young generation to express their authentic selves."
     },
     {
          icon: <LuEye size={28} />,
          title: 'Our Vision',
          subtitle: "To become Bangladesh's leading streetwear brand, inspiring the youth to embrace boldness and individuality in fashion."
     },
     {
          icon: <LuZap size={28} />,
          title: 'Our Values',
          subtitle: "Quality, authenticity, and innovation drive everything we do. We craft each piece with precision and passion for the style-conscious youth."
     },
]

const containerVariants = {
     hidden: {},
     show: {
          transition: {
               staggerChildren: 0.15,
          },
     },
};

const cardVariants = {
     hidden: { opacity: 0, y: 40 },
     show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
     return (
          <div className="bg-base-100 text-accent">
               {/* 1. Hero Section: Our Story */}
               <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="pt-36 md:pt-44 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
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
               </motion.section>
               {/* 2. Mission, Vision, Values */}
               <div className="w-full bg-secondary">
                    <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto w-full">
                         <motion.div
                              variants={containerVariants}
                              initial="hidden"
                              whileInView="show"
                              viewport={{ once: true }}
                              className="grid grid-cols-1 md:grid-cols-3 gap-16">
                              {Missions?.map((mission, ind) => (
                                   <motion.div
                                        variants={cardVariants}
                                        key={ind}
                                        className="space-y-5">
                                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                             {mission.icon}
                                        </div>
                                        <h3 className="text-2xl font-medium bebas tracking-[2.5px]">{mission.title}</h3>
                                        <p className="text-neutral-400 text-[15px] font-medium leading-relaxed">
                                             {mission.subtitle}
                                        </p>
                                   </motion.div>
                              ))}
                         </motion.div>
                    </section>
               </div>
               {/* 3. From Vision to Reality Section */}
               <section className="py-24 ">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                         {/* text side */}
                         <motion.div
                              initial={{ opacity: 0, x: -70 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: .9 }}
                              viewport={{ once: true }}
                              className="order-2 lg:order-1">
                              <h4 className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-6">
                                   The Beginning
                              </h4>
                              <h2 className="text-4xl md:text-5xl font-medium bebas tracking-wider mb-6">
                                   From Vision To Reality
                              </h2>
                              <div className="space-y-6 text-neutral-400 text-base leading-relaxed">
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
                              <Link to={'/shop'}>
                                   <button className="mt-10 bg-primary hover:bg-primary/85 hover:scale-105 active:bg-primary/85 active:scale-105 text-accent font-bold py-3 sm:py-4 px-5 sm:px-7 text-[11px] sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2">Explore Our Collection<IoArrowForward size={20} /></button>
                              </Link>
                         </motion.div>
                         {/* Image Side with Badge */}
                         <motion.div
                              initial={{ opacity: 0, x: 70 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: .9 }}
                              viewport={{ once: true }}
                              className="relative order-1 lg:order-2">
                              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                                   <img
                                        src={displayImage}
                                        alt="B4 Style Fashion"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-600"
                                   />
                              </div>
                              {/* BD Badge */}
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.5 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   transition={{ duration: .5 }}
                                   viewport={{ once: true }}
                                   className="absolute -bottom-6 -left-4 md:-left-12 bg-primary p-7 rounded-md shadow-2xl">
                                   <h3 className="text-3xl font-black mb-1.5 italic">BD</h3>
                                   <p className="text-xs uppercase font-bold tracking-widest opacity-75">Made in Bangladesh</p>
                              </motion.div>
                         </motion.div>
                    </div>
               </section>
               {/* 4. Small Info Bar */}
               <div className="bg-base-200 border-t border-accent/15 py-14 md:py-20">
                    <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-start md:justify-center gap-8 md:gap-20 text-[11px] md:text-sm font-bold uppercase tracking-[0.16em]">
                         <div className="flex items-center gap-3 text-accent">
                              <LuMapPin size={22} className="text-primary" />
                              Based in: <span className="text-neutral-300/85">Patiya, Chittagong</span>
                         </div>
                         <div className="flex items-center gap-3  text-accent">
                              <LuTruck size={22} className="text-primary" />
                              Delivering to: <span className="text-neutral-300/85">All 64 Districts</span>
                         </div>
                    </div>
               </div>
               {/* 5. Stats Section */}
               <section className="bg-primary py-20">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                         {stats?.map((stat, ind) => (
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.6 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   transition={{ duration: .5, delay: .2 }}
                                   viewport={{ once: true }}
                                   key={ind} className="space-y-2">
                                   <h2 className="text-3xl sm:text-5xl font-black">{stat.title}</h2>
                                   <p className="text-xs uppercase font-bold tracking-widest opacity-80">{stat.subtitle}</p>
                              </motion.div>
                         ))}
                    </div>
               </section>
          </div>
     );
};

export default About;