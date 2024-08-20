import { type TextInputProps } from "@/types/types";
import React from "react";

const TextInput = ({
  label,
  register,
  name,
  errors,
  placeholder,
  type = "text",
  isRequired = true,
}: TextInputProps) => {
  return (
    <div>
      <label
        htmlFor={`${name}`}
        className="block text-sm font-medium leading-6 text-slate-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...register(`${name}`, { required: isRequired })}
          id={`${name}`}
          name={`${name}`}
          type={type}
          placeholder={placeholder ? placeholder : ""}
          className="block w-full rounded-md border-o py-1 text-slate-900 shadow-sm ring-1 ring-inset placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus-ring-indigo-600 sm:text-sm sm:leading-6"
        />

        {errors[`${name}`] && isRequired && (
          <span className="text-xs text-red-600">{label} is required</span>
        )}
      </div>
    </div>
  );
};

export default TextInput;
