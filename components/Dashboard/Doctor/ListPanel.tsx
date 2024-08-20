import { ScrollArea } from "@/components/ui/scroll-area";
import { Dot, Fuel } from "lucide-react";
import Link from "next/link";

const tags = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `name-${i + 1}`,
}));

const ListPanel = () => {
  return (
    <div>
      <ScrollArea className="h-[75vh] w-full mt-4 px-2">
        {tags.map((tag, index) => (
          <>
            <Link
              key={index}
              href="/dashboard/appointments/view/1"
              className="dark:bg-[#151518] border border-slate-50 h-24 rounded-sm shadow-sm mb-2 text-sm py-3 px-2 w-full inline-block"
            >
              <div className="flex items-center justify-between pb-2">
                <h2>John Doe</h2>
                <span>4:00pm</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <div className="flex items-center">
                  <Dot className="w-6 h-6" />
                  <span>Follow Up</span>
                </div>
                <div className="flex items-center">
                  <Fuel className="w-5 h-5 mr-2" />
                  <span>Exam 2</span>
                </div>
              </div>
            </Link>
          </>
        ))}
      </ScrollArea>
    </div>
  );
};

export default ListPanel;
