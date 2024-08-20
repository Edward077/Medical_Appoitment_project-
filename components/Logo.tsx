import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex justify-center">
      <h3 className="text-center uppercase font-bold text-sm text-blue-500 border border-[#1b6a88] rounded-2xl px-4 py-1">
        Care<span className="text-slate-900 dark:text-[#1b6a88]">Connect</span>
      </h3>
    </Link>
  );
};

export default Logo;
