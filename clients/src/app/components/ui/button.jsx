'use client';
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";  // Utility for combining class names

// Define button variants and styles using class-variance-authority
const buttonVariants = cva(
  "inline-flex bg-[#2AA0CD] items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", 
  {
    variants: {
      variant: {
        default: "bg-[#2AA0CD] text-[#F5F5F5] hover:bg-[#2AA0CD]/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        orange: "bg-orange-600 text-white hover:bg-orange-500",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-emerald-600 text-white hover:bg-emerald-600/80"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Button component definition
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, type = "button", ...props }, ref) => {
    const Comp = asChild ? Slot : "button"; // Use Slot if asChild is true, otherwise use <button>
    
    return (
      <Comp
        type={!asChild ? type : undefined}  // Only apply type if it's a button, not when asChild is true
        className={cn(buttonVariants({ variant, size }), className)} // Combine button variants and any additional className
        ref={ref}
        {...props} // Spread additional props (e.g., onClick, children)
      />
    );
  }
);

// Display name for debugging purposes
Button.displayName = "Button";

export { Button, buttonVariants };
