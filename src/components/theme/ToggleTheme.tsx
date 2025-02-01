"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

export function ToggleTheme() {
  const { setTheme } = useTheme();
  const [dark, setDark] = useState("light");

  const handleTheme = () => {
    if (dark === "dark") {
      setDark("light");
      setTheme("light");
    } else {
      setDark("dark");
      setTheme("dark");
    }
  };

  return (
    <Button
      className="shadow-md"
      onClick={() => handleTheme()}
      variant="outline"
      size="icon"
    >
      {dark === "dark" ? (
        <motion.div
          className="w-[1.2rem] h-[1.2rem]"
          initial={{ rotate: 90, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Moon />
        </motion.div>
      ) : (
        <motion.div
          className="w-[1.2rem] h-[1.2rem]"
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: -90, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Sun />
        </motion.div>
      )}
    </Button>
  );
}
