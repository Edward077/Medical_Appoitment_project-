type RadioButtonInputProps = {
  name: string;
  title: string;
  description?: string;
  register: any;
  errors: any;
  radioOptions: RadioOption[];
};

export type RadioOption = {
  value: string;
  label: string;
  description?: string;
};

export function RadioButtonInput({
  name,
  title,
  register,
  errors,
  radioOptions,
}: RadioButtonInputProps) {
  return (
    <>
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-slate-800">
        {title}
      </h3>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-100 rounded-lg sm:flex">
        {radioOptions.map((item, index) => {
          return (
            <li
              key={index}
              className="w-full border-b border-gray-100 sm:border-b-0 sm:border-r"
            >
              <div className="flex items-center ps-3 bg-white">
                <input
                  {...register(`${name}`, { required: true })}
                  id={item.value}
                  type="radio"
                  value={item.value}
                  name={`${name}`}
                  defaultValue={item.label[0]}
                  className="w-4 h-4 bg-white text-slate-800 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                />
                <label
                  // htmlFor={item.value}
                  htmlFor="horizontal-list-radio-license"
                  className="flex flex-col w-full py-2 ms-2 text-sm font-medium text-gray-900"
                >
                  {item.label}{" "}
                  {item.description && (
                    <span className="text-xs text-gray-500">
                      {item.description}
                    </span>
                  )}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
      {errors[`${name}`] && (
        <span className="text-xs text-red-600">{title} is required</span>
      )}
    </>
  );
}
