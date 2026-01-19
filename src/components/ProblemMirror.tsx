import { problemMirror } from "@/config/content";
import * as Icons from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UserX: Icons.UserX,
  TrendingDown: Icons.TrendingDown,
  AlertTriangle: Icons.AlertTriangle,
  Flame: Icons.Flame,
  Database: Icons.Database,
  RefreshCw: Icons.RefreshCw,
};

export const ProblemMirror = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/30">
      <div className="container">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-elegant text-gray-900">
            {problemMirror.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {problemMirror.problems.map((problem, index) => {
            const Icon = iconMap[problem.icon] || Icons.HelpCircle;
            return (
              <div
                key={index}
                className="p-6 md:p-8 rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow min-h-[180px]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-amber-100">
                    <Icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
