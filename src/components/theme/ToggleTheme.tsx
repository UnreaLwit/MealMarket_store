"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ButtonMotion from "../Motion/ButtonMotion";

export function ToggleTheme() {
  const { setTheme } = useTheme();
  const [dark, setDark] = useState("dark");

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
    <ButtonMotion>
      <Button
        className="shadow-md"
        onClick={() => handleTheme()}
        variant="outline"
        size="icon"
      >
        <Sun className="w-[1.2rem] h-[1.2rem] transition-all dark:-rotate-90 dark:scale-0 rotate-0 scale-100" />
        <Moon className="absolute w-[1.2rem] h-[1.2rem] transition-all dark:rotate-0 dark:scale-100 rotate-90 scale-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </ButtonMotion>
  );
}
