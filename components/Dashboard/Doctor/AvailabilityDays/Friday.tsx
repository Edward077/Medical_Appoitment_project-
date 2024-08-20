"use client";

import { createAvailability, updateAvailability } from "@/actions/onboarding";
import { generateTimeArray } from "@/lib/timeArray";
import React, { useState } from "react";
import toast from "react-hot-toast";
import SelectedTimes from "./SelectedTimes";

const Friday = ({ profile, day }: { profile: any; day: string }) => {
  const availability = profile?.availability || "";
  let initialData: string[] = [];
  if (profile && profile.availability) {
    initialData = profile?.availability[day] || [];
  }
  const timeArrays = generateTimeArray();
  const [selectedTimes, setSelectedTimes] = useState<string[]>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  // console.log(availability);

  function handleAddTime(time: string) {
    if (!selectedTimes.includes(time)) {
      setSelectedTimes((prevTimes) => [...prevTimes, time]);
      toast.success(`${time} has been added`);
    } else {
      toast.error(`${time} is already selected`);
    }
  }

  function handleRemoveTime(time: string) {
    setSelectedTimes((prevTimes) => prevTimes.filter((t) => t !== time));
    toast.success(`${time} has been removed`);
  }

  function handleAllTimes() {
    setSelectedTimes([...timeArrays]);
    toast.success("All time added successfully");
  }

  function handleClearAllTimes() {
    if (selectedTimes) {
      setSelectedTimes([]);
      toast.success("Selected times cleared successfully");
    }
  }

  async function handleSubmit() {
    setIsLoading(true);
    try {
      if (profile?.id && availability?.id) {
        const data = {
          friday: selectedTimes,
          doctorProfileId: profile.id,
        };
        await updateAvailability(availability.id, data);
        setIsLoading(false);
        toast.success("Settings Updated successfully");
        // console.log(data);
      } else if (profile?.id) {
        const data = {
          friday: selectedTimes,
          doctorProfileId: profile.id,
        };
        await createAvailability(data);
        setIsLoading(false);
        toast.success("Settings Saved successfully");
        // console.log(data);
      } else {
        setIsLoading(false);
        // console.log("Profile Id not found");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("An error occurred while saving settings");
      // console.log(error);
    }
  }

  return (
    <SelectedTimes
      handleAllTimes={handleAllTimes}
      timeArrays={timeArrays}
      handleAddTime={handleAddTime}
      selectedTimes={selectedTimes}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      handleRemoveTime={handleRemoveTime}
      handleClearAllTimes={handleClearAllTimes}
      day={day}
    />
  );
};

export default Friday;
