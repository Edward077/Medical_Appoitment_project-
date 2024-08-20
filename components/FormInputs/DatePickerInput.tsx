"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerInputProps = {
  date: any;
  setDate: any;
  title: string;
  className: string;
  errors: any;
};

export function DatePickerInput({
  date,
  setDate,
  title,
  className = "",
  errors,
}: DatePickerInputProps) {
  return (
    <div className={className}>
      <h2 className="text-normal mb-1 text-slate-800">{title}</h2>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal bg-white",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Choose a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {errors[`${title}`] && (
        <span className="text-xs text-red-600">{title} is required</span>
      )}
    </div>
  );
}
