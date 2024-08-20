import React from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

type CountrySelectInputProps = {
  label: string;
  country: string;
  setCountry: (country: string) => void;
  region: string;
  setRegion: (region: string) => void;
  name: string;
  className?: string;
  errors: any;
};

const CountrySelectInput = ({
  label,
  country,
  setCountry,
  region,
  setRegion,
  name,
  className = "sm:col-span-2",
  errors,
}: CountrySelectInputProps) => {
  return (
    <div>
      <label
        htmlFor={`${name}`}
        className="block text-sm font-medium leading-6 text-slate-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <CountryDropdown
          value={country}
          onChange={(val) => setCountry(val)}
          //   className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6"
          name={`${name}-country`}
        />
        {errors[`${name}-country`] && (
          <span className="text-xs text-red-600">
            {label} country is required
          </span>
        )}
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => setRegion(val)}
          //   className="block w-full rounded-md border-0 py-2 mt-2 text-gray-900 shadow-sm ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6"
          name={`${name}-region`}
        />
        {errors[`${name}-region`] && (
          <span className="text-xs text-red-600">
            {label} region is required
          </span>
        )}
      </div>
    </div>
  );
};

export default CountrySelectInput;
