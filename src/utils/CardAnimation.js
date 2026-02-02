export const containerVariants = {
     hidden: {},
     show: {
          transition: {
               staggerChildren: 0.16,
          },
     },
};

export const cardVariants = {
     hidden: { opacity: 0, y: 40 },
     show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};