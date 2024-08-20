import { ServiceProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }: { service: ServiceProps }) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="rounded-md py-3 bg-slate-100 hover:bg-slate-200 duration-300 flex gap-4 overflow-hidden"
    >
      <Image
        src={service.imageUrl}
        alt={service.title}
        width={100}
        height={100}
        className="w-1/5 object-contain aspect-video"
      />

      <div className="flex flex-col py-2">
        <h2 className="dark:text-slate-900">{service.title}</h2>
        <p className="text-[0.7rem] dark:text-slate-900">
          50 Doctors available
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;
