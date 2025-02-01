import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, inputMode, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value;
      if (type === "text" && inputMode !== "numeric") {
        newValue = newValue.replace(/[^a-zA-Zа-яА-Я\s]/g, "");
      }
      if (inputMode === "numeric") {
        newValue = newValue.replace(/\D/g, "");
      }
      if (onChange) {
        e.target.value = newValue;
        onChange(e);
      }
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all",
          className
        )}
        ref={ref}
        inputMode={inputMode}
        onChange={handleChange} // Используем наш обработчик
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
