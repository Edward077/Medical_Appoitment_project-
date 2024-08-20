import RegisterForm from "@/components/Auth/RegisterForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

const RegisterPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  const { role, plan } = searchParams;
  return (
    <div className="bg-[#f1f1f1] dark:bg-slate-900 min-h-screen py-[80px]">
      <div className="grid md:grid-cols-2 grid-cols-1 w-full max-w-4xl mx-auto bg-white border border-gray-500 rounded-lg shadow overflow-hidden">
        <div className="hidden rounded-md md:flex">
          <Image
            src="/images/login.jpeg"
            alt="Register logo"
            width={540}
            height={150}
          />
        </div>
        <div className="">
          <RegisterForm role={role} plan={plan} />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
