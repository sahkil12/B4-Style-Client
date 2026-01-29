import { FaShippingFast, FaAward, FaLock, FaHeadset } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { motion } from "framer-motion";

const features = [
     {
          icon: <FaShippingFast size={28} className="text-primary" />,
          title: "Fast Delivery",
          desc: "We deliver across all 64 districts of Bangladesh quickly and safely.",
     },
     {
          icon: <FaAward size={28} className="text-primary" />,
          title: "Premium Quality",
          desc: "High-quality fabrics and designs to make you stand out.",
     },
     {
          icon: <AiOutlineSafety size={29} className="text-primary" />,
          title: "Secure Payments",
          desc: "All transactions are 100% secure with trusted payment gateways.",
     },
     {
          icon: <FaHeadset size={28} className="text-primary" />,
          title: "24/7 Support",
          desc: "Our friendly team is here to help you anytime.",
     },
];

const containerVariants = {
     hidden: {},
     show: {
          transition: {
               staggerChildren: 0.09,
          },
     },
};

const cardVariants = {
     hidden: { opacity: 0, y: 38 },
     show: { opacity: 1, y: 0, transition: { duration: 0.34, ease: "easeIn" } },
};

const WhyB4Style = () => {
     return (
          <section className="py-20 md:py-24 bg-base-100">
               {/* title */}
               <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3 }}
                    className='flex flex-col md:max-w-[75%] mx-auto text-center mb-14 gap-6'>
                    <h4 className='text-primary text-sm sm:text-base font-medium uppercase tracking-[5px]'>Why B4 Style</h4>
                    <h2 className='text-4xl md:text-6xl bebas tracking-wider'>Why Choose Us</h2>
               </motion.section>
               <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView='show'
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 md:max-w-[75%] mx-auto px-6">
                    {features.map((feature, index) => (
                         <motion.div
                              key={index}
                              variants={cardVariants}
                              className="bg-secondary p-8 rounded-2xl flex flex-col items-center text-center gap-4 cursor-pointer transition-all duration-300 
                              drop-shadow-xl drop-shadow-primary/5 hover:drop-shadow-primary/30 active:drop-shadow-primary/30 hover:-translate-y-2 active:-translate-y-2
                              "
                         >
                              <span className="p-4 rounded-lg bg-primary/10">{feature.icon}</span>
                              <h3 className="font-semibold text-xl">{feature.title}</h3>
                              <p className="text-sm text-neutral-500">{feature.desc}</p>
                         </motion.div>
                    ))}
               </motion.div>
          </section>
     );
};

export default WhyB4Style;
