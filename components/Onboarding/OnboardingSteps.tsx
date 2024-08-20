"use client";

import { cn } from "@/lib/utils";
import {
  Hospital,
  HospitalIcon,
  PhoneCall,
  School2,
  User2,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PersonalInfoForm from "./PersonalInfoForm";
import ContactDetailsForm from "./ContactDetailsForm";
import EducationBackgroundForm from "./EducationBackgroundForm";
import PracticeDetailsForm from "./PracticeDetailsForm";
import { FaLightbulb } from "react-icons/fa";
import AdditionalInfoForm from "./AdditionalInfoForm";
import MedicalLicenseForm from "./MedicalLicenseForm";
import { useOnBoardingContext } from "@/context/context";

const OnboardingSteps = ({ id }: { id: string }) => {
  const params = useSearchParams();
  const page = params.get("page") ?? "personal-information";

  // GET CONTEXT DATA
  const { trackingNumber, doctorProfileId, savedDBData } =
    useOnBoardingContext();

  const steps = [
    {
      title: "Personal Information",
      page: "personal-information",
      icon: User2,
      component: (
        <PersonalInfoForm
          userId={id}
          title="Personal Information"
          description="Enter your personal information to get started and verify your identity"
          page={page}
          nextPage="contact-details"
          formId={doctorProfileId ? doctorProfileId : savedDBData.id}
        />
      ),
    },
    {
      title: "Contact Details",
      page: "contact-details",
      icon: PhoneCall,
      component: (
        <ContactDetailsForm
          page={page}
          title="Contact Details"
          description="Please fill out your contact details"
          nextPage="medical-license-information"
          userId={id}
          formId={doctorProfileId ? doctorProfileId : savedDBData.id}
        />
      ),
    },
    {
      title: "Medical License",
      page: "medical-license-information",
      icon: Hospital,
      component: (
        <MedicalLicenseForm
          page={page}
          title="Medical License Information"
          description="Enter your medical licensing information to verify your medical professionalism"
          nextPage="educational-background"
          userId={id}
          formId={doctorProfileId ? doctorProfileId : savedDBData.id}
        />
      ),
    },

    {
      title: "Educational Background",
      page: "educational-background",
      icon: School2,
      component: (
        <EducationBackgroundForm
          page={page}
          title="Educational Background"
          description="Please fill out your Educational Background"
          nextPage="practice-details"
          userId={id}
          formId={doctorProfileId ? doctorProfileId : savedDBData.id}
        />
      ),
    },
    {
      title: "Practice Details",
      page: "practice-details",
      icon: HospitalIcon,
      component: (
        <PracticeDetailsForm
          page={page}
          title="Practice Details"
          description="Please fill out your Practice Details"
          nextPage="additional-information"
          userId={id}
          formId={doctorProfileId ? doctorProfileId : savedDBData.id}
        />
      ),
    },
    {
      title: "Additional Information",
      page: "additional-information",
      icon: FaLightbulb,
      component: (
        <AdditionalInfoForm
          page={page}
          title="Additional Information"
          description="Please fill out your Additional Information"
          nextPage="final"
          userId={id}
          formId={doctorProfileId ? doctorProfileId : savedDBData.id}
        />
      ),
    },

    // {
    //   title: "Availability",
    //   page: "availability",
    //   icon: Timer,
    //   component: (
    //     <AvailabilityForm
    //       page={page}
    //       title="Availability Information"
    //       description="Please fill out your Availability Information"
    //       formId={doctorProfileId}
    //       userId={id}
    //     />
    //   ),
    // },
  ];

  const currentStep = steps.find((step) => step.page === page);

  return (
    <div className="grid grid-cols-12 mx-auto rounded-lg shadow-inner overflow-hidden bg-white border border-teal-900 min-h-screen">
      <div className="col-span-full sm:col-span-3 divide-y-2 divide-gray-200">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Link
              key={index}
              href={`/onboarding/${id}?page=${step.page}`}
              className={cn(
                "flex items-center gap-2 text-md  bg-teal-800 text-slate-100 py-3 px-4 shadow-inner",
                step.page === page
                  ? "bg-teal-800"
                  : "flex bg-slate-100 text-slate-800 py-3 px-4 shadow-inner"
              )}
            >
              <Icon className="w-5 h-5" />
              {step.title}
            </Link>
          );
        })}
      </div>
      <div className="col-span-full sm:col-span-9 p-4">
        {trackingNumber ||
          (savedDBData.id && (
            <p className="bg-white border border-slate-100 rounded-full text-slate-800 p-1.5 mb-5 text-center">
              Use Tracking Number:{" "}
              <span className="font-extrabold text-normal text-teal-800">
                {trackingNumber ? trackingNumber : savedDBData.trackingNumber}
              </span>{" "}
              <span className="text-sm">to resume application status.</span>
            </p>
          ))}
        {currentStep?.component}
      </div>
    </div>
  );
};

export default OnboardingSteps;
