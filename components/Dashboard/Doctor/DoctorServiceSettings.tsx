import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UpdateDoctorServiceForm from "./UpdateDoctorServiceForm";
import { getServices } from "@/actions/service";
import { getSpecialties } from "@/actions/specialty";
import { getSymptoms } from "@/actions/symptoms";
import { DoctorProfile } from "@prisma/client";

const DoctorServiceSettings = async ({
  profile,
}: {
  profile: DoctorProfile | undefined | null;
}) => {
  const services = (await getServices()).data;
  const specialties = (await getSpecialties()).data;
  const symptoms = (await getSymptoms()).data;

  return (
    <div className="grid gap-6 w-full">
      <Card className="w-full">
        <UpdateDoctorServiceForm
          profile={profile}
          services={services}
          specialties={specialties}
          symptoms={symptoms}
        />
      </Card>
    </div>
  );
};

export default DoctorServiceSettings;
