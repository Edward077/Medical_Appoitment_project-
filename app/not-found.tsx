"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Custom404() {
  const pathname = usePathname();
  const [light, setLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prev) =>
        prev === "red" ? "yellow" : prev === "yellow" ? "green" : "red"
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-6xl font-bold text-gray-800 mb-5">404</div>
      <div className="mt-2 text-sm md:text-base lg:text-lg text-gray-600 text-center">
        Page not found : <code className="text-red-500">{pathname}</code>
      </div>
      <div className="flex space-x-2 mt-8">
        <div
          className={`w-8 h-8 rounded-full ${
            light === "red" ? "bg-red-500 animate-blink" : "bg-red-300"
          }`}
        ></div>
        <div
          className={`w-8 h-8 rounded-full ${
            light === "yellow" ? "bg-yellow-500 animate-blink" : "bg-yellow-300"
          }`}
        ></div>
        <div
          className={`w-8 h-8 rounded-full ${
            light === "green" ? "bg-green-500 animate-blink" : "bg-green-300"
          }`}
        ></div>
      </div>
      <Link
        href="/dashboard"
        className="mt-10 text-blue-500 shadow p-3 rounded-md hover:shadow-2xl"
      >
        Go back
      </Link>
    </div>
  );
}
