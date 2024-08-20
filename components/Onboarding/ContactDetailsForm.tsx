"use client";

import { ContactFormProps, StepFormProps } from "@/types/types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormHeading from "../FormHeading";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import toast from "react-hot-toast";
import { updateDoctorProfile } from "@/actions/onboarding";
import { useRouter } from "next/navigation";
import { useOnBoardingContext } from "@/context/context";

const ContactDetailsForm = ({
  page,
  title,
  description,
  formId,
  userId,
  nextPage,
}: StepFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { contactDetailsData, savedDBData, setContactDetailsData } =
    useOnBoardingContext();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormProps>({
    defaultValues: {
      email: contactDetailsData.email || savedDBData.email,
      phone: contactDetailsData.phone || savedDBData.phone,
      country: contactDetailsData.country || savedDBData.country,
      city: contactDetailsData.city || savedDBData.city,
      state: contactDetailsData.state || savedDBData.state,
      page: contactDetailsData.page || savedDBData.page,
    },
  });

  async function onSubmit(data: ContactFormProps) {
    data.page = page;
    setIsLoading(true);
    try {
      const res = await updateDoctorProfile(formId, data);
      // Save data to the context
      setContactDetailsData(data);
      if (res?.status === 201) {
        setIsLoading(false);
        toast.success("Contact detail successfully updated");
        router.push(`/onboarding/${userId}?page=${nextPage}`);
        // Extract the Contact detail from the updated profile
        console.log(data);
      } else {
        setIsLoading(false);
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Contact Data not submitted, something went wrong");
    }
    console.log(data);
  }
  return (
    <div className="w-full">
      <FormHeading title={title} description={description} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 py-4 mx-auto"
      >
        <TextInput
          label="Email address"
          register={register}
          name="email"
          errors={errors}
          placeholder="john.doe@gmail.com"
        />
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <TextInput
              label="Phone"
              register={register}
              name="phone"
              errors={errors}
              placeholder="1236343248"
            />
          </div>
          <div className="sm:col-span-3">
            <TextInput
              label="Country"
              register={register}
              name="country"
              errors={errors}
              placeholder="Country of birth"
            />
          </div>
        </div>
        {/* ====== NAMES END ===== */}

        {/* ====== NATIONAL ID, PASSPORT NUMBER & GENDER ===== */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <TextInput
              label="City"
              register={register}
              name="city"
              errors={errors}
              placeholder="City"
            />
          </div>
          <div className="sm:col-span-1">
            <TextInput
              label="State"
              register={register}
              name="state"
              errors={errors}
              placeholder="State"
            />
          </div>
        </div>
        {/* ====== NATIONAL ID, PASSPORT NUMBER & GENDER END ===== */}

        {/* ===== Submit Button ===== */}
        <div className="flex justify-end">
          <SubmitButton
            title="Save and Continue"
            btnType="submit"
            loadingTitle="Saving... please wait !"
            isLoading={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactDetailsForm;
