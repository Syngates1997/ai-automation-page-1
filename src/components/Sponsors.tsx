import { trustMetrics } from "@/config/content";

const tools = [
  { name: "n8n", icon: "⚡" },
  { name: "Make", icon: "🔄" },
  { name: "Zapier", icon: "⚡" },
  { name: "Claude AI", icon: "🤖" },
  { name: "OpenAI", icon: "🧠" },
  { name: "Slack", icon: "💬" },
  { name: "HubSpot", icon: "🎯" },
  { name: "Notion", icon: "📝" },
  { name: "Airtable", icon: "📊" },
  { name: "Google Sheets", icon: "📗" },
  { name: "Webflow", icon: "🌐" },
  { name: "Vercel", icon: "▲" },
  { name: "Stripe", icon: "💳" },
  { name: "Cal.com", icon: "📅" },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="py-12 md:py-16">
      {/* Trust Metrics */}
      <div className="container mb-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {trustMetrics.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-light text-primary mb-1">
                {metric.value}
              </p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Label */}
      <div className="container">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Tools & Integrationen, die wir nutzen
        </p>
      </div>

      {/* Animated Tools Slider */}
      <div className="w-full overflow-hidden bg-black/50 py-5 border-y border-white/10">
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {/* Duplicate for seamless animation */}
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 md:mx-8 flex items-center gap-2"
            >
              <span className="text-lg">{tool.icon}</span>
              <span className="text-white/70 text-sm font-medium whitespace-nowrap hover:text-primary transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
