import { Loader2, Plus, X } from "lucide-react";

type SelectedTimesProps = {
  handleAllTimes: () => void;
  timeArrays: string[];
  handleAddTime: (value: string) => void;
  selectedTimes: string[];
  isLoading: boolean;
  handleSubmit: () => void;
  handleRemoveTime: (value: string) => void;
  handleClearAllTimes: () => void;
  day: string;
};

const SelectedTimes = ({
  handleAllTimes,
  timeArrays,
  handleAddTime,
  selectedTimes,
  isLoading,
  handleSubmit,
  handleRemoveTime,
  handleClearAllTimes,
  day,
}: SelectedTimesProps) => {
  const selectedDay = day.toUpperCase();
  return (
    <div className="grid cols-cols-1 sm:grid-cols-2 gap-3 border-gray-200 dark:border-gray-600 shadow rounded-md divide-x divide-gray-200">
      <div className="p-4">
        <h2 className="font-semibold">Select your Available Times</h2>
        <div className="grid grid-cols-4 gap-2 py-6">
          {timeArrays.map((time, index) => {
            return (
              <button
                onClick={() => handleAddTime(time)}
                key={index}
                className="flex items-center py-2 px-2 border border-blue-100 rounded-md justify-center"
              >
                <span className="text-gray-600 dark:text-gray-400">{time}</span>
                <Plus className="w-3 h-3 text-blue-500 ml-1" />
              </button>
            );
          })}
        </div>
        <div className="border-t border-blue-100 py-3 flex justify-end">
          <button
            onClick={handleAllTimes}
            className="flex items-center py-2 px-2 border border-blue-100 rounded-md justify-center"
          >
            <span className="text-gray-600 dark:text-gray-400">
              Select All Times
            </span>
            <Plus className="w-3 h-3 text-blue-500 ml-1" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-semibold">
          Selected Availability Times for {selectedDay}
        </h2>
        <div className="grid grid-cols-4 gap-2 py-6">
          {selectedTimes.map((time, index) => {
            return (
              <button
                key={index}
                onClick={() => handleRemoveTime(time)}
                className="flex items-center py-2 px-2 border border-red-100 rounded-md justify-center"
              >
                <span className="text-gray-600 dark:text-gray-400">{time}</span>
                <X className="w-3 h-3 text-red-500 ml-1" />
              </button>
            );
          })}
        </div>
        {/* {selectedTimes.length > 0 && ( */}
        <div className="border-t border-blue-100 py-3 flex justify-end gap-2">
          {isLoading ? (
            <button
              disabled={isLoading}
              className="flex items-center py-2 px-2 border text-white bg-slate-900 rounded-md justify-center"
            >
              <Loader2 className="animate-spin w-4 h-4 mr-2" />
              Save Settings
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex items-center py-2 px-2 border text-white bg-slate-900 rounded-md justify-center"
            >
              Save Settings
            </button>
          )}

          <button
            onClick={handleClearAllTimes}
            className="flex items-center py-2 px-2 border border-red-500 rounded-md justify-center"
          >
            <span className="text-gray-600 dark:text-gray-400">
              Clear All Times
            </span>
            <X className="w-3 h-3 text-red-500 ml-1" />
          </button>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default SelectedTimes;
