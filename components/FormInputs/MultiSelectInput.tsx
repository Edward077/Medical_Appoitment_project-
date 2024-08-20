import React from "react";
import { MultiSelect } from "react-multi-select-component";

type SelectInputProps = {
  label: string;
  className?: string;
  optionTitle: string;
  options: SelectOption[];
  selectedOption: any;
  setSelectedOption: any;
};

export type SelectOption = {
  value: string;
  label: string;
};

const MultiSelectInput = ({
  label,
  className = "sm:col-span-2",
  optionTitle = "",
  options = [],
  selectedOption,
  setSelectedOption,
}: SelectInputProps) => {
  return (
    <div className={className}>
      <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-900 mb-2">
        {label}
      </label>
      <div className="mt-2">
        <MultiSelect
          options={options}
          value={selectedOption}
          onChange={setSelectedOption}
          labelledBy={optionTitle}
        />
      </div>
    </div>
  );
};

export default MultiSelectInput;
