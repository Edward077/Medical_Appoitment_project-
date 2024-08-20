import HomeDisplayCard from "@/components/Dashboard/Doctor/HomeDisplayCard";
import ListPanel from "@/components/Dashboard/Doctor/ListPanel";
import NewButton from "@/components/Dashboard/Doctor/NewButton";
import PanelHeader from "@/components/Dashboard/Doctor/PanelHeader";
import { Calendar } from "lucide-react";

const page = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        {/* ===== LIST PANEL ====== */}
        <div className="col-span-3 border-r border-slate-200">
          <PanelHeader title="Appointments" count="90" icon={Calendar} />
          <ListPanel />
        </div>
        {/* ===== DISPLAY PANEL ====== */}
        <div className="col-span-9">
          <div className="py-1 border-b bg-[#f1f1f1] dark:bg-[#151518]">
            <div className="flex items-center justify-end">
              <div className="flex items-center justify-center gap-2 px-3">
                <NewButton
                  href="/appointments/new"
                  title="New Appointment"
                  className="shadow gap-1 transition-all duration-300 dark:hover:bg-slate-950"
                />
              </div>
            </div>
          </div>
          <HomeDisplayCard />
        </div>
      </div>
    </div>
  );
};

export default page;
