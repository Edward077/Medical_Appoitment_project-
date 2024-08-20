import React from "react";

type SelectInputProps = {
  label: string;
  className?: string;
  options: SelectOption[];
  selectedOption: any;
  setSelectedOption: any;
};

export type SelectOption = {
  value: string;
  label: string;
};

const ShadSelectInput = ({
  label,
  className = "sm:col-span-2",
  options = [],
  selectedOption,
  setSelectedOption,
}: SelectInputProps) => {
  return (
    <div className={`${className} w-full`}>
      <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-900 mb-2">
        {label}
      </label>
      <div className="mt-2 w-full">
        <select
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          value={selectedOption}
          onChange={(e) => setSelectedOption?.(e.target.value)}
        >
          {options.map((option: SelectOption, index: number) => (
            <option value={option.value} key={index}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ShadSelectInput;
