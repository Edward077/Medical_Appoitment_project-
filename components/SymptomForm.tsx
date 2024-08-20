"use client";

import { useForm } from "react-hook-form";
import { SymptomsProps } from "@/types/types";
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
  createMultipleSymptoms,
  createSymptom,
  updateSymptom,
} from "@/actions/symptoms";
import { Symptom } from "@prisma/client";

const SymptomForm = ({
  title,
  initialData,
}: {
  title: string;
  initialData?: Symptom;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const editingId = initialData?.id || "";

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SymptomsProps>({
    defaultValues: {
      title: initialData?.title,
    },
  });

  async function onSubmit(data: SymptomsProps) {
    setIsLoading(true);
    try {
      const slug = generateSlug(data.title);
      // data.imageUrl = imageUrl;
      data.slug = slug;
      if (editingId) {
        await updateSymptom(editingId, data);
        toast.success("Symptom updated successfully");
        setIsLoading(false);
        reset();
      } else {
        await createSymptom(data);
        toast.success("Symptom created successfully");
        setIsLoading(false);
        reset();
      }
      router.push("/dashboard/symptoms");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Symptom not created, Something went wrong");
    }
  }

  // async function handleCreateMultipleSymptoms() {
  //   setIsLoading(true);
  //   try {
  //     await createMultipleSymptoms();
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Symptoms not created, Something went wrong");
  //     setIsLoading(false);
  //   }
  // }

  return (
    <div className="w-full max-w-xl shadow bg-white rounded-md mt-10 mx-auto">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-2xl ml-3 font-bold">{title}</h2>
        <Button type="button" asChild variant="outline">
          <Link href="/dashboard/symptoms">
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
          placeholder="Symptom Title"
        />

        {/* ===== Submit Button ===== */}
        <div className="flex justify-end items-center py-3">
          {/* <Button type="button" onClick={handleCreateMultipleSymptoms}>
            {isLoading ? "Creating ..." : " Create Multiple Symptoms"}
          </Button> */}
          <SubmitButton
            title={editingId ? "Update Symptom" : "Create Symptom"}
            btnType="submit"
            loadingTitle={editingId ? "Updating..." : "Saving..."}
            isLoading={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default SymptomForm;
