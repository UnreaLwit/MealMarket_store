import React from "react";
import { motion } from "framer-motion";

const CounterMotion = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      animate={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default CounterMotion;
