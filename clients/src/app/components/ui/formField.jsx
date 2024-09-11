"use client";
import * as React from "react";
import { cn } from "@/app/lib/utils";

const FormField = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={cn("flex flex-col items-center gap-[9px]", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export { FormField };