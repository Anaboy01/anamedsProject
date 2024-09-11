"use client";
import * as React from "react";
import { cn } from "@/app/lib/utils";
const Input = React.forwardRef(
  ({ className, type, placeHolder, ...props }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeHolder}
        className={cn(
          "py-[24px] px-[20px] flex h-10 w-full rounded-md border border-input bg-background  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
