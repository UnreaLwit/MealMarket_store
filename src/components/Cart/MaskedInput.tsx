import * as React from "react";
import { IMaskInput } from "react-imask";
import { cn } from "@/lib/utils";
import { TMaskedInputProps } from "@/types/types";

const MaskedInput = ({ className, ...props }: TMaskedInputProps) => {
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
