"use client";

import { useForm, FieldErrors } from "react-hook-form";
import { StepFormProps, PersonalInfoFormProps } from "@/types/types";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { TextareaInput } from "../FormInputs/TextareaInput";
import { RadioButtonInput } from "../FormInputs/RadioButtonInput";
import FormHeading from "../FormHeading";
import toast from "react-hot-toast";
import ImageInput from "../FormInputs/ImageInput";
import { generateTrackingNumber } from "@/lib/generateTrackingNumber";
import { createDoctorProfile, updateDoctorProfile } from "@/actions/onboarding";
import { useRouter } from "next/navigation";
import { genderOptions } from "@/constants";
import { useOnBoardingContext } from "@/context/context";
import { CustomDatePicker } from "../FormInputs/CustomDatePicker";
import dayjs, { Dayjs } from "dayjs";
import CountrySelectInput from "../FormInputs/CountrySelectInput";

const PersonalInfoForm = ({
  page,
  title,
  description,
  userId,
  nextPage,
  formId = "",
}: StepFormProps) => {
  const router = useRouter();

  // const { register, handleSubmit, formState: { errors } } = useForm();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  // GET CONTEXT DATA
  const {
    trackingNumber,
    setTrackingNumber,
    doctorProfileId,
    setDoctorProfileId,
  } = useOnBoardingContext();

  const { personalInfoData, savedDBData, setPersonalInfoData } =
    useOnBoardingContext();
  const [isLoading, setIsLoading] = useState(false);

  const initialDob = personalInfoData.dob || savedDBData.dob;
  const initialPassportExpiry =
    personalInfoData.passportExpiryDate || savedDBData.passportExpiryDate;
  const initialProfileImage =
    personalInfoData.profilePicture || savedDBData.profilePicture;

  const [profileImage, setProfileImage] = useState(initialProfileImage);
  const [dob, setDob] = useState<Dayjs | null>(
    initialDob ? dayjs(initialDob) : null
  );
  const [pExpiry, setPExpiry] = useState<Dayjs | null>(
    initialPassportExpiry ? dayjs(initialPassportExpiry) : null
  );

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormProps>({
    defaultValues: {
      firstName: personalInfoData?.firstName || savedDBData?.firstName,
      lastName: personalInfoData?.lastName || savedDBData?.lastName,
      middleName: personalInfoData?.middleName || savedDBData?.middleName,
      gender: personalInfoData?.gender || savedDBData?.gender,
      bio: personalInfoData?.bio || savedDBData?.bio,
      nationalId: personalInfoData?.nationalId || savedDBData?.nationalId,
      passportNumber:
        personalInfoData?.passportNumber || savedDBData?.passportNumber,
      issuingAuthority:
        personalInfoData?.issuingAuthority || savedDBData?.issuingAuthority,
      page: personalInfoData?.page || savedDBData?.page,
      userId: personalInfoData?.userId || savedDBData?.userId,
      trackingNumber:
        personalInfoData?.trackingNumber || savedDBData?.trackingNumber,
    },
  });

  // const mapErrors = (errors: FieldErrors<PersonalInfoFormProps>) => {
  //   const errorMap: { [key: string]: string | undefined } = {};
  //   for (const key in errors) {
  //     if (errors.hasOwnProperty(key)) {
  //       errorMap[key] = errors[key]?.message;
  //     }
  //   }
  //   return errorMap;
  // };

  async function onSubmit(data: PersonalInfoFormProps) {
    setIsLoading(true);
    if (!dob) {
      toast.error("Date of Birth is required");
      setIsLoading(false);
      return;
    }
    if (!pExpiry) {
      toast.error("Passport Date is required");
      setIsLoading(false);
      return;
    }
    if (!profileImage) {
      toast.error("Your profile image is required");
      setIsLoading(false);
      return;
    }

    data.userId = userId as string;
    data.dob = dob.toDate();
    data.passportExpiryDate = pExpiry.toDate();
    data.trackingNumber = generateTrackingNumber();
    data.profilePicture = profileImage;
    data.page = page;

    try {
      if (formId) {
        const res = await updateDoctorProfile(
          `${formId ? formId : savedDBData.id}`,
          data
        );

        if (res && res.status === 201) {
          setIsLoading(false);
          toast.success("Doctor profile successfully updated");

          setTrackingNumber(res.data?.trackingNumber ?? "");
          setDoctorProfileId(res.data?.id ?? "");
          reset();
          router.push(`/onboarding/${userId}?page=${nextPage}`);
          console.log(res.data);
        } else {
          setIsLoading(false);
          throw new Error("Something went wrong");
        }
      } else {
        const res = await createDoctorProfile(data);
        // Save Data in the Context
        setPersonalInfoData(data);

        if (res.status === 201) {
          setIsLoading(false);
          toast.success("Doctor profile successfully created");

          // const { data } = res;

          setTrackingNumber(res.data?.trackingNumber ?? "");
          setDoctorProfileId(res.data?.id ?? "");

          router.push(`/onboarding/${userId}?page=${nextPage}`);
          console.log(res.data);
        } else {
          setIsLoading(false);
          throw new Error("Something went wrong");
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <div className="w-full">
      <FormHeading title={title} description={description} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 py-4 mx-auto"
      >
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <TextInput
              label="Last Name"
              register={register}
              name="lastName"
              errors={errors}
              placeholder="Doe"
            />
          </div>
          <div className="sm:col-span-1">
            <TextInput
              label="First Name"
              register={register}
              name="firstName"
              errors={errors}
              placeholder="John"
            />
          </div>
          <div className="sm:col-span-1">
            <TextInput
              label="Middle Name(s)"
              register={register}
              name="middleName"
              errors={errors}
              placeholder="Other names"
              isRequired={false}
            />
          </div>
        </div>
        {/* ====== NATIONAL ID, PASSPORT NUMBER & GENDER ===== */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <TextInput
              label="National ID Number"
              register={register}
              name="nationalId"
              errors={errors}
              placeholder="V6YSDHI"
            />
          </div>
          <div className="sm:col-span-1">
            <TextInput
              label="Passport Number"
              register={register}
              name="passportNumber"
              errors={errors}
              placeholder="UE89324"
            />
          </div>
          <div className="sm:col-span-1">
            <RadioButtonInput
              radioOptions={genderOptions}
              title="Gender"
              name="gender"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        {/* ====== NATIONAL ID, PASSPORT NUMBER & GENDER END ===== */}

        {/* ====== DATES ===== */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <CustomDatePicker
              title="Date of Birth"
              date={dob}
              setDate={setDob}
              className="w-full"
              errors={errors}
            />
          </div>
          <div className="sm:col-span-1">
            <CustomDatePicker
              title="Passport Expiry Date"
              date={pExpiry}
              setDate={setPExpiry}
              className="w-full"
              errors={errors}
            />
          </div>
        </div>
        {/* ====== DATE OF BIRTH END ===== */}

        <TextInput
          label="Passport Issuing Authority"
          register={register}
          name="issuingAuthority"
          errors={errors}
          placeholder="Sierra Leone"
        />

        {/* <CountrySelectInput
          label="Passport Issuing Authority"
          country={country}
          setCountry={setCountry}
          region={region}
          setRegion={setRegion}
          name="issuingAuthority"
          errors={errors}
        /> */}
        {/* ====== PASSPORT END ===== */}

        {/* ===== BIO ====== */}
        <TextareaInput
          label="Biography"
          placeholder="Your Biography"
          name="bio"
          subText="Tell us a brief and concise detail about you"
          register={register}
          errors={errors}
          isRequired={false}
        />
        {/* ===== BIO END ====== */}

        <ImageInput
          label="Profile Image"
          endpoint="doctorProfileImage"
          imageUrl={profileImage}
          setImageUrl={setProfileImage}
        />

        {/* ===== Submit Button ===== */}
        <div className="flex justify-end">
          <SubmitButton
            title="Save and Continue"
            btnType="submit"
            loadingTitle="Saving Data ... Please Wait !!!"
            isLoading={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
