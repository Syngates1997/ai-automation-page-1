import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems, siteConfig } from "@/config/content";

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-elegant text-gray-900 mb-4">
            Häufige{" "}
            <span className="font-display italic text-amber-600">Fragen</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Was du wissen solltest, bevor wir sprechen.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium text-gray-900 tracking-wide hover:text-amber-600 hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              Noch Fragen?{" "}
              <Link
                to={siteConfig.cta.href}
                className="text-amber-600 hover:text-amber-700 hover:underline underline-offset-4 transition-all font-medium"
              >
                Lass uns sprechen
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
