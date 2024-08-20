import AdvancedSettings from "@/components/Dashboard/Settings/AdvancedSettings";
import GeneralSettings from "@/components/Dashboard/Settings/GeneralSettings";
import IntegrationsSettings from "@/components/Dashboard/Settings/IntegrationsSettings";
import OrganizationSettings from "@/components/Dashboard/Settings/OrganizationSettings";
import SecuritySettings from "@/components/Dashboard/Settings/SecuritySettings";
import SupportSettings from "@/components/Dashboard/Settings/SupportSettings";

import {
  AlarmClock,
  CalendarHeart,
  Check,
  File,
  Globe2Icon,
  HomeIcon,
  Hospital,
  LineChart,
  Linkedin,
  Mailbox,
  ScatterChart,
  Settings,
  SettingsIcon,
  ShoppingBag,
  SquareActivity,
  TimerIcon,
  User,
  Users2,
  UsersIcon,
} from "lucide-react";
import { FaInstagram, FaLongArrowAltRight, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export const specialties = [
  {
    label: "Mental Health",
    value: "mental health",
  },
  {
    label: "Therapist",
    value: "therapist",
  },
];

export const genderOptions = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

export const insuranceOptions = [
  {
    label: "Yes",
    value: "yes",
  },
  {
    label: "No",
    value: "no",
  },
];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Find Doctors", href: "/find-doctors" },
  { name: "Services", href: "/services" },
  { name: "Tele-Health", href: "/tele-health" },
  { name: "In-Person Visit", href: "/inperson-visit" },
  { name: "About Us", href: "/about-us" },
  { name: "Become a Service Provider", href: "/join/doctors" },
];

// ==== SIDEBAR LINKS =====
export const sidebarLinks = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: HomeIcon,
  },
  {
    title: "Appointments",
    path: "/dashboard/appointments",
    icon: TimerIcon,
    badgeCount: 9,
  },
  {
    title: "Products",
    path: "/dashboard/products",
    icon: Hospital,
  },
  {
    title: "Orders",
    path: "/dashboard/orders",
    icon: ShoppingBag,
    badgeCount: 7,
  },
  {
    title: "Customers",
    path: "/dashboard/appointments",
    icon: Users2,
  },
  {
    title: "Analytics",
    path: "/dashboard/analytics",
    icon: ScatterChart,
  },
  {
    title: "Reports",
    path: "/dashboard/reports",
    icon: LineChart,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Website",
    path: "/",
    icon: Globe2Icon,
  },
];

export const roles = {
  // ===== USER LINKS =====
  USERLINKS: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: HomeIcon,
    },
    {
      title: "My Appointments",
      path: "/dashboard/user/my-appointments",
      icon: AlarmClock,
    },
    {
      title: "Settings",
      path: "/dashboard/user/settings",
      icon: Settings,
    },
    {
      title: "Support",
      path: "/dashboard/user/support",
      icon: Linkedin,
    },
  ],

  // ===== ADMIN LINKS =====
  ADMINLINKS: [
    {
      title: "Dasboard",
      path: "/dashboard",
      icon: HomeIcon,
    },
    {
      title: "Appointments",
      path: "/dashboard/appointments",
      icon: AlarmClock,
    },
    {
      title: "Doctors",
      path: "/dashboard/doctors",
      icon: UsersIcon,
    },
    {
      title: "Patients",
      path: "/dashboard/patients",
      icon: SquareActivity,
    },
    {
      title: "Settings",
      path: "/dashboard/settings",
      icon: SettingsIcon,
    },
  ],

  // ===== DOCTOR LINKS =====
  DOCTORLINKS: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: HomeIcon,
    },
    {
      title: "Appointments",
      path: "/dashboard/appointments",
      icon: AlarmClock,
    },
    {
      title: "Patients",
      path: "/dashboard/patients",
      icon: SquareActivity,
    },
    {
      title: "Tasks",
      path: "/dashboard/doctor/tasks",
      icon: File,
    },
    {
      title: "Inbox",
      path: "/dashboard/doctor/inbox",
      icon: Mailbox,
    },
    {
      title: "Settings",
      path: "/dashboard/ settings",
      icon: Settings,
    },
    {
      title: "Website",
      path: "/",
      icon: Globe2Icon,
    },
  ],
};

