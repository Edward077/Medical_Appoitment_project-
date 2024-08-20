import { getSymptomBySlug } from "@/actions/symptoms";
import SymptomForm from "@/components/SymptomForm";
import React from "react";

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const symptom = (await getSymptomBySlug(slug))?.data;
  return (
    <div>
      {symptom && symptom.slug && (
        <SymptomForm title="Update Symptom" initialData={symptom} />
      )}
    </div>
  );
};

export default page;
