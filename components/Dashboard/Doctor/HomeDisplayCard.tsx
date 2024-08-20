import { Calendar } from "lucide-react";
import React from "react";
import NewButton from "./NewButton";

const HomeDisplayCard = () => {
  return (
    <div className="flex items-center justify-center h-1/2">
      <div className="bg-white dark:bg-[#151518] text-center justify-center items-center shadow px-16 py-8 rounded-md border border-slate-300 gap-1 flex flex-col">
        <Calendar className="w-9 h-9" />

        <div className="py-3">
          <p className="flex items-center justify-center">
            You have{" "}
            <span className="bg-[#f1f1f1] dark:text-slate-900 w-6 h-6 mx-2 rounded-full flex items-center justify-center shadow-md border">
              9
            </span>{" "}
            services today
          </p>
          <p>9 New Patients, 3 Follow Ups, 4 Annual Physicals</p>
          <NewButton
            title="New Service"
            href="/dashboard/services/new"
            className="shadow gap-1 mt-3 transition-all duration-300 dark:bg-slate-950 dark:hover:bg-slate-900 dark:hover:shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDisplayCard;
