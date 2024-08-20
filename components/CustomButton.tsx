import Link from "next/link";
import { Button } from "./ui/button";

type CustomButtonProps = {
  title: string;
  icon?: any;
  href?: string;
  className?: string;
};
const CustomButton = ({ title, icon, href, className }: CustomButtonProps) => {
  const Icon = icon;
  return (
    <>
      {href ? (
        <Button asChild className={className}>
          <Link href={href} className="flex items-center">
            {Icon && <Icon className="mr-2 h-4 w-4" />}
            {title}
          </Link>
        </Button>
      ) : (
        <Button className="hover:bg-blue-600 hover:transition-all hover:duration-300">
          {Icon && <Icon className="mr-2 h-4 w-4" />}
          {title}
        </Button>
      )}
    </>
  );
};

export default CustomButton;
