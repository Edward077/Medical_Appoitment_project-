import { Plus } from "lucide-react";

const FixedBookingButton = () => {
  return (
    <div className="fixed dark:bg-slate-900 bottom-0 bg-white z-50 w-full shadow-2xl py-8 px-6 rounded-md border border-gray-200">
      <div className="max-w-4xl gap-4 mx-auto flex items-center justify-between">
        <div className="w-full">
          <p className="font-bold text-[24px]">$150</p>
          <p className="text-md text-red-500">Monday, March 20 - 17:00 GMT</p>
        </div>
        <button className="flex gap-1 items-center py-3 px-6 bg-blue-600 hover:bg-[#1b6a88] rounded-md text-white hover:duration-300 transition-all">
          Book
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default FixedBookingButton;
