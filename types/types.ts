export type ServiceProps = {
  title: string;
  imageUrl: string;
  slug: string;
};

export type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  role: any;
  plan: any;
};

export type LoginInputProps = {
  email: string;
  password: string;
};

export type TextInputProps = {
  label: string;
  register: any;
  name: string;
  errors: any;
  placeholder?: string;
  type?: string;
  className?: string;
  page?: string;
  isRequired?: boolean;
};

export type SubmitButtonProps = {
  title: string;
  btnType?: "submit" | "reset" | "button" | undefined;
  isLoading: boolean;
  loadingTitle: string;
};

export type PersonalInfoFormProps = {
  firstName: string;
  lastName: string;
  middleName?: string;
  dob?: any;
  gender: string;
  profilePicture: string;
  bio: string;
  nationalId: string;
  passportNumber: string;
  passportExpiryDate?: any;
  issuingAuthority: string;
  page: string;
  userId?: string | undefined;
  trackingNumber: string;
};

export type MedicalLicenseInfoFormProps = {
  medicalLicense: string;
  medicalLicenseExpiry: any;
  page: string;
};

export type ContactFormProps = {
  email: string;
  phone: string;
  country: string;
  city: string;
  state: string;
  page: string;
};

export type EducationBackgroundFormProps = {
  medicalSchool: string;
  graduationYear: number;
  primarySpecialization: string[];
  otherSpecialties: any;
  boardCertificates: any;
  page: string;
};

export type PracticeInfoFormProps = {
  hospitalName: string;
  hospitalAddress: string;
  hospitalContact: string;
  hospitalEmail: string;
  hospitalWebsite?: string;
  hospitalHoursOfOperation: number;
  yearsOfExperience: number;
  servicesOffered: any;
  insuranceAccepted: string;
  languagesSpoken: any;
  page: string;
};

export type AdditionalDocumentsFormProps = {
  educationHistory: string;
  researchWork: any;
  additonalDocs: any;
  accomplishments?: string;
  page: string;
};

export type ServicesProps = {
  title: string;
  imageUrl: string;
  slug: string;
};

export type SymptomsProps = {
  title: string;
  slug: string;
};

export type SpecialtyProps = {
  title: string;
  slug: string;
};

export type StepFormProps = {
  page: string;
  title: string;
  description: string;
  userId?: string;
  nextPage?: string;
  formId?: string;
};

export type Stats = {
  doctors: string;
  patients: string;
  appointments: string;
  services: string;
};
