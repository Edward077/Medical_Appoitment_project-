"use client";

import React from "react";
import { DatePicker, Space } from "antd";
import { Dayjs } from "dayjs";

interface CustomDatePickerProps {
  title: string;
  date: Dayjs | null;
  setDate: (date: Dayjs | null) => void;
  className: string;
  errors: any;
  // errors: { [key: string]: string | undefined };
}

const onOk = (value: Dayjs | null) => {
  console.log("onOk: ", value);
};

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  title,
  date,
  setDate,
  className = "w-full",
  errors,
}) => {
  return (
    <div className={className}>
      <h2 className="text-normal mb-1 text-slate-800">{title}</h2>
      <Space direction="vertical" size={12}>
        <DatePicker
          value={date}
          onChange={(date) => setDate(date)}
          onOk={onOk}
        />
      </Space>
      {errors[title] && (
        <span className="text-xs text-red-600">{errors[title]}</span>
      )}
    </div>
  );
};
