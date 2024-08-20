"use client";

import { useForm } from "react-hook-form";
import { AdditionalDocumentsFormProps, StepFormProps } from "@/types/types";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { TextareaInput } from "../FormInputs/TextareaInput";
import FormHeading from "../FormHeading";
import MultipleFileUpload, { File } from "../FormInputs/MultipleFileUpload";
import { completeProfile, updateDoctorProfile } from "@/actions/onboarding";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useOnBoardingContext } from "@/context/context";

const AdditionalInfoForm = ({
  page,
  title,
  description,
  formId,
  userId,
  nextPage,
}: StepFormProps) => {
  const router = useRouter();
  const {
    additionalDocumentsBackgroundData,
    savedDBData,
    setAdditionalDocumentsBackgroundData,
  } = useOnBoardingContext();
  const [isLoading, setIsLoading] = useState(false);

  const initialResearchWork =
    additionalDocumentsBackgroundData.researchWork || savedDBData.researchWork;
  const initialDocs =
    additionalDocumentsBackgroundData.additonalDocs ||
    savedDBData.additonalDocs;

  const [researchWork, setResearchWork] = useState<File[]>(initialResearchWork);
  const [additionalDocs, setAdditionalDocs] = useState<File[]>(initialDocs);

  console.log("Form Id: ", formId);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<AdditionalDocumentsFormProps>({
    defaultValues: {
      educationHistory:
        additionalDocumentsBackgroundData.educationHistory ||
        savedDBData.educationHistory,
      researchWork:
        additionalDocumentsBackgroundData.researchWork ||
        savedDBData.researchWork,
      additonalDocs:
        additionalDocumentsBackgroundData.additonalDocs ||
        savedDBData.additonalDocs,
      accomplishments:
        additionalDocumentsBackgroundData.accomplishments ||
        savedDBData.accomplishments,
      page: additionalDocumentsBackgroundData.page || savedDBData.page,
    },
  });

  async function onSubmit(data: AdditionalDocumentsFormProps) {
    data.page = page;
    data.researchWork = researchWork.map((work) => work.url);
    data.additonalDocs = additionalDocs.map((doc) => doc.url);

    setIsLoading(true);

    try {
      const res = await completeProfile(formId, data);
      // Save data in the context
      setAdditionalDocumentsBackgroundData(data);
      if (res?.status === 201) {
        setIsLoading(false);
        toast.success("Additional Information Successfully updated");

        // Redirect to the dashbaord
        router.push("/authentication/login");
      } else {
        setIsLoading(false);
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Additional info Data not submitted, something went wrong");
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
        <TextareaInput
          label="Education History"
          name="educationHistory"
          placeholder="Education History"
          subText="Provide brief detail of your Education History"
          register={register}
          errors={errors}
          isRequired={true}
        />

        <TextareaInput
          label="Accomplishments"
          name="accomplishments"
          placeholder="Accomplishments"
          subText="We are proud of our Doctors and their works, share with us."
          register={register}
          errors={errors}
          isRequired={false}
        />

        <MultipleFileUpload
          label="Upload Research Work (MAX: 4 Docs - pdf)"
          files={researchWork}
          setFiles={setResearchWork}
          endpoint="researchDocs"
        />

        <MultipleFileUpload
          label="Upload Additional Documents (MAX: 4 Docs - pdf)"
          files={additionalDocs}
          setFiles={setAdditionalDocs}
          endpoint="additionalDocs"
        />
        {/* ====== NAMES END ===== */}

        {/* ===== Submit Button ===== */}
        <div className="flex justify-end">
          <SubmitButton
            title="Complete"
            btnType="submit"
            loadingTitle="Saving... please wait !"
            isLoading={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default AdditionalInfoForm;
