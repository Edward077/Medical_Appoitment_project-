import { UploadDropzone } from "@/utils/uploadthing";
import { XCircle } from "lucide-react";
import Image from "next/image";

type MultipleImageInputProps = {
  label: string;
  imageUrls: string[];
  setImageUrls: any;
  className?: string;
  endpoint: any;
};

const MultipleImageInput = ({
  label,
  imageUrls,
  setImageUrls,
  className,
  endpoint,
}: MultipleImageInputProps) => {
  function handleImageRemove(imageIndex: any) {
    const updatedImages = imageUrls.filter(
      (image, index) => index != imageIndex
    );
    setImageUrls(updatedImages);
  }
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="multiple-images"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2"
        >
          {label}
        </label>
      </div>
      {imageUrls.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageUrls.map((imageUrl, index) => {
            return (
              <div key={index} className="relative mb-6">
                <button
                  onClick={() => handleImageRemove(index)}
                  className="absolute -top-4 -right-2 bg-slate-100 text-slate-900 rounded-full"
                >
                  <XCircle className="w-5 h-5" />
                </button>
                <Image
                  src={imageUrl}
                  alt="Images"
                  width={1000}
                  height={667}
                  className="w-full h-32 object-cover"
                />
              </div>
            );
          })}
        </div>
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            console.log(res);
            const urls = res.map((item) => item.url);
            setImageUrls(urls);
            console.log(urls);
            console.log("Images uploaded successfully");
          }}
        />
      )}
    </div>
  );
};

export default MultipleImageInput;
