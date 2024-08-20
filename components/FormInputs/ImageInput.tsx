import { UploadDropzone } from "@/utils/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

type ImageUploadProps = {
  label: string;
  imageUrl: string;
  setImageUrl: any;
  className?: string;
  endpoint: any;
};

const ImageInput = ({
  className = "col-span-full",
  label,
  imageUrl = "",
  setImageUrl,
  endpoint = "",
}: ImageUploadProps) => {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="doctor-image"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-800 mb-2"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type="button"
            className="flex space-x-2 bg-slate-900 rounded-md shadow text-slate-50 py-2 px-4"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image src={imageUrl} alt="Doctor image" width={500} height={500} />
      ) : (
        <UploadDropzone
          endpoint={`${endpoint}` as any}
          onClientUploadComplete={(res: any) => {
            setImageUrl(res[0].url);
            toast.success("Image uploaded completely");
            console.log("Files: ", res);
            console.log("Upload completed successfully");
          }}
        />
      )}
    </div>
  );
};

export default ImageInput;
