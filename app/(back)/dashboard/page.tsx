import Dashboard from "@/components/Dashboard/Dashboard";
import DoctorDashboard from "@/components/Dashboard/DoctorDashboard";
import PatientDashboard from "@/components/Dashboard/PatientDashboard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const role = user?.role;

  if (role === "DOCTOR") {
    return (
      <div>
        <p>Role: {user?.role}</p>
        <DoctorDashboard />
      </div>
    );
  }
  if (role === "USER") {
    return (
      <div>
        <p>Role: {user?.role}</p>
        <PatientDashboard />
      </div>
    );
  }
  return (
    <div>
      <p>Role: {user?.role}</p>
      <Dashboard />
    </div>
  );
}
