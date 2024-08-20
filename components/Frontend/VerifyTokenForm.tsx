"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { updateUserById } from "@/actions/users";
import { UserRole } from "@prisma/client";

const FormSchema = z.object({
  token: z.string().min(6, {
    message: "Your OTP code must be 6 characters.",
  }),
});

export default function VerifyTokenForm({
  userToken,
  id,
  role,
}: {
  userToken: number | undefined;
  id: string;
  role: UserRole | undefined;
}) {
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      token: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    const userInputToken = parseInt(data.token);
    if (userInputToken === userToken) {
      setShowNotification(false);
      //Update User
      try {
        await updateUserById(id);
        setLoading(false);
        // reset();
        toast.success("Account Verified successfully");
        if (role === "DOCTOR") {
          router.push(`/onboarding/${id}`);
        } else {
          router.push("/authentication/login");
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else {
      setShowNotification(true);
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full  space-y-6"
      >
        {showNotification && (
          <Alert
            color="failure"
            className="bg-red-500 text-white"
            icon={HiInformationCircle}
          >
            <span className="font-medium">Wrong Token!</span> Please Check the
            token and Try Again
          </Alert>
        )}
        <FormField
          control={form.control}
          name="token"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="dark:text-[#002479] text-[15px]">
                Enter Token Here
              </FormLabel>
              <FormControl className="dark:bg-slate-900">
                <InputOTP
                  maxLength={6}
                  {...field}
                  className="dark:placeholder:text-slate-950"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator className="dark:text-[#1b6a88]" />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription className="dark:text-gray-500">
                Please enter the 6-figure OTP code sent to your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-blue-500 hover:bg-[#1b6a88] text-white hover:duration-300 transition-all"
        >
          Verify Token
        </Button>
      </form>
    </Form>
  );
}
