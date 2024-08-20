"use client";

import { Tabs } from "flowbite-react";
import Sunday from "./AvailabilityDays/Sunday";
import Monday from "./AvailabilityDays/Monday";
import Tuesday from "./AvailabilityDays/Tuesday";
import Wednesday from "./AvailabilityDays/Wednesday";
import Thursday from "./AvailabilityDays/Thursday";
import Friday from "./AvailabilityDays/Friday";
import Saturday from "./AvailabilityDays/Saturday";
import { DoctorProfile } from "@prisma/client";

const AvailabilitySettings = ({
  profile,
}: {
  profile: DoctorProfile | undefined | null;
}) => {
  const dayTabs = [
    {
      title: "Sunday",
      component: <Sunday profile={profile} day="sunday" />,
    },
    {
      title: "Monday",
      component: <Monday profile={profile} day="monday" />,
    },
    {
      title: "Tuesday",
      component: <Tuesday profile={profile} day="tuesday" />,
    },
    {
      title: "Wednesday",
      component: <Wednesday profile={profile} day="wednesday" />,
    },
    {
      title: "Thursday",
      component: <Thursday profile={profile} day="thursday" />,
    },
    {
      title: "Friday",
      component: <Friday profile={profile} day="friday" />,
    },
    {
      title: "Saturday",
      component: <Saturday profile={profile} day="saturday" />,
    },
  ];
  return (
    <div className="dark:bg-[#151518]">
      <p className="py-7">Choose your availability for the week</p>

      <Tabs aria-label="Tabs with underline" style="underline">
        {dayTabs.map((tab, index) => {
          return (
            <Tabs.Item key={index} title={tab.title}>
              <span className="font-medium text-gray-800 dark:text-white">
                {tab.component}
              </span>
            </Tabs.Item>
          );
        })}
      </Tabs>
    </div>
  );
};

export default AvailabilitySettings;
