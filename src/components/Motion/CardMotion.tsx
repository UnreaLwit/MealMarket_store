import React from "react";
import { motion } from "framer-motion";

const CardMotion = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: 0.5,
        transition: { duration: 0.3 },
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default CardMotion;
