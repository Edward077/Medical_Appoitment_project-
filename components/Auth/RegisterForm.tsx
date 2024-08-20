"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import Logo from "../Logo";
import { type RegisterInputProps } from "@/types/types";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const RegisterForm = ({
  role = "USER",
  plan = "",
}: {
  role?: string | string[] | undefined;
  plan?: string | string[] | undefined;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputProps>();

  async function onSubmit(data: RegisterInputProps) {
    setIsLoading(true);

    data.role = role;
    data.plan = plan;

    try {
      const user = await createUser(data);
      if (user && user.status === 200) {
        console.log("User Created successfully");
        reset();
        setIsLoading(false);
        toast.success("User created successfully");
        router.push(`/verify-account/${user.data?.id}`);
        console.log(user.data);
      } else {
        setIsLoading(false);
        toast.error("Something went wrong");
        console.log("Error creating user: ", user.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Logo />
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-slate-900">
          Join us in saving lives
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <TextInput
            label="Full name"
            register={register}
            name="fullName"
            errors={errors}
            placeholder="John Doe"
          />

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <TextInput
                label="Email address"
                register={register}
                name="email"
                errors={errors}
                placeholder="john.doe@domain.com"
                type="email"
              />
            </div>
            <div className="sm:col-span-3">
              <TextInput
                label="Phone Number"
                register={register}
                name="phone"
                errors={errors}
                placeholder="+999 999 999 999"
                type="tel"
              />
            </div>
          </div>

          <TextInput
            label="Password"
            register={register}
            name="password"
            errors={errors}
            placeholder="*********"
            type="password"
          />

          <div className="flex justify-end">
            <SubmitButton
              title="Join Us Now"
              btnType="submit"
              loadingTitle="Creating user..."
              isLoading={isLoading}
            />
          </div>
        </form>

        <p className="mt-5 text-center text-sm text-slate-900">
          Already have an account ?{" "}
          <Link
            href="/authentication/login"
            className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
          >
            Proceed to Signin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
