export type ServiceCardVariants = "pending" | "processing" | "canceled";

export type ServiceCardProps = {
  customer: {
    name: string;
    address: string;
  };
  dateTime: Date;
};
