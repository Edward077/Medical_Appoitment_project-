import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const ShadSelectInput = ({
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
        <Select onValueChange={(value) => setSelectedOption(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={`Select ${optionTitle}`} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{label}</SelectLabel>
              {options.map((option: SelectOption, index: number) => (
                <SelectItem
                  value={option.value}
                  key={index}
                  onSelect={selectedOption}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ShadSelectInput;
