import OnboardingSteps from "@/components/Onboarding/OnboardingSteps";

const Page = ({ params: { id } }: { params: { id: string } }) => {
  //  Get existing doctor profile if it already exists

  return (
    <div className="py-[80px] min-h-screen bg-[#f1f1f1] dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <OnboardingSteps id={id} />
      </div>
    </div>
  );
};

export default Page;
