import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-base-200/70 p-10 rounded-2xl border border-accent/10 text-center max-w-xl w-full"
      >
        <FiCheckCircle className="text-green-500 mx-auto mb-5" size={70} />

        <h2 className="text-2xl font-bold mb-3">Payment Successful </h2>

        <p className="text-neutral-400 mb-8">
          Your order has been placed successfully.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="bg-primary text-accent py-3.5 rounded-lg font-semibold"
          >
            Go To Home
          </Link>

          <Link
            to="/"
            className="border border-primary text-primary py-3.5 rounded-lg font-semibold"
          >
            Go To Dashboard
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
