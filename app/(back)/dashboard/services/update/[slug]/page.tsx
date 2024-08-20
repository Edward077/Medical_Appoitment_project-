import { getServiceBySlug } from "@/actions/service";
import ServiceForm from "@/components/ServiceForm";
import React from "react";

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const service = (await getServiceBySlug(slug))?.data;
  return (
    <div>
      {service && service.slug && (
        <ServiceForm title="Update Service" initialData={service} />
      )}
    </div>
  );
};

export default page;
