import { getServices } from "@/actions/service";
import SectionHeading from "../SectionHeading";
import TabItems from "./TabItems";
import { getSpecialties } from "@/actions/specialty";
import { getSymptoms } from "@/actions/symptoms";

export type ServiceCardProps = {
  icon: string;
  title: string;
  details: string;
};

const TabbedSection = async () => {
  const services = (await getServices()).data || [];
  const specialties = (await getSpecialties()).data || [];
  const symptoms = (await getSymptoms()).data || [];
  return (
    <section className="pb-12 pt-20 bg-[#f1f1f1] dark:bg-slate-900 lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
              <SectionHeading title="Top-rated online doctors and specialists available now" />

              <p className="text-gray-500 text-body-color w-full">
                Your go-to platform for hassle-free online medical appointments.
                Say goodbye to waiting rooms and scheduling headaches – with
                CareConnect, you can book with top healthcare professionals in
                just a few clicks. Our secure platform prioritizes your privacy,
                ensuring a seamless and safe experience. Take charge of your
                health journey today with CareConnect.
              </p>
            </div>
          </div>
        </div>

        {/* ===== TABS ===== */}
        <div className="max-auto max-6xl">
          <TabItems
            services={services}
            specialties={specialties}
            symptoms={symptoms}
          />
        </div>
      </div>
    </section>
  );
};

export default TabbedSection;
