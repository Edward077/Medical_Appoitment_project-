import CustomButton from "@/components/CustomButton";
import { CustomAccordion } from "@/components/Frontend/CustomAccordion";
import Pricing from "@/components/Frontend/Pricing";
import { cards, features } from "@/constants";
import Image from "next/image";
import React from "react";

const Doctors = () => {
  return (
    <div className="min-h-screen py-[80px] bg-[#f1f1f1] dark:bg-slate-900">
      <section className="px-2">
        <div className="max-w-6xl gap-6 mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-gray-700 dark:text-white leading-loose">
              <span className="text-blue-600">Join CareConnect:</span> Elevate
              Your Practice with Seamless Patient Engagement
            </h2>
            <p className="py-4 font-sans text-slate-600 text-justify text-[1.1rem]">
              Welcome to CareConnect, the premier platform designed to
              revolutionize your practice. Connect with patients effortlessly,
              manage appointments efficiently, and provide exceptional care—all
              in one place. Join us today and be a part of the future of
              healthcare.
            </p>
            <CustomButton
              title="Join Us in Saving Lives"
              href="/"
              className="bg-blue-600 hover:bg-[#1b6a88] dark:text-white hover:transition-all hover:duration-300"
            />
            {/* ===== Features ==== */}
            <div className="py-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <p key={index} className="flex items-center py-1">
                    <Icon className="w-4 h-4 mr-2 font-extrabold text-blue-600 flex-shrink-0" />
                    {feature.title}
                  </p>
                );
              })}
            </div>
            {/* ===== Features ==== */}
          </div>

          <Image
            src="/images/landing.png"
            width={626}
            height={280}
            alt="landing image"
            className="w-full"
          />
        </div>
      </section>

      <section className="px-2 py-10">
        <div className="max-w-6xl gap-8 mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <Image
              src="/images/doc.jpeg"
              width={626}
              height={4205}
              alt="landing image"
              className="w-full hidden md:block py-8"
            />
          </div>
          <div className="">
            <h2 className="md:text-2xl text-center font-bold text-gray-700 dark:text-[#1b6a88] leading-loose">
              Boost Your Income While Saving Lives
            </h2>

            <div className="grid grid-cols-2 gap-4 py-6">
              {cards.map((card, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 p-4 px-6 rounded-lg shadow-2xl"
                  >
                    <h3 className="text-xl font-semibold dark:text-[#1b6a88]">
                      {card.title}
                    </h3>
                    <p className="text-sm py-3 text-gray-500">
                      {card.description}
                    </p>
                    <CustomButton
                      title={card.linkTitle}
                      href={card.link}
                      className="bg-blue-600 text-white hover:bg-[#1b6a88] hover:text-white hover:transition-all hover:duration-300"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl gap-6 mx-auto py-10">
        <Pricing />
      </section>

      <section className="max-w-4xl gap-6 mx-auto py-10">
        <CustomAccordion />
      </section>
    </div>
  );
};

export default Doctors;
