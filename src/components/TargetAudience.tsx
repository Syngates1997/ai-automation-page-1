import { targetAudience } from "@/config/content";
import { Check, X } from "lucide-react";

export const TargetAudience = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-elegant">
              {targetAudience.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* For Whom */}
            <div className="p-8 md:p-10 rounded-2xl border border-primary/30 bg-primary/5">
              <h3 className="text-xl font-semibold text-primary mb-6">
                {targetAudience.forWhom.title}
              </h3>
              <ul className="space-y-4">
                {targetAudience.forWhom.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90 text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not For Whom */}
            <div className="p-8 md:p-10 rounded-2xl border border-border/50 bg-card/30">
              <h3 className="text-xl font-semibold text-muted-foreground mb-6">
                {targetAudience.notForWhom.title}
              </h3>
              <ul className="space-y-4">
                {targetAudience.notForWhom.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-6 h-6 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
