"use client";

import { deleteSpecialty } from "@/actions/specialty";
import { DeleteAlert } from "@/components/DeleteAlert";
import { Specialty } from "@prisma/client";
import { PencilIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const SpecialtyCard = ({ specialty }: { specialty: Specialty }) => {
  async function handleDelete(id: string) {
    await deleteSpecialty(id);
    toast.success("Specialty deleted successfully");
  }
  return (
    <div
      key={specialty.slug}
      className="dark:bg-[#151518] border border-slate-50 h-26 items-center justify-center rounded-sm shadow-sm mb-2 text-sm px-2 w-full inline-block"
    >
      <div className="flex items-center justify-between">
        <h2>{specialty.title}</h2>
        <div className="flex items-center justify-center">
          <Link href={`/dashboard/specialties/update/${specialty.slug}`}>
            <PencilIcon className="w-6 h-6 text-yellow-500" />
          </Link>
          <DeleteAlert
            title="Specialty"
            id={specialty.id}
            handleDelete={() => handleDelete(specialty.id)}
          />
          {/* <Button onClick={() => handleDelete(specialty.id)} variant="link">
            <Trash2 className="w-6 h-6 text-red-500" />
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default SpecialtyCard;