export const megaMenu = [
  {
    title: "Top Booked",
    services: [
      {
        title: "Tele-Health",
        slug: "tele-health",
        description:
          "Remote healthcare services using digital technology for convenient access to medical consultations, advice, and monitoring from anywhere.",
      },
      {
        title: "Video Prescription Refill",
        slug: "video-prescription-refill",
        description:
          "Enables patients to renew medications via secure online video consultations, offering convenient access to healthcare without in-person visits.",
      },
      {
        title: "In-Person Doctor Visit",
        slug: "in-person-doctor-visit",
        description:
          "An in-person doctor visit is when you meet with a healthcare provider at a medical facility for examination, advice, and treatment.",
      },
      {
        title: "UTI Consultation",
        slug: "uti-consultation",
        description:
          "Expert care for urinary tract infections. Fast, personalized treatment plans for your comfort and well-being.",
      },
      {
        title: "ED Consultation",
        slug: "ed-consultation",
        description:
          "ED Consultation provides discreet guidance and personalized solutions for erectile dysfunction, supporting sexual health and well-being.",
      },
      {
        title: "Mental Health Consultation",
        slug: "mental-health-consultation",
        description:
          "Mental Health Consultation offers confidential support and guidance for mental well-being. Receive assessments, advice, and personalized recommendations to address your concerns.",
      },
      {
        title: "Urgent Care Visit",
        slug: "urgent-care-visit",
        description:
          "Urgent Care Visits offer quick treatment for non-life-threatening conditions, providing convenient access to medical care without the need for an emergency room visit.",
      },
    ],
  },

  {
    title: "Doctors",
    services: [
      {
        title: "Tele-Health",
        slug: "tele-health",
        description:
          "Remote healthcare services using digital technology for convenient access to medical consultations, advice, and monitoring from anywhere.",
      },
      {
        title: "Video Prescription Refill",
        slug: "video-prescription-refill",
        description:
          "Enables patients to renew medications via secure online video consultations, offering convenient access to healthcare without in-person visits.",
      },
      {
        title: "In-Person Doctor Visit",
        slug: "in-person-doctor-visit",
        description:
          "An in-person doctor visit is when you meet with a healthcare provider at a medical facility for examination, advice, and treatment.",
      },
      {
        title: "UTI Consultation",
        slug: "uti-consultation",
        description:
          "Expert care for urinary tract infections. Fast, personalized treatment plans for your comfort and well-being.",
      },
      {
        title: "ED Consultation",
        slug: "ed-consultation",
        description:
          "ED Consultation provides discreet guidance and personalized solutions for erectile dysfunction, supporting sexual health and well-being.",
      },
      {
        title: "Mental Health Consultation",
        slug: "mental-health-consultation",
        description:
          "Mental Health Consultation offers confidential support and guidance for mental well-being. Receive assessments, advice, and personalized recommendations to address your concerns.",
      },
      {
        title: "Urgent Care Visit",
        slug: "urgent-care-visit",
        description:
          "Urgent Care Visits offer quick treatment for non-life-threatening conditions, providing convenient access to medical care without the need for an emergency room visit.",
      },
    ],
  },

  {
    title: "Specialists",
    services: [
      {
        title: "Tele-Health",
        slug: "tele-health",
        description:
          "Remote healthcare services using digital technology for convenient access to medical consultations, advice, and monitoring from anywhere.",
      },
      {
        title: "Video Prescription Refill",
        slug: "video-prescription-refill",
        description:
          "Enables patients to renew medications via secure online video consultations, offering convenient access to healthcare without in-person visits.",
      },
      {
        title: "In-Person Doctor Visit",
        slug: "in-person-doctor-visit",
        description:
          "An in-person doctor visit is when you meet with a healthcare provider at a medical facility for examination, advice, and treatment.",
      },
      {
        title: "UTI Consultation",
        slug: "uti-consultation",
        description:
          "Expert care for urinary tract infections. Fast, personalized treatment plans for your comfort and well-being.",
      },
      {
        title: "ED Consultation",
        slug: "ed-consultation",
        description:
          "ED Consultation provides discreet guidance and personalized solutions for erectile dysfunction, supporting sexual health and well-being.",
      },
      {
        title: "Mental Health Consultation",
        slug: "mental-health-consultation",
        description:
          "Mental Health Consultation offers confidential support and guidance for mental well-being. Receive assessments, advice, and personalized recommendations to address your concerns.",
      },
      {
        title: "Urgent Care Visit",
        slug: "urgent-care-visit",
        description:
          "Urgent Care Visits offer quick treatment for non-life-threatening conditions, providing convenient access to medical care without the need for an emergency room visit.",
      },
    ],
  },

  {
    title: "Symptoms",
    services: [
      {
        title: "Tele-Health",
        slug: "tele-health",
        description:
          "Remote healthcare services using digital technology for convenient access to medical consultations, advice, and monitoring from anywhere.",
      },
      {
        title: "Video Prescription Refill",
        slug: "video-prescription-refill",
        description:
          "Enables patients to renew medications via secure online video consultations, offering convenient access to healthcare without in-person visits.",
      },
      {
        title: "In-Person Doctor Visit",
        slug: "in-person-doctor-visit",
        description:
          "An in-person doctor visit is when you meet with a healthcare provider at a medical facility for examination, advice, and treatment.",
      },
      {
        title: "UTI Consultation",
        slug: "uti-consultation",
        description:
          "Expert care for urinary tract infections. Fast, personalized treatment plans for your comfort and well-being.",
      },
      {
        title: "ED Consultation",
        slug: "ed-consultation",
        description:
          "ED Consultation provides discreet guidance and personalized solutions for erectile dysfunction, supporting sexual health and well-being.",
      },
      {
        title: "Mental Health Consultation",
        slug: "mental-health-consultation",
        description:
          "Mental Health Consultation offers confidential support and guidance for mental well-being. Receive assessments, advice, and personalized recommendations to address your concerns.",
      },
      {
        title: "Urgent Care Visit",
        slug: "urgent-care-visit",
        description:
          "Urgent Care Visits offer quick treatment for non-life-threatening conditions, providing convenient access to medical care without the need for an emergency room visit.",
      },
    ],
  },
];

