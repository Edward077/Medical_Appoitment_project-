"use client";

import { Calendar } from "@/components/ui/calendar";
import { timeStamps } from "@/constants";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Availability = () => {
  const [bookedDate, setBookedDate] = React.useState<Date | undefined>(
    new Date()
  );

  const GMT = bookedDate?.toString().split("GMT")[1].split(" ")[0];

  const formattedDate = `${bookedDate
    ?.toString()
    .split(" ")
    .slice(0, 4)
    .join(" ")} - GMT${GMT}`;

  return (
    <div className="mb-[200px]">
      <h2 className="font-bold py-4 text-xl uppercase text-gray-400">
        Select a Date and Time
      </h2>
      <div className="grid grid-cols-2 gap-4 lg:gap-0">
        <div className="sm:col-span-1 col-span-full">
          <Calendar
            mode="single"
            selected={bookedDate}
            onSelect={setBookedDate}
            className="rounded-md border"
          />
        </div>
        <div className="sm:col-span-1 col-span-full">
          <div className="p-4">
            {formattedDate && (
              <>
                <h2 className="p-4 text-slate-700 dark:text-white text-center py-2 px-6 border border-[#1b6a88]">
                  {formattedDate}
                </h2>

                <div className="py-3 grid grid-cols-3">
                  {timeStamps.slice(0, 5).map((timeStamp, index) => {
                    return (
                      <button key={index}>
                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                          {timeStamp.time} {timeStamp.period}
                        </span>
                      </button>
                    );
                  })}
                  <button className="flex items-center gap-1 rounded-full justify-center hover:text-[#1b6a88] duration-300">
                    More <FaLongArrowAltRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Availability time */}
    </div>
  );
};

export default Availability;
