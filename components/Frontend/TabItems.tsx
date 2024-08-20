"use client";

import { Tabs } from "flowbite-react";
import { Activity, Stethoscope } from "lucide-react";
import { HiCheckCircle } from "react-icons/hi";
import ServiceList from "./Services/ServiceList";
import LinkCard from "./Doctors/LinkCard";
import { RiMicroscopeFill } from "react-icons/ri";
import { Service, Specialty, Symptom } from "@prisma/client";
import SymptomCard from "./Doctors/SymptomCard";

type TabItemsProps = {
  services: Service[];
  specialties: Specialty[];
  symptoms: Symptom[];
};
export default function TabItems({
  services,
  specialties,
  symptoms,
}: TabItemsProps) {
  const tabs = [
    {
      title: "Top Booked",
      icon: Stethoscope,
      component: <ServiceList data={services} />,
      content: [],
    },
    // {
    //   title: "Doctors",
    //   icon: RiMicroscopeFill,
    //   component: <LinkCard />,
    //   content: [],
    // },
    {
      title: "Specialties",
      icon: HiCheckCircle,
      component: <LinkCard className="bg-blue-100" specialties={specialties} />,
      content: [],
    },
    {
      title: "Common Symptoms",
      icon: Activity,
      component: <SymptomCard className="bg-gray-300" symptoms={symptoms} />,
      content: [],
    },
  ];
  return (
    <Tabs className="Tabs-with-underline" style="underline">
      {tabs.map((tab, index) => {
        return (
          <Tabs.Item key={index} active title={tab.title} icon={tab.icon}>
            {tab.component}
          </Tabs.Item>
        );
      })}
    </Tabs>
  );
}