export const TEXTS = [
  "Acupuncture",
  "Massage",
  "Chiropractor",
  "Dentist",
  "Cosmetic",
  "Dietitian",
  "Speech Therapy",
  "Occupational Therapy",
  "General Doctor",
  "Medical Specialist",
  "Gynicology",
];

export const timeStamps = [
  {
    time: "8:30",
    period: "a.m",
  },
  {
    time: "9:30",
    period: "a.m",
  },
  {
    time: "10:30",
    period: "a.m",
  },
  {
    time: "12:30",
    period: "p.m",
  },
  {
    time: "14:30",
    period: "p.m",
  },
  {
    time: "18:30",
    period: "p.m",
  },
  {
    time: "20:30",
    period: "p.m",
  },
];

export const footerNavs = [
  {
    label: "CareConnect",
    items: [
      {
        href: "/join/doctors",
        name: "Be a Service Provider",
      },
      {
        href: "javascript:void()",
        name: "Blog",
      },
      {
        href: "javascript:void()",
        name: "Team",
      },
      {
        href: "javascript:void()",
        name: "Careers",
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        href: "javascript:void()",
        name: "contact",
      },
      {
        href: "javascript:void()",
        name: "Support",
      },
      {
        href: "javascript:void()",
        name: "Docs",
      },
      {
        href: "javascript:void()",
        name: "Pricing",
      },
    ],
  },
  {
    label: "About",
    items: [
      {
        href: "javascript:void()",
        name: "Terms",
      },
      {
        href: "javascript:void()",
        name: "License",
      },
      {
        href: "javascript:void()",
        name: "Privacy",
      },
      {
        href: "javascript:void()",
        name: "About US",
      },
    ],
  },
];

