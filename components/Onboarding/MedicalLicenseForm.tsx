"use client";

import React, { useState } from "react";
import FormHeading from "../FormHeading";
import SubmitButton from "../FormInputs/SubmitButton";
import { DatePickerInput } from "../FormInputs/DatePickerInput";
import TextInput from "../FormInputs/TextInput";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { MedicalLicenseInfoFormProps, StepFormProps } from "@/types/types";
import { updateDoctorProfile } from "@/actions/onboarding";
import { useRouter } from "next/navigation";
import { useOnBoardingContext } from "@/context/context";
import { CustomDatePicker } from "../FormInputs/CustomDatePicker";
import dayjs, { Dayjs } from "dayjs";

const MedicalLicenseForm = ({
  page,
  title,
  description,
  formId,
  userId,
  nextPage,
}: StepFormProps) => {
  const router = useRouter();
  const { medicalLicenseData, savedDBData, setMedicalLicenseData } =
    useOnBoardingContext();
  const [isLoading, setIsLoading] = useState(false);

  const initialMedicalLicenseExpiryDate =
    medicalLicenseData.medicalLicenseExpiry || savedDBData.medicalLicenseExpiry;
  // const [mExpiry, setMExpiry] = useState<Date>(initialMedicalLicenseExpiryDate);
  const [mExpiry, setMExpiry] = useState<Dayjs | null>(
    initialMedicalLicenseExpiryDate
      ? dayjs(initialMedicalLicenseExpiryDate)
      : null
  );

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<MedicalLicenseInfoFormProps>({
    defaultValues: {
      medicalLicense:
        medicalLicenseData.medicalLicense || savedDBData.medicalLicense,
      medicalLicenseExpiry:
        medicalLicenseData.medicalLicenseExpiry ||
        savedDBData.medicalLicenseExpiry,
      page: medicalLicenseData.page || savedDBData.page,
    },
  });

  async function onSubmit(data: MedicalLicenseInfoFormProps) {
    if (!mExpiry) {
      toast.error("Medical License Expiry Date is required");
      return;
    }
    data.medicalLicenseExpiry = mExpiry;
    data.page = page;

    setIsLoading(true);
    try {
      const res = await updateDoctorProfile(formId, data);
      // Save data in the context
      setMedicalLicenseData(data);
      if (res?.status === 201) {
        setIsLoading(false);
        toast.success("Medical detail successfully updated");
        router.push(`/onboarding/${userId}?page=${nextPage}`);
        // Extract the Contact detail from the updated profile
        console.log(data);
      } else {
        setIsLoading(false);
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Data not submitted, something went wrong");
    }
    console.log(data);
  }

  return (
    <div className="w-full mt-10">
      <FormHeading title={title} description={description} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 py-4 mx-auto"
      >
        {/* ===== MEDICAL LICENSE ====== */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <TextInput
              label="Medical License Number"
              register={register}
              name="medicalLicense"
              errors={errors}
              placeholder="Medical License"
            />
          </div>
          <div className="sm:col-span-3">
            <CustomDatePicker
              title="Medical License Expiry Date"
              date={mExpiry}
              setDate={setMExpiry}
              className="w-full"
              errors={errors}
            />
            {/* <DatePickerInput
              title="Medical License Expiry Date"
              date={mExpiry}
              setDate={setMExpiry}
              className="w-full"
              errors={errors}
            /> */}
          </div>
        </div>
        {/* ===== MEDICAL LICENSE END ====== */}

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

export default MedicalLicenseForm;
