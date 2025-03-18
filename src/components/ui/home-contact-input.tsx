import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "inline-flex md:h-12 w-full bg-transparent py-2 border-b border-b-[#2F2F37] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#62646C] focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 placeholder:xl:text-[22px] placeholder:lg:text-[20px] placeholder:md:text-[18px] placeholder:sm:text-[16px] placeholder:text-[14px] placeholder:uppercase text-white",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