export const socialLinks = [
  {
    title: "LinkedIn",
    href: "https://linkedin.com/isaacnsbkargbo",
    icon: Linkedin,
    color: "text-blue-500",
  },
  {
    title: "Facebook",
    href: "https://facebook.com/isaacnsbkargbo",
    icon: FaFacebook,
    color: "text-blue-700",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/pythonnelson",
    icon: FaTwitter,
    color: "text-blue-400",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/isaacnsbkargbo",
    icon: FaInstagram,
    color: "text-red-600",
  },
];

export const features = [
  {
    title: "Seamless Appointment Scheduling",
    icon: Check,
  },
  {
    title: "We enhance Patient Communication",
    icon: Check,
  },
  {
    title: "A Comprehensive Practice Management",
    icon: Check,
  },
  {
    title: "Telehealth Integration",
    icon: Check,
  },
  {
    title: "Customizable Patient Profiles",
    icon: Check,
  },
];

export const whyChooseUs = [
  {
    title: "List your practice",
    subTitle: "It's free to join with no membership fees or time commitment",
    icon: FaLongArrowAltRight,
  },
  {
    title: "Start seeing patients",
    subTitle:
      "Patients can book appointments with you after your profile goes live",
    icon: FaLongArrowAltRight,
  },
  {
    title: "Innovative Technology",
    subTitle:
      "Utilize our cutting-edge platform to streamline your practice operations and enhance patient engagement",
    icon: FaLongArrowAltRight,
  },
  {
    title: "Time Efficiency",
    subTitle:
      "Reduce administrative burdens with our intuitive scheduling system, allowing you to focus more on patient care",
    icon: FaLongArrowAltRight,
  },
];

export const cards = [
  {
    title: "Begin your Journey",
    description:
      "Start a new application to Join our network of healthcare practitioners",
    link: "/authentication/register/?role=DOCTOR&plan=free",
    linkTitle: "Start a new Application",
  },
  {
    title: "Resume Application",
    description:
      "Continue from where you stopped & continue your onboarding process",
    link: "/onboarding/resume",
    linkTitle: "Continue Application",
  },
  {
    title: "Schedule a Call",
    description: "Talk to a practitioner to finalize your application process",
    link: "/schedule-call",
    linkTitle: "Schedule a Call",
  },
  {
    title: "Track Progress",
    description:
      "Check your application status to know your application progress",
    link: "/track-progress",
    linkTitle: "Check Application Status",
  },
];

