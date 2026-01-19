import { processSteps } from "@/config/content";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";

export const Timeline = () => {
  return (
    <section id="process" className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-elegant mb-4">
            So läuft die
            <br />
            <span className="font-display italic text-primary">
              Zusammenarbeit
            </span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Step Number */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {step.step}
                  </span>
                </div>
              </div>

              {/* Content Card */}
              <Card
                className={`flex-1 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                } md:w-[45%] bg-card/50 border-border/50 hover:border-primary/30 transition-colors`}
              >
                <CardHeader className="pb-2 p-6">
                  <div className="flex items-center gap-4 mb-2">
                    {/* Mobile step number */}
                    <div className="md:hidden w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {step.step}
                      </span>
                    </div>
                    {step.duration && (
                      <Badge
                        variant="outline"
                        className="text-xs tracking-wide border-primary/30 text-primary"
                      >
                        {step.duration}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {step.subtitle}
                  </p>
                  <h3 className="text-xl font-semibold tracking-elegant text-foreground">
                    {step.title}
                  </h3>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-base text-muted-foreground"
                      >
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1 md:w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
