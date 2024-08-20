import { getSpecialtyBySlug } from "@/actions/specialty";
import SpecialtyForm from "@/components/SpecialtyForm";
import React from "react";

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const specialty = (await getSpecialtyBySlug(slug))?.data;
  return (
    <div>
      {specialty && specialty.slug && (
        <SpecialtyForm title="Update Specialty" initialData={specialty} />
      )}
    </div>
  );
};

export default page;
