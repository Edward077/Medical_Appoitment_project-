"use client";

import { footerNavs, socialLinks } from "@/constants";
import Logo from "../Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#f1f1f1] dark:bg-slate-900 dark:text-white px-4 py-5 w-full">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="gap-5 justify-between md:flex">
          <div className="flex-1">
            <div className="max-w-xs">
              <div className="flex justify-start">
                <Logo />
              </div>
              <p className="leading-relaxed mt-2 text-[15px] dark:text-gray-400">
                Your premier medical concierge. Enjoy tailored care, expert
                guidance, and compassionate support all in one place. Trust us
                to deliver excellence in every step of your healthcare journey.
              </p>
            </div>
          </div>
          <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0 dark:text-white">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                <h4 className="font-extrabold">{item.label}</h4>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <Link
                      href={el.href}
                      className="text-gray-400 font-semibold hover:text-[#1b6a88]"
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0 text-gray-400">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-extrabold text-[#1b6a88]">CareConnect</span>{" "}
            All rights reserved.
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <li
                    key={index}
                    className="w-10 h-10 border rounded-full flex items-center justify-center"
                  >
                    <Link href={social.href} target="_blank">
                      <Icon className={`w-6 h-6 ${social.color}`} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
