"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Hospital, Loader2, MapPin, Video } from "lucide-react";
import { DoctorProfile, Service, Specialty, Symptom } from "@prisma/client";
import toast from "react-hot-toast";
import { updateDoctorService } from "@/actions/service";
import Image from "next/image";
import { cn } from "@/lib/utils";

const UpdateDoctorServiceForm = ({
  services,
  specialties,
  symptoms,
  profile,
}: {
  services: Service[] | null;
  specialties: Specialty[] | null;
  symptoms: Symptom[] | null;
  profile: DoctorProfile | undefined | null;
}) => {
  const [selectedserviceId, setSelectedserviceId] = useState(
    profile?.serviceId
  );
  const [specialtyId, setSpecialtyId] = useState(profile?.specialtyId);
  const [symptomIds, setSymptomIds] = useState<string[]>(
    profile?.symptomIds || []
  );
  const [operationMode, setOperationMode] = useState(profile?.operationMode);

  const [loading, setLoading] = useState(false);
  const [specialtyLoading, setSpecialtyLoading] = useState(false);
  const [symptomLoading, setSymptomLoading] = useState(false);
  const [operationModeSaving, setOperationSavingMode] = useState(false);

  console.log(profile);

  if (status === "loading") {
    return (
      <div className="flex items-center">
        <Loader2 className="w-4 h-4 flex-shrink-0 mr-1 animate-spin" />
        <span>Loading user...</span>
      </div>
    );
  }

  const profileId = profile?.id;

  async function handleUpdateService() {
    setLoading(true);
    const data = {
      serviceId: selectedserviceId,
    };
    try {
      await updateDoctorService(profileId, data);
      toast.success("Doctor service successfully updated");
      setLoading(false);
    } catch (error) {
      toast.error("Doctor service update error");
      console.log("Doctor service update error: ", error);
      setLoading(false);
    }
  }

  async function handleUpdateSpecialty() {
    setSpecialtyLoading(true);
    const data = {
      specialtyId,
    };
    try {
      await updateDoctorService(profileId, data);
      toast.success("Doctor specialty successfully updated");
      setSpecialtyLoading(false);
    } catch (error) {
      toast.error("Doctor specialty update error");
      console.log("Doctor specialty update error: ", error);
      setSpecialtyLoading(false);
    }
  }

  async function handleUpdateSymptoms() {
    setSymptomLoading(true);
    const data = {
      symptomIds,
    };
    try {
      await updateDoctorService(profileId, data);
      toast.success("Doctor symptoms successfully updated");
      setSymptomLoading(false);
    } catch (error) {
      toast.error("Doctor symptoms update error");
      console.log("Doctor symptoms update error: ", error);
      setSymptomLoading(false);
    }
  }

  async function handleUpdateOperationSavingMode() {
    setOperationSavingMode(true);
    const data = {
      operationMode,
    };
    try {
      await updateDoctorService(profileId, data);
      toast.success("Doctor Operation Mode successfully updated");
      setOperationSavingMode(false);
    } catch (error) {
      toast.error("Doctor symptoms update error");
      console.log("Doctor symptoms update error: ", error);
      setOperationSavingMode(false);
    }
  }

  const operationModes = [
    {
      title: "Tele-Health",
      slug: "tele-health",
      icon: Video,
    },
    {
      title: "In-Person Visit",
      slug: "in-person-visit",
      icon: MapPin,
    },
    // {
    //   title: "Both Operation Modes",
    //   slug: "both-operation-modes",
    //   icon: Hospital,
    // },
  ];

  return (
    <>
      <CardContent className="space-y-4">
        {/* ===== SERVICE MODE ===== */}
        <div className="border shadow rounded-md p-4 my-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Choose Service Operation Mode
            </h2>
            <Button
              disabled={operationModeSaving}
              onClick={handleUpdateOperationSavingMode}
            >
              {operationModeSaving
                ? "Please wait, saving..."
                : "Update Operation Mode"}
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {operationModes &&
              operationModes.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    onClick={() => setOperationMode(item.title)}
                    key={index}
                    className={cn(
                      "flex items-center space-x-2 border border-slate-200 rounded-md py-2 px-4 cursor-pointer",
                      operationMode === item.title
                        ? "border-2 border-blue-500 rounded-md bg-slate-50"
                        : ""
                    )}
                  >
                    <Icon className="w-8 h-8 flex-shrink-0" />
                    <p className="text-md">{item.title}</p>
                  </button>
                );
              })}
          </div>
        </div>
        {/* ===== SERVICE MODE END ===== */}

        {/* ===== SERVICE ===== */}
        <div className="border shadow rounded-md p-4 my-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Choose Services to offer
            </h2>
            <Button disabled={loading} onClick={handleUpdateService}>
              {loading ? "Please wait, saving..." : "Update Services"}
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {services &&
              services.map((service, index) => {
                return (
                  <button
                    onClick={() => setSelectedserviceId(service.id)}
                    key={index}
                    className={cn(
                      "flex items-center space-x-2 border border-slate-200 rounded-md py-2 px-4 cursor-pointer",
                      selectedserviceId === service.id
                        ? "border-2 border-blue-500 rounded-md bg-slate-50"
                        : ""
                    )}
                  >
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      width={100}
                      height={100}
                      className="w-14 h-14"
                    />
                    <p className="text-xs">{service.title}</p>
                  </button>
                );
              })}
          </div>
        </div>
        {/* ===== SERVICE END ===== */}

        {/* ===== SPECIALTIES ===== */}
        <div className="border shadow rounded-md p-4">
          <div className="flex items-center justify-between mb-5">
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Choose Your Specialties
            </h2>
            <Button disabled={specialtyLoading} onClick={handleUpdateSpecialty}>
              {specialtyLoading
                ? "Please wait, saving..."
                : "Update Specialties"}
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {specialties &&
              specialties.map((specialty, index) => {
                return (
                  <button
                    onClick={() => setSpecialtyId(specialty.id)}
                    key={index}
                    className={cn(
                      "flex items-center space-x-2 border border-slate-200 rounded-md py-2 px-4 cursor-pointer",
                      specialtyId === specialty.id
                        ? "border-2 border-blue-500 rounded-md bg-slate-50"
                        : ""
                    )}
                  >
                    <p className="text-md">{specialty.title}</p>
                  </button>
                );
              })}
          </div>
        </div>
        {/* ===== SPECIALTIES END ===== */}

        {/* ===== SPECIALTIES ===== */}
        <div className="border shadow rounded-md p-4">
          <div className="flex items-center justify-between mb-5">
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Choose Symptoms
            </h2>
            <Button disabled={symptomLoading} onClick={handleUpdateSymptoms}>
              {symptomLoading ? "Please wait, saving..." : "Update Symptoms"}
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {symptoms &&
              symptoms.map((symptom, index) => {
                return (
                  <button
                    onClick={() => setSymptomIds([...symptomIds, symptom.id])}
                    key={index}
                    className={cn(
                      "flex items-center space-x-2 border border-slate-200 rounded-md py-2 px-4 cursor-pointer",
                      symptomIds.includes(symptom.id)
                        ? "border-2 border-blue-500 rounded-md bg-slate-50"
                        : ""
                    )}
                  >
                    <p className="text-md">{symptom.title}</p>
                  </button>
                );
              })}
          </div>
        </div>
        {/* ===== SPECIALTIES END ===== */}
      </CardContent>
    </>
  );
};

export default UpdateDoctorServiceForm;
