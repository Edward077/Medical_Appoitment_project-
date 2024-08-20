"use client";

import { useForm } from "react-hook-form";
import { type PracticeInfoFormProps, StepFormProps } from "@/types/types";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import FormHeading from "../FormHeading";
import ArrayItemsInput from "../FormInputs/ArrayInput";
import { RadioButtonInput } from "../FormInputs/RadioButtonInput";
import { insuranceOptions } from "@/constants";
import { updateDoctorProfile } from "@/actions/onboarding";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useOnBoardingContext } from "@/context/context";

const PracticeDetailsForm = ({
  page,
  title,
  description,
  formId,
  userId,
  nextPage,
}: StepFormProps) => {
  const router = useRouter();
  const { practiceBackgroundData, savedDBData, setPraticeBackgroundData } =
    useOnBoardingContext();

  const initialServices =
    practiceBackgroundData.servicesOffered.length > 0
      ? practiceBackgroundData.servicesOffered
      : savedDBData.servicesOffered;
  const initialLangugaes =
    practiceBackgroundData.languagesSpoken.length > 0
      ? practiceBackgroundData.languagesSpoken
      : savedDBData.languagesSpoken;

  const [services, setServices] = useState(initialServices);
  const [languages, setLanguages] = useState(initialLangugaes);

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<PracticeInfoFormProps>({
    defaultValues: {
      hospitalName:
        practiceBackgroundData.hospitalName || savedDBData.hospitalName,
      hospitalAddress:
        practiceBackgroundData.hospitalAddress || savedDBData.hospitalAddress,
      hospitalContact:
        practiceBackgroundData.hospitalContact || savedDBData.hospitalContact,
      hospitalEmail:
        practiceBackgroundData.hospitalEmail || savedDBData.hospitalEmail,
      hospitalWebsite:
        practiceBackgroundData.hospitalWebsite || savedDBData.hospitalWebsite,
      hospitalHoursOfOperation:
        practiceBackgroundData.hospitalHoursOfOperation ||
        savedDBData.hospitalHoursOfOperation,
      yearsOfExperience:
        practiceBackgroundData.yearsOfExperience ||
        savedDBData.yearsOfExperience,
      insuranceAccepted:
        practiceBackgroundData.insuranceAccepted ||
        savedDBData.insuranceAccepted,
      page: practiceBackgroundData.page || savedDBData.page,
    },
  });

  async function onSubmit(data: PracticeInfoFormProps) {
    data.page = page;
    data.servicesOffered = services;
    data.languagesSpoken = languages;
    data.hospitalHoursOfOperation = Number(data.hospitalHoursOfOperation);
    data.yearsOfExperience = Number(data.yearsOfExperience);

    console.log(data);
    setIsLoading(true);

    try {
      const res = await updateDoctorProfile(formId, data);
      // Save data to the context api
      setPraticeBackgroundData(data);
      if (res?.status === 201) {
        setIsLoading(false);
        toast.success("Practice detail successfully updated");
        router.push(`/onboarding/${userId}?page=${nextPage}`);
        // Extract the Contact detail from the updated profile
        console.log(data);
      } else {
        setIsLoading(false);
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log("Practice Detail Error: ", error);
      toast.error("Practice Data not submitted, something went wrong");
    }
  }

  return (
    <div className="w-full">
      <FormHeading title={title} description={description} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 py-4 mx-auto"
      >
        {/* ====== NAMES ===== */}
        <TextInput
          label="Name of Hospital"
          register={register}
          name="hospitalName"
          errors={errors}
          placeholder="Adventist Health System"
        />

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <TextInput
              label="Hospital Address"
              register={register}
              name="hospitalAddress"
              errors={errors}
              placeholder="Waterloo Highway"
            />
          </div>
          <div className="sm:col-span-3">
            <TextInput
              label="Hospital Contact"
              register={register}
              name="hospitalContact"
              errors={errors}
              placeholder="123456789"
            />
          </div>
        </div>
        {/* ====== NAMES END ===== */}

        {/* ====== NATIONAL ID, PASSPORT NUMBER & GENDER ===== */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <TextInput
              label="Hospital Email"
              register={register}
              name="hospitalEmail"
              errors={errors}
              placeholder="official.email@domain.com"
            />
          </div>
          <div className="sm:col-span-1">
            <TextInput
              label="Hospital Website (Optional)"
              register={register}
              name="hospitalWebsite"
              errors={errors}
              placeholder="ahs.org"
              isRequired={false}
            />
          </div>
          <div className="sm:col-span-1">
            <TextInput
              label="Hospital Operational Hours"
              register={register}
              name="hospitalHoursOfOperation"
              errors={errors}
              type="number"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <ArrayItemsInput
              setItems={setServices}
              items={services}
              itemTitle="Services Offered"
            />
          </div>
          <div className="sm:col-span-1">
            <ArrayItemsInput
              setItems={setLanguages}
              items={languages}
              itemTitle="Languages Spoken"
            />
          </div>
        </div>
        {/* ====== NATIONAL ID, PASSPORT NUMBER & GENDER END ===== */}

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <TextInput
              label="Years of Experience"
              register={register}
              name="yearsOfExperience"
              errors={errors}
              type="number"
            />
          </div>
          <div className="sm:col-span-1">
            <RadioButtonInput
              radioOptions={insuranceOptions}
              title="Are you Insured"
              name="insuranceAccepted"
              register={register}
              errors={errors}
            />
          </div>
        </div>

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

export default PracticeDetailsForm;
