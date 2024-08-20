"use client";

import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </SessionProvider>
  );
};

export default Providers;
