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
import { Input } from "../ui/input";
import { getApplicationByTrackingNumber } from "@/actions/onboarding";
import { useOnBoardingContext } from "@/context/context";

const FormSchema = z.object({
  trackingNumber: z.string().min(2, {
    message: "Tracking Number must be 12 characters.",
  }),
});

export default function TrackApplicationForm() {
  const { setSavedDBData } = useOnBoardingContext();
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      trackingNumber: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);

    try {
      // Make a request
      const res = await getApplicationByTrackingNumber(data.trackingNumber);
      // Save data to the context api
      setSavedDBData(res?.data);
      if (res?.status === 404) {
        setShowNotification(true);
        setLoading(false);
      }
      if (res?.status === 200) {
        toast.success("Data retrived successfully, redirecting....");
        setLoading(false);
        router.push(`/onboarding/${res.data?.userId}?page=${res.data?.page}`);
      } else {
        throw new Error("Something went wrong from the server");
      }
    } catch (error) {
      // toast.error("Something went wrong from the server, try again");
      setLoading(false);
      console.log(error);
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
            <span className="font-medium">Wrong Tracking Number!</span>&nbsp;
            Check the 12-Character Tracking Number assigned to you & Try Again
          </Alert>
        )}

        <FormField
          control={form.control}
          name="trackingNumber"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Tracking Number</FormLabel>
              <FormControl className="w-full">
                <Input
                  placeholder="Enter your Tracking Number, Eg: 1CFFSNMIQB5J"
                  className="w-full"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-xs">
                Your Tracking Number was assigned to you while creating your
                profile
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
