import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";

export function CustomAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => {
        return (
          <AccordionItem key={index} value={faq.value}>
            <AccordionTrigger className="font-normal text-[18px] hover:no-underline">
              {faq.title}
            </AccordionTrigger>
            <AccordionContent className="text-[15px] line-clamp-4">
              {faq.description}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
