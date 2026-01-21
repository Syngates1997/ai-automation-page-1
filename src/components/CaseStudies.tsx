import { caseStudiesSection, caseStudies } from "@/config/content";
import { Play } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="container py-16 sm:py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-elegant mb-4">
          {caseStudiesSection.headline}
        </h2>
      </div>

      {/* Case Studies */}
      <div className="max-w-5xl mx-auto space-y-12">
        {caseStudies.map((study, index) => {
          const isMirrored = index === 1;

          return (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border/50 p-8 md:p-12 shadow-sm"
            >
              {/* Upper Section: 2 Columns */}
              <div className={`grid md:grid-cols-2 gap-8 md:gap-12`}>
                {/* Content Column */}
                <div className={`space-y-6 ${isMirrored ? "md:order-2" : "md:order-1"}`}>
                  {/* Category */}
                  <p className="text-sm text-primary font-medium uppercase tracking-widest">
                    {study.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-light text-foreground leading-tight">
                    {study.title || `${study.results[0]?.value} ${study.results[0]?.label}`}
                  </h3>

                  {/* Problem */}
                  <div>
                    <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                      Problem
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                      Lösung
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Video/Image Column */}
                <div className={`relative pb-8 ${isMirrored ? "md:order-1" : "md:order-2"}`}>
                  <div className="aspect-video rounded-xl overflow-hidden bg-muted border border-border/50 relative">
                    <img
                      src={study.videoThumbnail || "https://images.unsplash.com/photo-1551434678-e076c223a692?w=640&h=360&fit=crop"}
                      alt={`${study.category} Case Study`}
                      className="w-full h-full object-cover"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-colors shadow-lg">
                        <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="white" />
                      </button>
                    </div>
                  </div>

                  {/* Author Badge */}
                  <div className="absolute -bottom-4 left-4 right-4 md:left-6 md:right-6">
                    <div className="bg-background rounded-lg border border-border p-3 shadow-md flex items-center gap-3">
                      <Avatar className="h-10 w-10 border border-border">
                        <AvatarImage
                          alt={study.author.name || "Author"}
                          src={study.author.image}
                        />
                        <AvatarFallback className="bg-muted text-muted-foreground text-sm">
                          {(study.author.name || "A")
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <p className="font-medium text-sm text-foreground truncate">
                          {study.author.name || study.author.role}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {study.author.title ? `${study.author.title}, ${study.author.company}` : study.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border/50 my-8 md:my-10 mt-12 md:mt-14" />

              {/* Lower Section: Results + Metrics */}
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {/* Quote */}
                <div>
                  <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                    Feedback
                  </p>
                  <p className="text-muted-foreground italic">{study.quote}</p>
                </div>

                {/* Metrics */}
                {study.results.slice(0, 2).map((result, idx) => (
                  <div
                    key={idx}
                    className="text-center md:text-left p-6 rounded-xl bg-primary/5 border border-primary/20"
                  >
                    <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                      {result.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudies;
