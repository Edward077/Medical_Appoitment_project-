"use client";

import { useState } from "react";
import Availability from "./Availability";

const DoctorServiceDetail = () => {
  const [isActive, setIsActive] = useState("availability");
  return (
    <div className="">
      <div className="flex items-center justify-between tracking-widest">
        <button
          onClick={() => setIsActive("service")}
          className={
            isActive === "service"
              ? "py-4 px-8 uppercase w-full bg-[#1b6a88] text-white"
              : "py-4 px-8 uppercase w-full bg-gray-200 text-gray-900"
          }
        >
          Services
        </button>
        <button
          onClick={() => setIsActive("availability")}
          className={
            isActive === "availability"
              ? "py-4 px-8 uppercase w-full bg-[#1b6a88] text-white"
              : "py-4 px-8 uppercase w-full bg-gray-200 text-gray-900"
          }
        >
          Availability
        </button>
      </div>
      <div className="flex py-8 px-6 items-center justify-between">
        {isActive === "availability" ? (
          <div>
            <Availability />
          </div>
        ) : (
          <div>Service detail component</div>
        )}
      </div>
    </div>
  );
};

export default DoctorServiceDetail;
