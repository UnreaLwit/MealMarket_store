import React from "react";
import { motion } from "framer-motion";

const ButtonMotion = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  );
};

export default ButtonMotion;
