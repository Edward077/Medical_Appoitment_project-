import { plans } from "@/constants";
import { Check, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const Pricing = () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 dark:text-[#1b6a88] text-3xl font-semibold sm:text-4xl">
            Pricing for all sizes
          </h3>
          <div className="mt-3 max-w-xl">
            <p className="text-gray-500">
              Here are three pricing packages for CareConnect, designed to
              accommodate different levels of usage and practice needs
            </p>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${
                item.isMostPop ? "mt-10" : ""
              }`}
            >
              {item.isMostPop ? (
                <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">
                  Most popular
                </span>
              ) : (
                ""
              )}
              <div className="p-8 space-y-4 border-b">
                <span className="text-blue-500 dark:text-[#1b6a88] font-medium uppercase tracking-widest">
                  {item.name}
                </span>
                <div className="text-gray-800 dark:text-white text-3xl font-semibold">
                  ${item.price}{" "}
                  <span className="text-xl text-gray-600 dark:text-[#1b6a88] font-normal">
                    /mo
                  </span>
                </div>
                <p className="text-xs text-gray-500">{item.desc}</p>
                <div className="flex items-center gap-1">
                  <p>{item.fee}% transaction fee</p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button>
                          <HelpCircle className="w-4 h-4" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-slate-900 text-white text-xs">
                        <p>
                          Paypal/Stripe will charge their regular transaction
                          fee
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex items-center justify-center">
                  <Link
                    href={item.getStarted}
                    className="px-3 py-3 text-center rounded-lg w-full font-semibold text-sm duration-150 text-white bg-blue-500 hover:bg-[#1b6a88] active:bg-[#1b6a88]"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <ul className="p-8 space-y-3">
                <li className="pb-2 text-gray-800  dark:text-gray-500 font-medium">
                  <p>Features</p>
                </li>
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
