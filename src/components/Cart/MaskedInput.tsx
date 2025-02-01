// components/MaskedInput.tsx
import * as React from "react";
import { IMaskInput } from "react-imask";
import { cn } from "@/lib/utils";

interface Props {
  mask: string;
  placeholder?: string; // placeholder опциональный
  className?: string;
  // ... другие свойства, которые вам нужны (value, onChange, onBlur, и т.д.)
  //  Если вы используете другие специфические свойства react-imask, добавьте их сюда
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const MaskedInput: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn("relative", className)}>
      <IMaskInput
        {...props}
        className={cn(
          "w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      />
    </div>
  );
};

export default MaskedInput;
