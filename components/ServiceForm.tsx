"use client";

import { useForm } from "react-hook-form";
import { ServicesProps } from "@/types/types";
import { useState } from "react";
import TextInput from "./FormInputs/TextInput";
import ImageInput from "./FormInputs/ImageInput";
import SubmitButton from "./FormInputs/SubmitButton";
import { Button } from "./ui/button";
import Link from "next/link";
import { X } from "lucide-react";
import generateSlug from "@/utils/generateSlug";
import {
  createMultipleServices,
  createService,
  updateService,
} from "@/actions/service";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Service } from "@prisma/client";

const ServiceForm = ({
  title,
  initialData,
}: {
  title: string;
  initialData?: Service;
}) => {
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ServicesProps>({
    defaultValues: {
      title: initialData?.title,
    },
  });

  const editingId = initialData?.id || "";
  const [isLoading, setIsLoading] = useState(false);
  const initialImageUrl = initialData?.imageUrl || "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);

  async function onSubmit(data: ServicesProps) {
    setIsLoading(true);
    try {
      const slug = generateSlug(data.title);
      data.imageUrl = imageUrl;
      data.slug = slug;
      if (editingId) {
        await updateService(editingId, data);
        toast.success("Service updated successfully");
        setIsLoading(false);
        reset();
      } else {
        await createService(data);
        toast.success("Service created successfully");
        setIsLoading(false);
        reset();
      }
      router.push("/dashboard/services");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Service not created, Something went wrong");
    }
  }

  // async function handleCreateMultipleServices() {
  //   setIsLoading(true);
  //   try {
  //     await createMultipleServices();
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Services not created, Something went wrong");
  //     setIsLoading(false);
  //   }
  // }

  return (
    <div className="w-full max-w-xl shadow bg-white rounded-md mt-10 mx-auto">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-2xl ml-3 font-bold">{title}</h2>
        <Button type="button" asChild variant="outline">
          <Link href="/dashboard/services">
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
          placeholder="Service Title"
        />

        <ImageInput
          label="Service Image"
          endpoint="serviceImage"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
        />

        {/* ===== Submit Button ===== */}
        <div className="flex justify-end items-center py-3">
          {/* <Button type="button" onClick={handleCreateMultipleServices}>
            {isLoading ? "Creating ..." : " Create Multiple Services"}
          </Button> */}
          <SubmitButton
            title={editingId ? "Update Service" : "Create Service"}
            btnType="submit"
            loadingTitle={editingId ? "Updating ..." : "Saving..."}
            isLoading={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
