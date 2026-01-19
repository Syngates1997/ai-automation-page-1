const testimonials = [
  {
    quote:
      "Innerhalb von 6 Wochen haben wir unser Fulfillment komplett automatisiert. Ich kann jetzt 3x so viele Kunden betreuen – ohne zusätzliche Mitarbeiter.",
    name: "Michael K.",
    role: "Geschäftsführer",
    company: "Performance Agentur",
    metric: "3x mehr Kapazität",
  },
  {
    quote:
      "Vorher haben wir 15 Stunden pro Woche mit manuellem Reporting verbracht. Jetzt läuft alles automatisch. Die Zeit investiere ich in Kundenakquise.",
    name: "Sandra M.",
    role: "Inhaberin",
    company: "B2B Beratung",
    metric: "15h/Woche gespart",
  },
  {
    quote:
      "Endlich ein System, das mitwächst. Wir sind von 5 auf 20 Kunden gewachsen, ohne im Chaos zu versinken.",
    name: "Thomas R.",
    role: "Founder",
    company: "Marketing Agentur",
    metric: "4x Kundenwachstum",
  },
];

const trustIndicators = [
  { value: "50+", label: "Automatisierte Systeme" },
  { value: "1.200+", label: "Stunden gespart/Monat" },
  { value: "98%", label: "Kundenzufriedenheit" },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/30"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">
            Kundenstimmen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Agenturen und Berater, die mit Flowstack Systems ihre Prozesse
            transformiert haben.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Metric Badge */}
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6">
                {testimonial.metric}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-10 border-t border-gray-200 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900">
                  {indicator.value}
                </div>
                <div className="text-gray-500 text-sm">{indicator.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
