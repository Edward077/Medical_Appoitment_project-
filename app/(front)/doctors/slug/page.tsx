import DoctorServiceDetail from "@/components/DoctorServiceDetail";
import FixedBookingButton from "@/components/FixedBookingButton";
import Image from "next/image";

const DoctorDetail = () => {
  return (
    <div className="bg-[#f1f1f1] dark:bg-slate-900 py-20 min-h-screen">
      <div className="bg-white dark:bg-slate-900 max-w-4xl border border-gray-200 mx-auto shadow-2xl rounded-md">
        <div className="py-6 px-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex flex-col">
                <h2 className="font-bold text-[#212529] dark:text-[#1b6a88] text-3xl tracking-widest capitalize">
                  John Doe
                </h2>
                <p className="text-xs text-gray-400">Family Health</p>
              </div>
              <p className="pt-8 font-extrabold text-md">
                In-Person Doctor Visit
              </p>
              <p className="text-xs text-gray-400">198987 S Industrial Hwy</p>
            </div>
            <Image
              src="/images/doctor.jpeg"
              width={540}
              height={360}
              alt="doctor"
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="">
          <DoctorServiceDetail />
        </div>
      </div>
      <FixedBookingButton />
    </div>
  );
};

export default DoctorDetail;
