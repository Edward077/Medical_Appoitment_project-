"use client";

import {
  AlarmClock,
  Bell,
  BrainIcon,
  CalendarPlus,
  File,
  Globe2Icon,
  HomeIcon,
  Mailbox,
  Power,
  Settings,
  SettingsIcon,
  SquareActivity,
  UsersIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import { redirect, usePathname, useRouter } from "next/navigation";
import Logo from "../Logo";
import { cn } from "@/lib/utils";
import { Session } from "next-auth";
import { FaQuestion } from "react-icons/fa";
import { signOut } from "next-auth/react";

export default function Sidebar({ session }: { session: Session }) {
  const router = useRouter();
  const { user } = session;
  const role = user?.role;
  const pathname = usePathname();

  const roles = {
    // ===== USER LINKS =====
    USER: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: HomeIcon,
      },
      {
        title: "My Appointments",
        path: "/dashboard/my-appointments",
        icon: AlarmClock,
        badgeCount: 9,
      },
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: Settings,
      },
      {
        title: "Support",
        path: "/dashboard/support",
        icon: FaQuestion,
      },
    ],

    // ===== ADMIN LINKS =====
    ADMIN: [
      {
        title: "Dasboard",
        path: "/dashboard",
        icon: HomeIcon,
      },
      {
        title: "Appointments",
        path: "/dashboard/appointments",
        icon: AlarmClock,
        badgeCount: 9,
      },
      {
        title: "Doctors",
        path: "/dashboard/doctors",
        icon: UsersIcon,
      },
      {
        title: "Services",
        path: "/dashboard/services",
        icon: CalendarPlus,
      },
      {
        title: "Specialties",
        path: "/dashboard/specialties",
        icon: BrainIcon,
      },
      {
        title: "Symptoms",
        path: "/dashboard/symptoms",
        icon: BrainIcon,
      },
      {
        title: "Patients",
        path: "/dashboard/patients",
        icon: SquareActivity,
      },
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: SettingsIcon,
      },
    ],

    // ===== DOCTOR LINKS =====
    DOCTOR: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: HomeIcon,
      },
      {
        title: "Appointments",
        path: "/dashboard/appointments",
        icon: AlarmClock,
        badgeCount: 9,
      },
      {
        title: "Patients",
        path: "/dashboard/patients",
        icon: SquareActivity,
      },
      {
        title: "Tasks",
        path: "/dashboard/tasks",
        icon: File,
      },
      {
        title: "Inbox",
        path: "/dashboard/inbox",
        icon: Mailbox,
      },
      {
        title: "Settings",
        path: "/dashboard/setting",
        icon: Settings,
      },
      {
        title: "Website",
        path: "/",
        icon: Globe2Icon,
      },
    ],
  };

  let sidebarLinks = roles[role] || [];

  async function handleLogout() {
    await signOut();
    router.push("/");
  }
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="">
              <Logo />
            </span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 mt-5">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {sidebarLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    pathname === item.path ? "bg-muted" : ""
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                  {item.badgeCount && (
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      {item.badgeCount}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              {/* <CardTitle>Upgrade to Pro</CardTitle> */}
              <CardDescription className="flex items-center justify-center">
                Ready to take a break ?
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button onClick={handleLogout} size="sm" className="w-full">
                <Power className="w-4 h-4 mr-1" />
                Logout
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
