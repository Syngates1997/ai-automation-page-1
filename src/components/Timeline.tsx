import { processSteps } from "@/config/content";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

export const Timeline = () => {
  return (
    <section id="process" className="container py-16 sm:py-24">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-elegant mb-4">
          In 3 Schritten zum
          <br className="hidden sm:block" />
          <span className="font-display italic text-primary"> automatisierten Unternehmen</span>
        </h2>
      </div>

      {/* Desktop: Horizontal Steps */}
      <div className="hidden md:block max-w-5xl mx-auto">
        {/* Steps Row */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          {/* Steps */}
          <div className="grid grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-medium shadow-lg shadow-primary/20 relative z-10">
                    {step.step}
                  </div>
                </div>

                {/* Step Content Card */}
                <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all text-center">
                  {step.duration && (
                    <Badge variant="outline" className="mb-3 text-xs border-primary/30 text-primary">
                      {step.duration}
                    </Badge>
                  )}
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {step.subtitle}
                  </p>
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2 text-left">
                    {step.items.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical Steps */}
      <div className="md:hidden max-w-sm mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

          {/* Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative flex gap-5">
                {/* Step Circle */}
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shadow-lg shadow-primary/20 flex-shrink-0 relative z-10">
                  {step.step}
                </div>

                {/* Step Content */}
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {step.subtitle}
                    </p>
                    {step.duration && (
                      <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                        {step.duration}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
