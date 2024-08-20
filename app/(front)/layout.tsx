import Footer from "@/components/Frontend/Footer";
import { SiteHeader } from "@/components/Frontend/Site-Header";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <SiteHeader session={session} />
      <div>{children}</div>
      {/* <div className="mt-[80px]">{children}</div> */}
      <Footer />
    </div>
  );
}
