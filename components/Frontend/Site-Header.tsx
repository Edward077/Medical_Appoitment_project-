"use client";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { navigation } from "@/constants";
import { Hospital, LogIn } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";
import { DarkModeToggle } from "../DarkModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export const SiteHeader = ({ session }: { session: Session | null }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const user = session?.user;
  const router = useRouter();

  async function handleLogout() {
    await signOut();
    router.push("/authentication/login");
  }

  return (
    <div className="h-20">
      {/* ===== HEADER SECTION ===== */}
      <header className="fixed inset-x-0 top-0 bg-[#f1f1f1] dark:bg-slate-900 dark:text-white z-50 border-b border-gray-200 w-full">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Logo />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
            {session && session.user && user?.email ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full border border-[#1b6a88]"
                  >
                    <Avatar className="cursor-pointer">
                      {user?.image ? (
                        <AvatarImage
                          src="/images/doc.jpeg"
                          className="rounded-full"
                          width={50}
                          height={50}
                        />
                      ) : (
                        <AvatarFallback>CN</AvatarFallback>
                      )}
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                  <DropdownMenuLabel className="text-start">
                    {user?.name}
                  </DropdownMenuLabel>
                  <DropdownMenuLabel className="text-center font-light text-sm text-slate-500">
                    {user?.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <button
                      onClick={() => handleLogout()}
                      className="cursor-pointer"
                    >
                      Logout
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild>
                <Link
                  href="/authentication/login"
                  className="flex items-center gap-1 bg-slate-900 text-white p-2 rounded-md dark:bg-white text-sm font-semibold leading-6 dark:text-slate-900"
                >
                  <LogIn className="w-4 h-4" />
                  Log in
                </Link>
              </Button>
            )}

            {/* ===== DARK MODE TOGGLE BUTTON */}
            <DarkModeToggle />
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">CareConnect</span>
                <Hospital className="w-20 h-10" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/authentication/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {/* ===== HEADER SECTION // ===== */}
    </div>
  );
};
