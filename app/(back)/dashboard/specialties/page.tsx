import { getServices } from "@/actions/service";
import NewButton from "@/components/Dashboard/Doctor/NewButton";
import PanelHeader from "@/components/Dashboard/Doctor/PanelHeader";
import { BrainIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getSpecialties } from "@/actions/specialty";
import SpecialtyCard from "@/components/Dashboard/Doctor/SpecialtyCard";

const page = async () => {
  const specialties = (await getSpecialties()).data || [];
  return (
    <div>
      <div className="grid grid-cols-12">
        {/* ===== LIST PANEL ====== */}
        <div className="lg:col-span-3 col-span-full  border-r border-slate-200">
          <div className="flex items-center justify-between">
            <PanelHeader
              title="Specialties"
              count={specialties.length.toString().padStart(2, "0")}
              icon={BrainIcon}
            />
            <div className="lg:hidden flex justify-end bg-[#f1f1f1] w-full py-1 px-6 border-b">
              <NewButton
                href="/dashboard/specialties/new"
                title="New Specialties"
                className="shadow gap-1 transition-all duration-300 dark:hover:bg-slate-950"
              />
            </div>
          </div>
          <ScrollArea className="h-[75vh] w-full mt-4 px-2">
            {specialties.map((specialty) => {
              return (
                <SpecialtyCard key={specialty.title} specialty={specialty} />
              );
            })}
          </ScrollArea>
          {/* <ListPanel /> */}
        </div>
        {/* ===== DISPLAY PANEL ====== */}
        <div className="lg:col-span-9 col-span-full hidden lg:block">
          <div className="py-1 border-b bg-[#f1f1f1] dark:bg-[#151518]">
            <div className="flex items-center justify-end">
              <div className="flex items-center justify-center gap-2 px-3">
                <NewButton
                  href="/dashboard/specialties/new"
                  title="New Specialty"
                  className="shadow gap-1 transition-all duration-300 dark:hover:bg-slate-950"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center h-1/2">
            <div className="bg-white dark:bg-[#151518] text-center justify-center items-center shadow px-16 py-8 rounded-md border border-slate-300 gap-1 flex flex-col">
              <BrainIcon className="w-9 h-9" />

              <div className="py-3">
                <p className="flex items-center justify-center">
                  You have{" "}
                  <span className="bg-[#f1f1f1] dark:text-slate-900 w-6 h-6 mx-2 rounded-full flex items-center justify-center shadow-md border">
                    {specialties.length.toString().padStart(2, "0")}
                  </span>{" "}
                  Specialties listed
                </p>
                <p>
                  You can also click on the below button to create a New Service
                </p>
                <NewButton
                  title="New Specialty"
                  href="/dashboard/specialties/new"
                  className="shadow gap-1 mt-3 transition-all duration-300 dark:bg-slate-950 dark:hover:bg-slate-900 dark:hover:shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
