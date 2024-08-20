type SelectInputProps = {
  multiple?: boolean;
  name: string;
  label: string;
  register: any;
  className?: string;
  options: SelectOption[];
  errors: any;
  selectedOption?: any;
  setSelectedOption?: any;
};

export type SelectOption = {
  value: string;
  label: string;
};

const SelectInput = ({
  label,
  name,
  register,
  className = "sm:col-span-2",
  options = [],
  multiple = false,
  errors,
  selectedOption,
  setSelectedOption,
}: SelectInputProps) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-900 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`)}
          name={name}
          multiple={multiple}
          id={name}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {options.map((option: any, index: number) => {
            return (
              <option value={option.value} key={index}>
                {option.label}
              </option>
            );
          })}
        </select>
        {errors[`${name}`] && (
          <span className="text-xs text-red-600">{label} is required</span>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
