import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[13px] font-body font-medium uppercase tracking-[0.18em] transition-colors duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-charcoal text-ivory hover:bg-charcoal-soft",
        outline: "border border-charcoal/30 text-charcoal hover:border-charcoal",
        light: "bg-ivory text-charcoal hover:bg-white",
        "outline-light": "border border-ivory/50 text-ivory hover:border-ivory",
      },
      size: {
        default: "h-14 px-9",
        sm: "h-11 px-6 text-[11px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
