import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiHome, FiShoppingBag } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-100 text-accent flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        {/* 404 Number */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}    
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-widest text-primary leading-none mb-7"
        >
          404
        </motion.h1>
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="text-2xl md:text-4xl bebas tracking-wider mb-4"
        >
          Page Not Found
        </motion.h2>
        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-accent/70 text-sm md:text-base leading-relaxed mb-10"
        >
          The page you’re looking for doesn’t exist or has been moved.
          Let’s get you back to something stylish.
        </motion.p>
        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="flex items-center text-sm md:text-base gap-2 bg-primary text-accent px-8 py-2.5 font-semibold uppercase tracking-widest hover:bg-primary/90 transition-all"
          >
            <FiHome /> Home
          </Link>

          <Link
            to="/shop"
            className="flex items-center text-sm md:text-base gap-2 border border-accent/20 px-8 py-3 font-semibold uppercase tracking-widest hover:border-primary transition-all"
          >
            <FiShoppingBag /> Shop
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default NotFound;
