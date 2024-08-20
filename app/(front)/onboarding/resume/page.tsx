import TrackApplicationForm from "@/components/Frontend/TrackApplicationForm";

export default async function TrackApplication() {
  return (
    <section className="bg-[#f1f1f1] dark:bg-slate-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-[#1b6a88]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-[#1b6a88]">
              Resume Your Application
            </h1>
            <TrackApplicationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
