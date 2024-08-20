"use client";

import { EducationBackgroundFormProps, StepFormProps } from "@/types/types";
import FormHeading from "../FormHeading";
import SubmitButton from "../FormInputs/SubmitButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import TextInput from "../FormInputs/TextInput";
import SelectInput from "../FormInputs/SelectInput";
import ArrayItemsInput from "../FormInputs/ArrayInput";
import MultipleFileUpload, { File } from "../FormInputs/MultipleFileUpload";
import { updateDoctorProfile } from "@/actions/onboarding";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { specialties } from "@/constants";
import { useOnBoardingContext } from "@/context/context";
import ShadSelectInput from "../FormInputs/ShadSelectInput";

const EducationBackgroundForm = ({
  page,
  title,
  description,
  formId,
  userId,
  nextPage,
}: StepFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState();
  const { educationBackgroundData, savedDBData, setEducationBackgroundData } =
    useOnBoardingContext();

  const initialOtherSpecialties =
    educationBackgroundData.otherSpecialties || savedDBData.otherSpecialties;
  const initialDocs =
    educationBackgroundData.boardCertificates || savedDBData.boardCertificates;

  const [otherSpecialties, setOtherSpecialties] = useState(
    initialOtherSpecialties
  );
  const [docs, setDocs] = useState<File[]>(initialDocs);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<EducationBackgroundFormProps>({
    defaultValues: {
      medicalSchool:
        educationBackgroundData.medicalSchool || savedDBData.medicalSchool,
      graduationYear:
        educationBackgroundData.graduationYear || savedDBData.graduationYear,
      primarySpecialization:
        educationBackgroundData.primarySpecialization ||
        savedDBData.primarySpecialization,
      page: educationBackgroundData.page || savedDBData.page,
    },
  });

  async function onSubmit(data: EducationBackgroundFormProps) {
    data.page = page;
    data.graduationYear = Number(data.graduationYear);
    data.otherSpecialties = otherSpecialties;
    data.boardCertificates = docs.map((doc) => doc.url);

    setIsLoading(true);

    try {
      const res = await updateDoctorProfile(formId, data);
      // Save data to the context api
      setEducationBackgroundData(data);
      if (res?.status === 201) {
        setIsLoading(false);
        toast.success("Education detail successfully updated");
        reset();
        router.push(`/onboarding/${userId}?page=${nextPage}`);
      } else {
        setIsLoading(false);
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Education Data not submitted, something went wrong");
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
          label="Medical School"
          register={register}
          name="medicalSchool"
          errors={errors}
          placeholder="Njala University"
        />

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <TextInput
              label="Graduation Year"
              register={register}
              name="graduationYear"
              errors={errors}
              placeholder="2010"
              type="number"
            />
          </div>
          <div className="sm:col-span-3">
            {/* <ShadSelectInput
              label="Select Specialty"
              optionTitle="Specialty"
              options={specialties}
              selectedOption={specialtyId}
              name="primarySpecialization"
              setSelectedOption={setSpecialtyId}
              className="w-full"
            /> */}
            <SelectInput
              label="Select Your Primary Specialties"
              register={register}
              name="primarySpecialization"
              options={specialties}
              errors={errors}
              selectedOption={selectedSpecialty}
              setSelectedOption={setSelectedSpecialty}
            />
          </div>
        </div>
        {/* ====== NAMES END ===== */}

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
          <ArrayItemsInput
            setItems={setOtherSpecialties}
            items={otherSpecialties}
            itemTitle="Other Specialties"
          />
        </div>

        <MultipleFileUpload
          label="Upload Academic Records (MAX: 4 Docs)"
          files={docs}
          setFiles={setDocs}
          endpoint="doctorProfessionalDocs"
          // name="boardCertificates"
        />

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

export default EducationBackgroundForm;
