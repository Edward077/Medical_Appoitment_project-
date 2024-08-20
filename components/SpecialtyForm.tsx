"use client";

import { useForm } from "react-hook-form";
import { SpecialtyProps } from "@/types/types";
import { useState } from "react";
import TextInput from "./FormInputs/TextInput";
import SubmitButton from "./FormInputs/SubmitButton";
import { Button } from "./ui/button";
import Link from "next/link";
import { X } from "lucide-react";
import generateSlug from "@/utils/generateSlug";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  createMultipleSpecialties,
  createSpecialty,
  updateSpecialty,
} from "@/actions/specialty";
import { Specialty } from "@prisma/client";

const SpecialtyForm = ({
  title,
  initialData,
}: {
  title: string;
  initialData?: Specialty;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const editingId = initialData?.id || "";
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SpecialtyProps>({
    defaultValues: {
      title: initialData?.title,
    },
  });

  async function onSubmit(data: SpecialtyProps) {
    setIsLoading(true);
    try {
      const slug = generateSlug(data.title);
      data.slug = slug;
      if (editingId) {
        await updateSpecialty(editingId, data);
        toast.success("Specialty updated successfully");
        setIsLoading(false);
        reset();
      } else {
        await createSpecialty(data);
        toast.success("Specialty created successfully");
        setIsLoading(false);
        reset();
      }
      router.push("/dashboard/specialties");
    } catch (error) {
      setIsLoading(false);
      toast.error("Service not created, Something went wrong");
    }
  }

  // async function handleCreateMultipleSpecialties() {
  //   setIsLoading(true);
  //   try {
  //     await createMultipleSpecialties();
  //     setIsLoading(false);
  //     reset();
  //     router.push("/dashboard/specialties");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Specialties not created, Something went wrong");
  //     setIsLoading(false);
  //   }
  // }

  return (
    <div className="w-full max-w-xl shadow bg-white rounded-md mt-10 mx-auto">
      <div className="flex items-center justify-between p-4">
        {/* <Button onClick={handleCreateMultipleSpecialties}>
          {isLoading ? "Creating ..." : " Create Multiple Services"}
        </Button> */}
        <h2 className="text-2xl ml-3 font-bold">{title}</h2>
        <Button asChild variant="outline">
          <Link href="/dashboard/specialties">
            <X className="w-5 h-5" />
          </Link>
        </Button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 py-2 mx-auto px-8"
      >
        <TextInput
          label="Title"
          register={register}
          name="title"
          errors={errors}
          placeholder="Specialty Title"
        />

        {/* ===== Submit Button ===== */}
        <div className="flex justify-end py-3">
          <SubmitButton
            title={editingId ? "Update Specialty" : "Create Specialty"}
            btnType="submit"
            loadingTitle={editingId ? "Updating..." : "Saving..."}
            isLoading={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default SpecialtyForm;
