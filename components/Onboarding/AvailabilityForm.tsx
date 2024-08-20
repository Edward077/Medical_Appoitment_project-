"use client";

import { useForm } from "react-hook-form";
import { StepFormProps, type PersonalInfoFormProps } from "@/types/types";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { DatePickerInput } from "../FormInputs/DatePickerInput";
import { RadioButtonInput } from "../FormInputs/RadioButtonInput";
import FormHeading from "../FormHeading";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const AvailabilityForm = ({ page, title, description }: StepFormProps) => {
  const availabilityOptions = [
    {
      label: "Weekly",
      value: "weekly",
      description:
        "You're available one or more times during the week, every week",
    },
    {
      label: "Specific Dates",
      value: "specific dates",
      description: "You're only available on specific dates",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [dob, setDob] = useState<Date>();
  const [pExpiry, setPExpiry] = useState<Date>();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormProps>();

  async function onSubmit(data: PersonalInfoFormProps) {
    data.page = page;

    console.log(data);
    setIsLoading(true);
  }

  return (
    <div className="w-full">
      <FormHeading title={title} description={description} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 py-4 mx-auto"
      >
        {/* ====== NAMES ===== */}
        <TextInput
          label="Duration for your Meeting"
          register={register}
          name="duration"
          errors={errors}
          placeholder="What is the duration for your meetings"
        />

        <RadioButtonInput
          radioOptions={availabilityOptions}
          title="When are you available for this booking ?"
          name="availabilityOptions"
          register={register}
          errors={errors}
        />

        <div className="col-span-full">
          <h2>Define your weekly availability below:</h2>
          <div className="flex items-center justify-between border py-6 px-4 border-gray-100 rounded-lg">
            {/* ===== Checkbox ===== */}
            <div className="mr-5">
              <div className="flex items-center space-x-2">
                <Checkbox id="day" />
                <label
                  htmlFor="day"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Wednesday
                </label>
              </div>
            </div>
            {/* ===== Time ===== */}
            <div className="grid grid-cols-2 gap-4">
              {/* ===== FIRST GRID ===== */}
              <div className="grid grid-cols-3 gap-2">
                <Select>
                  <SelectTrigger id="hour">
                    <SelectValue placeholder="Hour" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => (
                      <SelectItem
                        key={i}
                        value={`${(i + 1).toString().padStart(2, "0")}`}
                      >
                        {(i + 1).toString().padStart(2, "0")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger id="minutes">
                    <SelectValue placeholder="Minutes" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 59 }, (_, i) => (
                      <SelectItem
                        key={i}
                        value={`${(i + 1).toString().padStart(2, "0")}`}
                      >
                        {(i + 1).toString().padStart(2, "0")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger id="dur">
                    <SelectValue placeholder="Choose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="am">AM</SelectItem>
                    <SelectItem value="pm">PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* ===== FIRST GRID ===== */}
              {/* ===== SECOND GRID ===== */}
              <div className="grid grid-cols-3 gap-2">
                <Select>
                  <SelectTrigger id="hour">
                    <SelectValue placeholder="Hour" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => (
                      <SelectItem
                        key={i}
                        value={`${(i + 1).toString().padStart(2, "0")}`}
                      >
                        {(i + 1).toString().padStart(2, "0")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger id="minutes">
                    <SelectValue placeholder="Minutes" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 59 }, (_, i) => (
                      <SelectItem
                        key={i}
                        value={`${(i + 1).toString().padStart(2, "0")}`}
                      >
                        {(i + 1).toString().padStart(2, "0")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger id="dur">
                    <SelectValue placeholder="Choose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="am">AM</SelectItem>
                    <SelectItem value="pm">PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* ===== SECOND GRID ===== */}
            </div>
            {/* ===== Window ===== */}
            <div className="ml-5">
              <Button variant="ghost">
                <Plus className="w-4 h-4 flex-shrink-0" /> Add window
              </Button>
            </div>
          </div>
        </div>

        {/* ===== Submit Button ===== */}
        <div className="flex justify-end">
          <SubmitButton
            title="Save and Continue"
            btnType="submit"
            loadingTitle="Saving... please wait !"
            isLoading={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default AvailabilityForm;
