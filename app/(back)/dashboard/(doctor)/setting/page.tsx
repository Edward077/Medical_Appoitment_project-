import { getDoctorProfileById } from "@/actions/onboarding";
import AvailabilitySettings from "@/components/Dashboard/Doctor/AvailabilitySettings";
import DoctorServiceSettings from "@/components/Dashboard/Doctor/DoctorServiceSettings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log("User: ", user);
  const profile = await getDoctorProfileById(user?.id);
  console.log("Profile: ", profile);
  return (
    <div className="max-w-5xl mx-auto mt-5 bg-white dark:bg-[#151518] rounded-md shadow w-full px-6 py-6">
      <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
        Settings
      </h2>
      <Tabs defaultValue="availability" className="w-[1000px] py-4">
        <TabsList>
          <TabsTrigger value="availability">Availaibity Settings</TabsTrigger>
          <TabsTrigger value="service">Service Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="availability">
          {/* ===== TABS ===== */}
          <AvailabilitySettings profile={profile?.data} />
          {/* ===== END ===== */}
        </TabsContent>
        <TabsContent value="service">
          <DoctorServiceSettings profile={profile?.data} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
