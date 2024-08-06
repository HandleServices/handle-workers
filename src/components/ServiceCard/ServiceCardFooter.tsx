import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Check, X } from "lucide-react";
import React, { forwardRef } from "react";
import ServiceCardFooterButton from "./ServiceCardFooterButton";
import { ServiceCardVariants } from "./types";

export interface ServiceCardFooterProps {
  variant: ServiceCardVariants;
  children?: React.ReactNode;
}

const variants = cva([], {
  variants: {
    variant: {
      pending: "",
      processing: "",
      canceled: "",
      finished: "",
    },
  },
});

const PendingVariant: React.FC = () => (
  <div className="w-full h-full flex flex-row gap-0">
    <ServiceCardFooterButton
      variant={"pending"}
      className="rounded-bl-[8px] flex items-center justify-center gap-2"
    >
      <p className="text-white uppercase font-bold tracking-widest">Aceitar</p>
      <Check className="text-white" strokeWidth={3} />
    </ServiceCardFooterButton>

    <ServiceCardFooterButton
      variant={"pending"}
      className="rounded-br-[8px] flex items-center justify-center gap-2"
    >
      <p className="text-white uppercase font-bold tracking-widest">Recusar</p>
      <X className="text-white" strokeWidth={2} />
    </ServiceCardFooterButton>
  </div>
);

const ProcessingVariant: React.FC = () => (
  <div className="w-full h-full flex flex-row gap-0">
    <ServiceCardFooterButton
      variant={"processing"}
      className="w-2/3 rounded-bl-[8px] pl-12 flex items-center justify-start gap-2"
    >
      <p className="text-white uppercase font-bold tracking-widest">Finalizar</p>
      <Check className="text-white" strokeWidth={3} />
    </ServiceCardFooterButton>

    <div
      className="w-1/3 rounded-br-[8px] pr-12 flex items-center justify-end gap-2"
    >
      <p className="text-white uppercase font-bold tracking-widest">Cancelar</p>
      <X className="text-white" strokeWidth={2} />
    </div>
  </div>
);

const CanceledVariant: React.FC = () => (
  <ServiceCardFooterButton
    variant={"canceled"}
    className="rounded-bl-[8px] flex items-center justify-center gap-2"
  >
    <p className="text-white uppercase font-bold tracking-widest">Cancelado</p>
    <X className="text-white" strokeWidth={2} />
  </ServiceCardFooterButton>
);

const FinishedVariant: React.FC = () => (
  <ServiceCardFooterButton
    variant={"finished"}
    className="rounded-b-[8px] pr-12 flex items-center justify-end gap-2"
  >
    <p className="text-white uppercase font-bold tracking-widest">Finalizado</p>
    <Check className="text-white" strokeWidth={3} />
  </ServiceCardFooterButton>
);

const ServiceCardFooterButtons = ({
  variant,
}: {
  variant: ServiceCardVariants;
}) => {
  let VariantComponent: React.FC = () => <React.Fragment />;

  switch (variant) {
    case "canceled":
      VariantComponent = CanceledVariant;
      break;
    case "pending":
      VariantComponent = PendingVariant;
      break;
    case "processing":
      VariantComponent = ProcessingVariant;
      break;
    case "finished":
      VariantComponent = FinishedVariant;
      break;
  }

  return <VariantComponent />;
};

const ServiceCardFooter = forwardRef<HTMLInputElement, ServiceCardFooterProps>(
  ({ variant }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full h-[32px] max-h-[32px] m-0 p-0 bg-[#C5CCD9] rounded-br-[8px] rounded-bl-[8px] flex flex-row gap-0",
          variants({ variant }),
        )}
      >
        <ServiceCardFooterButtons variant={variant} />
      </div>
    );
  },
);

ServiceCardFooter.displayName = "ServiceCardFooter";

export default ServiceCardFooter;
