import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type TextareaInputProps = {
  label: string;
  subText?: string;
  placeholder?: string;
  register: any;
  errors: any;
  className?: string;
  name: string;
  isRequired?: boolean;
};

export function TextareaInput({
  label,
  subText,
  placeholder,
  register,
  errors,
  name,
  className = "",
  isRequired = true,
}: TextareaInputProps) {
  return (
    <div className="grid w-full gap-1.5">
      <Label
        htmlFor="message-2"
        className="block text-sm font-medium leading-6 text-slate-900"
      >
        {label}
      </Label>
      <Textarea
        {...register(`${name}`, { required: isRequired })}
        placeholder={placeholder}
        id="message-2"
        name={name}
        className={cn(
          "block w-full rounded-md border-o py-1 bg-white text-slate-900 shadow-sm ring-1 ring-inset placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus-ring-indigo-600 sm:text-sm sm:leading-6",
          className
        )}
      />
      {errors[`${label}`] ? (
        <span className="text-xs text-red-600">{label} is required</span>
      ) : (
        <p className="text-sm text-muted-foreground">{subText}</p>
      )}
    </div>
  );
}
