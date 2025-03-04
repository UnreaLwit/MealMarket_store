import React from "react";
import { motion } from "framer-motion";

const ButtonMotion = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      animate={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default ButtonMotion;
