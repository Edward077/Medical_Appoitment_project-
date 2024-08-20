import { timeStamps } from "@/constants";
import { Stethoscope, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaLongArrowAltRight } from "react-icons/fa";

const DoctorCard = ({ isInPerson = false }: { isInPerson?: boolean }) => {
  return (
    <div className="inline-flex flex-col bg-white dark:bg-slate-100 shadow-lg py-8 px-6 rounded-md duration-300 transition-all">
      <Link href="/doctors/slug">
        <h2 className="text-[#212529] dark:text-[#1b6a88] font-bold uppercase text-2xl tracking-wider">
          John Doe
        </h2>
        {!isInPerson && (
          <p className="py-3 text-gray-500">1958 S Industrial Hwy</p>
        )}
        <div className="flex items-center gap-4 py-4">
          <div className="relative">
            <Image
              src="/images/doctor.jpeg"
              width={540}
              height={360}
              alt="Doctor image"
              className="w-24 h-24 rounded-full object-cover"
            />

            {!isInPerson && (
              <p className="absolute bottom-0 right-0 bg-blue-200 text-blue-600 w-10 h-10 flex items-center justify-center rounded-full">
                <Video className="w-6 h-6" />
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center">
              <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-gray-600">Your health matters</span>
            </p>
            <p className="text-center bg-green-600 px-3 rounded-full dark:text-white">
              <span className="text-md">Available</span>
            </p>
          </div>
        </div>
      </Link>

      <div className="pt-8 border-t border-gray-300">
        <h3 className="flex gap-4 justify-between items-center text-sm">
          <span className="text-gray-600">Monday, May 20</span>{" "}
          <span className="font-bold">$150</span>
        </h3>
        <div className="py-3 grid grid-cols-3">
          {timeStamps.slice(0, 5).map((timeStamp, index) => {
            return (
              <Link href="/" key={index}>
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  {timeStamp.time} {timeStamp.period}
                </span>
              </Link>
            );
          })}
          <Link
            href="/doctors/slug"
            className="flex items-center gap-1 rounded-full justify-center hover:text-blue-600 duration-300"
          >
            More <FaLongArrowAltRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
