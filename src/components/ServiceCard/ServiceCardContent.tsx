import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { ServiceCardVariants } from "./types";

export interface ServiceCardContentProps {
  variant: ServiceCardVariants;
  children: React.ReactNode;
}

const variants = cva([], {
  variants: {
    variant: {
      pending: "",
      processing: "",
      canceled: "",
    },
  },
});

const ServiceCardContent = forwardRef<
  HTMLInputElement,
  ServiceCardContentProps
>(({ variant, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative w-[1100px] h-[64px] bg-white flex items-center pl-8",
        variants({ variant }),
      )}
    >
      {children}
    </div>
  );
});

ServiceCardContent.displayName = "ServiceCardContent";

export default ServiceCardContent;
