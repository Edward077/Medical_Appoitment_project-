"use client";

import { deleteSymptom } from "@/actions/symptoms";
import { DeleteAlert } from "@/components/DeleteAlert";
import { Symptom } from "@prisma/client";
import { PencilIcon } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

const SymptomsCard = ({ symptom }: { symptom: Symptom }) => {
  async function handleDelete(id: string) {
    await deleteSymptom(id);
    toast.success("Symptom deleted successfully");
  }
  return (
    <div
      key={symptom.slug}
      className="dark:bg-[#151518] border border-slate-50 h-26 items-center justify-center rounded-sm shadow-sm mb-2 text-sm px-2 w-full inline-block"
    >
      <div className="flex items-center justify-between py-3">
        <h2>{symptom.title}</h2>

        <div className="flex items-center justify-end">
          <Link href={`/dashboard/symptoms/update/${symptom.slug}`}>
            <PencilIcon className="w-6 h-6 text-yellow-500" />
          </Link>
          <DeleteAlert
            title="Symptom"
            id={symptom.id}
            handleDelete={() => handleDelete(symptom.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default SymptomsCard;
