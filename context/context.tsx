"use client";

import {
  AdditionalDocumentsFormProps,
  ContactFormProps,
  EducationBackgroundFormProps,
  MedicalLicenseInfoFormProps,
  PersonalInfoFormProps,
  PracticeInfoFormProps,
} from "@/types/types";
import { DoctorProfile } from "@prisma/client";
// Steps for creating context api

import { ReactNode, createContext, useContext, useState } from "react";

// Define the shape of the data you want to track
interface IOnBoardingContextData {
  trackingNumber: string;
  doctorProfileId: string;
  setTrackingNumber: (value: any) => void;
  setDoctorProfileId: (value: any) => void;

  //======= TRACK FORM DATA =============//

  // Personal Form
  personalInfoData: PersonalInfoFormProps;
  setPersonalInfoData: (data: PersonalInfoFormProps) => void;

  // Contact Form
  contactDetailsData: ContactFormProps;
  setContactDetailsData: (data: ContactFormProps) => void;

  // Medical License
  medicalLicenseData: MedicalLicenseInfoFormProps;
  setMedicalLicenseData: (data: MedicalLicenseInfoFormProps) => void;

  // Education Background
  educationBackgroundData: EducationBackgroundFormProps;
  setEducationBackgroundData: (data: EducationBackgroundFormProps) => void;

  // Practices Background
  practiceBackgroundData: PracticeInfoFormProps;
  setPraticeBackgroundData: (data: PracticeInfoFormProps) => void;

  // Additional Background
  additionalDocumentsBackgroundData: AdditionalDocumentsFormProps;
  setAdditionalDocumentsBackgroundData: (
    data: AdditionalDocumentsFormProps
  ) => void;

  // Save the Data to the Context API
  savedDBData: any;
  setSavedDBData: (data: any) => void;
}

// Personal Info Initial Data
const initialPersonalInfoData: PersonalInfoFormProps = {
  firstName: "",
  lastName: "",
  middleName: "",
  dob: "",
  gender: "",
  profilePicture: "",
  bio: "",
  nationalId: "",
  passportNumber: "",
  passportExpiryDate: "",
  issuingAuthority: "",
  page: "",
  userId: "",
  trackingNumber: "",
};

// Contact Initial Information
const initialContactDetailsData: ContactFormProps = {
  email: "",
  phone: "",
  country: "",
  city: "",
  state: "",
  page: "",
};

// Medical License Initial Information
const initialMedicalLicenseData: MedicalLicenseInfoFormProps = {
  medicalLicense: "",
  medicalLicenseExpiry: "",
  page: "",
};

// Education Initial Information
const initialEducationBackgroundData: EducationBackgroundFormProps = {
  medicalSchool: "",
  graduationYear: 0,
  primarySpecialization: [],
  otherSpecialties: [],
  boardCertificates: [],
  page: "",
};

// Practice Background Initial Information
const initialPracticeBackgroundData: PracticeInfoFormProps = {
  hospitalName: "",
  hospitalAddress: "",
  hospitalContact: "",
  hospitalEmail: "",
  hospitalWebsite: "",
  hospitalHoursOfOperation: 0,
  yearsOfExperience: 0,
  servicesOffered: [],
  insuranceAccepted: "",
  languagesSpoken: [],
  page: "",
};

// Additional Documents Initial Information
const initialAdditionalDocumentsData: AdditionalDocumentsFormProps = {
  educationHistory: "",
  researchWork: [],
  additonalDocs: [],
  accomplishments: "",
  page: "",
};

// Initial Context data for the app
const initialContextData = {
  trackingNumber: "",
  doctorProfileId: "",
  setTrackingNumber: () => {},
  setDoctorProfileId: () => {},

  // Initialed Saved Data
  savedDBData: {},
  setSavedDBData: () => {},
  // Personal Info Form
  personalInfoData: initialPersonalInfoData,
  setPersonalInfoData: () => {},

  // Contact Form
  contactDetailsData: initialContactDetailsData,
  setContactDetailsData: () => {},

  medicalLicenseData: initialMedicalLicenseData,
  setMedicalLicenseData: () => {},

  educationBackgroundData: initialEducationBackgroundData,
  setEducationBackgroundData: () => {},

  practiceBackgroundData: initialPracticeBackgroundData,
  setPraticeBackgroundData: () => {},

  additionalDocumentsBackgroundData: initialAdditionalDocumentsData,
  setAdditionalDocumentsBackgroundData: () => {},
};

// Create and export the context
const OnBoardingContext =
  createContext<IOnBoardingContextData>(initialContextData);

// Create and export context provider
export function OnBoardingContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const [doctorProfileId, setDoctorProfileId] = useState<string>("");

  const [personalInfoData, setPersonalInfoData] =
    useState<PersonalInfoFormProps>(initialPersonalInfoData);
  const [contactDetailsData, setContactDetailsData] =
    useState<ContactFormProps>(initialContactDetailsData);
  const [medicalLicenseData, setMedicalLicenseData] =
    useState<MedicalLicenseInfoFormProps>(initialMedicalLicenseData);
  const [educationBackgroundData, setEducationBackgroundData] =
    useState<EducationBackgroundFormProps>(initialEducationBackgroundData);
  const [practiceBackgroundData, setPraticeBackgroundData] =
    useState<PracticeInfoFormProps>(initialPracticeBackgroundData);
  const [
    additionalDocumentsBackgroundData,
    setAdditionalDocumentsBackgroundData,
  ] = useState<AdditionalDocumentsFormProps>(initialAdditionalDocumentsData);
  const [savedDBData, setSavedDBData] = useState<any>({});

  // Get access to data in the entire app
  const contextValues = {
    trackingNumber,
    setTrackingNumber,
    doctorProfileId,
    setDoctorProfileId,

    // All OnBoarding Form
    personalInfoData,
    setPersonalInfoData,
    contactDetailsData,
    setContactDetailsData,
    medicalLicenseData,
    setMedicalLicenseData,
    educationBackgroundData,
    setEducationBackgroundData,
    practiceBackgroundData,
    setPraticeBackgroundData,
    additionalDocumentsBackgroundData,
    setAdditionalDocumentsBackgroundData,
    savedDBData,
    setSavedDBData,
  };
  return (
    <OnBoardingContext.Provider value={contextValues}>
      {children}
    </OnBoardingContext.Provider>
  );
}

// Create and export the context hook
export function useOnBoardingContext() {
  return useContext(OnBoardingContext);
}

export default OnBoardingContext;
