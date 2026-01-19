import { outcomes } from "@/config/content";
import * as Icons from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp: Icons.TrendingUp,
  CheckCircle: Icons.CheckCircle,
  PiggyBank: Icons.PiggyBank,
  Clock: Icons.Clock,
};

export const Outcomes = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-elegant">
              {outcomes.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {outcomes.items.map((item, index) => {
              const Icon = iconMap[item.icon] || Icons.CheckCircle;
              return (
                <div
                  key={index}
                  className="p-6 md:p-8 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors min-h-[160px]"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
