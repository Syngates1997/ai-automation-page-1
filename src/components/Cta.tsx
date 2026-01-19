import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { finalCta, roiSection } from "@/config/content";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Cta = () => {
  return (
    <section id="cta" className="py-16 md:py-20">
      <div className="container">
        {/* ROI Urgency */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-xl md:text-2xl font-light tracking-elegant text-muted-foreground mb-8">
            {roiSection.headline}
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
            {roiSection.items.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-semibold text-primary">
                  {item.metric}
                </p>
                <p className="text-sm text-muted-foreground">{item.cost}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-10 md:p-16 lg:p-20 text-center max-w-4xl mx-auto">
          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              {finalCta.headline}
            </h2>

            <p className="text-lg text-black/80 font-medium mb-4">
              {finalCta.subheadline}
            </p>

            <p className="text-black/70 text-lg md:text-xl mb-8 leading-relaxed">
              {finalCta.description}
            </p>

            {/* Risk Reversals */}
            {finalCta.riskReversals && (
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {finalCta.riskReversals.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-black/80"
                  >
                    <CheckCircle className="w-4 h-4 text-black/70" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            <Button
              asChild
              size="lg"
              className="group px-10 py-7 text-lg font-semibold bg-black text-white hover:bg-black/90"
            >
              <Link to={finalCta.cta.href}>
                {finalCta.cta.text}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <p className="text-sm text-black/60 mt-6">{finalCta.trust}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
