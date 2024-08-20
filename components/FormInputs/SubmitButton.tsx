import { SubmitButtonProps } from "@/types/types";
import { Loader2 } from "lucide-react";

const SubmitButton = ({
  title,
  btnType,
  isLoading = false,
  loadingTitle,
}: SubmitButtonProps) => {
  return (
    <>
      {isLoading ? (
        <button
          type={btnType}
          disabled
          className="flex w-full items-center justify-center gap-1 rounded-md bg-blue-500 hover:bg-[#1b6a88] transition-all duration-300 px-3 py-1.5 text-sm font-normal leading-6 text-gray-300 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <Loader2 className="w-5 h-5 mr-2 flex-shrink-0 animate-spin" />{" "}
          {loadingTitle}
        </button>
      ) : (
        <button
          type={btnType}
          className="flex items-center justify-end gap-1 rounded-md bg-blue-500 hover:bg-[#1b6a88] transition-all duration-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {title}
        </button>
      )}
    </>
  );
};

export default SubmitButton;
