import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceProps } from "@/types/types";
import { Service } from "@prisma/client";

const ServiceList = ({ data }: { data: Service[] }) => {
  return (
    <div className="grid lg:grid-col-5 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-6">
      {data.map((service, index) => {
        return <ServiceCard key={index} service={service} />;
      })}
    </div>
  );
};

export default ServiceList;
