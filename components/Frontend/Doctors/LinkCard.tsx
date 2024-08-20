import { Specialty } from "@prisma/client";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

type LinkCardProps = {
  className?: string;
  specialties: Specialty[];
};
const LinkCard = ({ className, specialties }: LinkCardProps) => {
  return (
    <div className="grid lg:grid-col-5 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-6">
      {specialties &&
        specialties.map((specialty, index) => {
          return (
            <Link
              key={index}
              href={`specialties/${specialty.slug}`}
              className={`rounded-md flex py-3 px-6 bg-slate-100 items-center text-slate-800 gap-2 ${className} justify-between`}
            >
              <h2>{specialty.title}</h2>
              <FaLongArrowAltRight />
            </Link>
          );
        })}
    </div>
  );
};

export default LinkCard;
