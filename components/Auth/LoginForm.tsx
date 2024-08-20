"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../Logo";
import { LoginInputProps } from "@/types/types";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputProps>();

  async function onSubmit(data: LoginInputProps) {
    try {
      setIsLoading(true);
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setIsLoading(false);
        toast.error("Sign-in error: Check your credentials");
        setShowNotification(true);
      } else {
        // Sign-in was successful
        setShowNotification(false);
        reset();
        setIsLoading(false);
        toast.success("Login Successful");
        router.push("/dashboard");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
    }
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Logo />
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-slate-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {showNotification && (
            <Alert color="failure" icon={HiInformationCircle}>
              <span className="font-medium">Sign-in error!</span> Please Check
              your credentials
            </Alert>
          )}
          <TextInput
            label="Email address"
            register={register}
            name="email"
            errors={errors}
            placeholder="john.doe@domain.com"
            type="email"
          />

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  href="/authentication/forgot-password"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Forgotten Password ?
                </Link>
              </div>
            </div>
            <input
              {...register("password", { required: true })}
              id="password"
              name="password"
              type="password"
              required
              placeholder="**********"
              className="block w-full rounded-md border-o py-1.5 text-slate-900 shadow-sm ring-1 ring-inset placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus-ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.password && (
              <span className="text-xs text-red-600">Password is required</span>
            )}
          </div>

          <div className="flex justify-end">
            <SubmitButton
              title="Proceed to Login"
              btnType="submit"
              loadingTitle="Please wait..., while we log you in"
              isLoading={isLoading}
            />
          </div>
        </form>

        <p className="mt-5 text-center text-sm text-slate-900">
          Don&apos;t have an account ?{" "}
          <Link
            href="/authentication/register"
            className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
          >
            Join us in saving lives
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
