import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

type NewButtonProps = {
  title: string;
  className?: string;
  href: any;
};

const NewButton = ({ title, className, href }: NewButtonProps) => {
  return (
    <Button variant="ghost" className={className} asChild>
      <Link href={href}>
        <Plus className="w-5 h-5" />
        {title}
      </Link>
    </Button>
  );
};

export default NewButton;
