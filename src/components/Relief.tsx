import { relief } from "@/config/content";
import { MinusCircle } from "lucide-react";

export const Relief = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-elegant">
              <span className="font-display italic text-primary">
                {relief.headline}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {relief.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-5 md:p-6 rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 transition-colors"
              >
                <MinusCircle className="w-6 h-6 text-primary/70 mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80 text-base leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
