import React from "react";
import SearchInput from "./SearchInput";
import TransitionText from "./TransitionText";
import { Plus } from "lucide-react";

export const Hero = () => {
  return (
    <div className="py-[80px] bg-[#f1f1f1] dark:bg-slate-900">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl mb-5 pb-15 sm:py-38 lg:py-26">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm border dark:border-white leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="text-blue-500 dark:text-white font-bold">
                CareConnect:
              </span>{" "}
              Your heathcare at your fingertips.{" "}
              <a
                href="/authentication/register"
                className="font-semibold text-blue-600"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Get Started <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              <span className="text-blue-500">CareConnect:</span> Your Premier
              Medical Concierge
            </h1>
            <div className="flex items-center justify-center py-4 gap-4">
              <span className="flex items-center justify-center text-2xl">
                Book for your!
              </span>
              <TransitionText />
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              <span className="text-blue-500 font-bold">CareConnect:</span> Your
              premier medical concierge. Enjoy tailored care, expert guidance,
              and compassionate support all in one place. Trust us to deliver
              excellence in every step of your healthcare journey.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
              <SearchInput />
              <div className="flex py-3 items-center justify-center gap-5">
                <a
                  href="#"
                  className="rounded-md bg-blue-500 hover:bg-[#1b6a88] hover:duration-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  I NEED A DOCTOR!
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-white  "
                >
                  Need Medication Refill <span aria-hidden="true">→</span>
                </a>
              </div>

              {/* ===== STATISTICS ===== */}
              <div className="mt-10 flex gap-8 border border-gray-300 p-8 rounded-md shadow-lg">
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold flex">
                    400 <Plus className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-gray-500">Active Doctors</span>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold flex">
                    1900 <Plus className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-gray-500">Cases Resolved</span>
                </div>
              </div>
              {/* ===== STATISTICS // ===== */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
