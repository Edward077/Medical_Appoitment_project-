import { UploadDropzone } from "@/utils/uploadthing";
import { File as LucideFile, Minus, Pencil, XCircle } from "lucide-react";
import toast from "react-hot-toast";

type MultipleImageInputProps = {
  label: string;
  files: File[];
  setFiles: any;
  // setFiles: (files: File[]) => void;
  className?: string;
  endpoint: any;
};

export type File = {
  title: string;
  url: string;
  size: number;
};

const MultipleFileUpload = ({
  label,
  files,
  setFiles,
  className,
  endpoint,
}: MultipleImageInputProps) => {
  function handleImageRemove(fileIndex: number) {
    const updatedFiles = files.filter((_, index) => index !== fileIndex);
    setFiles(updatedFiles);
  }

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="multiple-images"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-800 mb-2"
        >
          {label}
        </label>
        {files && (
          <button
            onClick={() => setFiles([])}
            type="button"
            className="flex space-x-2 bg-slate-900 rounded-md shadow text-slate-50 py-2 px-4"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Files</span>
          </button>
        )}
      </div>
      {files.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {files.map((file, index) => (
            <div key={index} className="relative mb-6">
              <button
                type="button"
                onClick={() => handleImageRemove(index)}
                className="absolute -top-4 -right-2 bg-slate-100 text-slate-900 rounded-full"
              >
                <Minus className="w-5 h-5 text-red-600" />
                {/* <XCircle className="w-5 h-5" /> */}
              </button>
              <div className="flex items-center py-3 px-6 border bg-white dark:text-slate-800 rounded-md">
                <LucideFile className="w-6 h-6 flex-shrink-0 mr-2" />
                <div className="flex flex-col">
                  <span className="line-clamp-1">{file.title}</span>
                  <span className="text-xs text-gray-400">
                    {(file.size / 1000).toFixed(2)} KB
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            console.log(res);
            const newFiles = res.map((item) => ({
              title: item.name, // assuming the API response contains the file name
              url: item.url,
              size: item.size, // assuming the API response contains the file size
            }));
            setFiles(newFiles);
            console.log(newFiles);
            console.log("File(s) uploaded successfully");
          }}
          onUploadError={(error) => {
            toast.error("Upload Encountered an error, Try Again");
            console.log(`Error! ${error.message}`, error);
          }}
        />
      )}
    </div>
  );
};

export default MultipleFileUpload;
