"use client";

import { deleteService } from "@/actions/service";
import { DeleteAlert } from "@/components/DeleteAlert";
import { Service } from "@prisma/client";
import { PencilIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

const ServicesCard = ({ service }: { service: Service }) => {
  async function handleDelete(id: string) {
    await deleteService(id);
    toast.success("Service deleted successfully");
  }
  return (
    <div
      key={service.slug}
      className="dark:bg-[#151518] border border-slate-50 h-26 items-center justify-center rounded-sm shadow-sm mb-2 text-sm px-2 w-full inline-block"
    >
      <div className="flex items-center justify-between py-3">
        <Image
          src={service.imageUrl}
          width={512}
          height={512}
          alt={service.title}
          className="w-14 h-auto rounded-full"
        />
        <h2>{service.title}</h2>
      </div>
      <div className="flex items-center justify-end">
        <Link href={`/dashboard/services/update/${service.slug}`}>
          <PencilIcon className="w-6 h-6 text-yellow-500" />
        </Link>
        <DeleteAlert
          title="Service"
          id={service.id}
          handleDelete={() => handleDelete(service.id)}
        />
        {/* <Button variant="link" onClick={() => handleDelete(service.id)}>
          <Trash2 className="w-6 h-6 text-red-500" />
        </Button> */}
      </div>
    </div>
  );
};

export default ServicesCard;
