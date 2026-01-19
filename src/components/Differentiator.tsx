import { differentiator } from "@/config/content";
import { ArrowRight } from "lucide-react";

export const Differentiator = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white via-gray-50 to-amber-50/20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Das Problem ist nicht dein Team. Es ist das System.
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Die meisten Agenturen versuchen, mit mehr Personal zu skalieren.
              Das funktioniert – bis es nicht mehr funktioniert.
            </p>
          </div>

          {/* Comparison boxes */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10">
            {/* Old Way */}
            <div className="p-8 md:p-10 rounded-xl bg-white border border-gray-200 shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-400 mb-4">
                {differentiator.insight.left.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {differentiator.insight.left.description}
              </p>
            </div>

            {/* New Way */}
            <div className="p-8 md:p-10 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 shadow-lg text-center relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-amber-700 mb-4">
                {differentiator.insight.right.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {differentiator.insight.right.description}
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            {differentiator.conclusion.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-gray-700 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <p className="text-xl text-amber-600 font-display italic pt-2">
              {differentiator.keyInsight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