export const faqs = [
  {
    title: "What is CareConnect?",
    description:
      "CareConnect is a comprehensive medical appointment app designed to streamline the scheduling process, enhance patient communication, and improve overall practice management for healthcare providers.",
    value: "1",
  },
  {
    title: "How do I register for CareConnect?",
    description:
      "Registering for CareConnect is simple and free. Just visit the Login section from this website and click on the Join us in saving lives button to get started, complete the registration form with your professional details, and you're ready to start managing your appointments.",
    value: "2",
  },
  {
    title: "Are there any registration fees?",
    description:
      "No, there are no fees for registering with CareConnect. You can sign up and start using the app without any upfront costs.",
    value: "3",
  },
  {
    title: "How does the payment system work?",
    description:
      "Patients pay for their appointments through the app. A small percentage of these payments is automatically deducted each month as a service fee for using CareConnect. This fee goes to the system admin and ensures the continued operation and improvement of the platform.",
    value: "4",
  },
  {
    title: "How much is the monthly service fee?",
    description:
      "The monthly service fee is a small percentage of the payments received from patients. The exact percentage will be communicated during the registration process and is designed to be affordable for all healthcare providers.",
    value: "5",
  },
  {
    title: "Can I offer telehealth services through CareConnect?",
    description:
      "Yes, CareConnect includes a telehealth integration feature that allows you to conduct virtual consultations, expanding your reach and providing convenient care options for your patients.",
    value: "6",
  },
  {
    title: "How does CareConnect enhance patient communication?",
    description:
      "CareConnect offers secure messaging, automated appointment reminders, and customizable patient profiles to ensure seamless and effective communication with your patients.",
    value: "7",
  },
  {
    title: "Is CareConnect secure and compliant with privacy regulations?",
    description:
      "Absolutely. CareConnect is HIPAA-compliant and uses advanced security measures to protect patient information and ensure data privacy.",
    value: "8",
  },
  {
    title: "What support is available for new users?",
    description:
      "CareConnect provides extensive support, including a dedicated support team, detailed tutorials, and training resources to help you make the most of the app.",
    value: "9",
  },
  {
    title: "Can I access analytics and reports through CareConnect?",
    description:
      "Yes, CareConnect offers detailed analytics and reporting features to help you monitor your practice's performance, track patient trends, and optimize your operations.",
    value: "10",
  },
  {
    title: "How do I contact CareConnect support?",
    description:
      "You can reach our support team through the app's help section, via email, or by calling our support hotline. We're here to assist you with any questions or issues you may have.",
    value: "11",
  },
  {
    title: "What types of healthcare providers can use CareConnect?",
    description:
      "CareConnect is designed for a wide range of healthcare providers, including general practitioners, specialists, therapists, and other medical professionals looking to enhance their practice management and patient care.",
    value: "12",
  },
  {
    title: "Can I customize my CareConnect profile?",
    description:
      "Yes, you can personalize your profile with your professional details, specializations, and practice information to help patients learn more about you and your services.",
    value: "13",
  },
  {
    title: "Are there any long-term contracts?",
    description:
      "No, there are no long-term contracts required. You can use CareConnect on a month-to-month basis and cancel at any time if you choose.",
    value: "14",
  },
  {
    title: "How does CareConnect help reduce no-shows?",
    description:
      "CareConnect's automated reminder system sends notifications to patients about upcoming appointments, reducing the likelihood of missed appointments and improving overall attendance rates.",
    value: "15",
  },
];

export const plans = [
  {
    name: "Free",
    desc: "Ideal for small practices and individual practitioners",
    price: "0",
    fee: 5,
    isMostPop: false,
    features: [
      "Manage up to 50 appointments per month",
      "Basic patient record management",
      "Email notifications for appointments",
    ],
    getStarted: "/authentication/register/?role=DOCTOR&plan=free",
  },
  {
    name: "Pro",
    desc: "Perfect fit for small to medium-sized clinics",
    price: 39.99,
    fee: 10,
    isMostPop: true,
    features: [
      "Unlimited appointments",
      "Advanced patient record management",
      "SMS reminders for appointments",
      "Customizable clinic profile",
    ],
    getStarted: "/authentication/register/?role=DOCTOR&plan=professional",
  },
  {
    name: "Enterprise",
    desc: "Tailored for large health-care facilities and hospitals",
    price: 99.99,
    fee: 15,
    isMostPop: false,
    features: [
      "Access to all standard features",
      "Multi-provider's support",
      "Priority customer support",
      "24/7 Virtual support",
      "Integration with electronic health records (EHR) system",
    ],
    getStarted: "/authentication/register/?role=DOCTOR&plan=enterprise",
  },
];

export const tabs = [
  {
    label: "General",
    value: "general",
    component: GeneralSettings,
  },
  {
    label: "Security",
    value: "security",
    component: SecuritySettings,
  },
  {
    label: "Integrations",
    value: "integrations",
    component: IntegrationsSettings,
  },
  {
    label: "Support",
    value: "support",
    component: SupportSettings,
  },
  {
    label: "Organizations",
    value: "organizations",
    component: OrganizationSettings,
  },
  {
    label: "Advanced",
    value: "advanced",
    component: AdvancedSettings,
  },
];
