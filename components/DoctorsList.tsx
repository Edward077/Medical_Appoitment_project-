import React from "react";
import SectionHeading from "./SectionHeading";
import ToggleButton from "./ToggleButton";
import Link from "next/link";
import { FaMapMarkedAlt } from "react-icons/fa";
import DoctorsListCarousel from "./DoctorsListCarousel";

const DoctorsList = ({
  title = "Tele-Health Visit",
  isInPerson,
}: {
  title?: string;
  isInPerson?: boolean;
}) => {
  const doctors = [
    {
      name: "John Doe",
    },
    {
      name: "John Doe",
    },
    {
      name: "John Doe",
    },
    {
      name: "John Doe",
    },
    {
      name: "John Doe",
    },
    {
      name: "John Doe",
    },
    {
      name: "John Doe",
    },
    {
      name: "John Doe",
    },
    {
      name: "John Doe",
    },
    {
      name: "John Doe",
    },
    {
      name: "John Doe",
    },
    {
      name: "John Doe",
    },
  ];
  return (
    <div className="py-8 lg:py-24 bg-[#f1f1f1] dark:bg-slate-900 border-t border-gray-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={title} />
        <div className="py-4 flex items-center justify-between">
          {isInPerson ? (
            <Link href="/" className="flex gap-1 items-center">
              <FaMapMarkedAlt className="w-5 h-5" />
              Map View
            </Link>
          ) : (
            <ToggleButton />
          )}
          <Link
            href="/"
            className="border border-blue-500 rounded-md cursor-pointer py-2 px-4 hover:bg-blue-500 hover:text-white duration-300"
          >
            View All
          </Link>
        </div>
        <DoctorsListCarousel doctors={doctors} isInPerson={isInPerson} />
      </div>
    </div>
  );
};

export default DoctorsList;
