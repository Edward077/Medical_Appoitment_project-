import { Calendar, LucideIcon } from "lucide-react";
import React from "react";

const PanelHeader = ({
  title,
  count,
  icon,
}: {
  title: string;
  count: string;
  icon: LucideIcon;
}) => {
  const Icon = icon;
  return (
    <div className="py-3 px-6 border-b bg-[#f1f1f1] dark:bg-[#151518] w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <Icon className="w-5 h-5 flex-shrink-0" />
          <span>{title}</span>
          <span className="bg-white w-6 h-6 p-2 rounded-full flex items-center justify-center shadow-md border dark:text-slate-800">
            {count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PanelHeader;
