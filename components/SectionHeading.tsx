import React from "react";

const SectionHeading = ({ title }: { title: string }) => {
  return (
    <h2 className="mb-3 text-2xl font-bold leading-[1.2] text-dark dark:text-white sm:text-3xl md:text-[30px]">
      {title}
    </h2>
  );
};

export default SectionHeading;
