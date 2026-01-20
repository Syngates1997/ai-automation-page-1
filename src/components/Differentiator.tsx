import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Clock: Icons.Clock,
  Zap: Icons.Zap,
  TrendingUp: Icons.TrendingUp,
  TrendingDown: Icons.TrendingDown,
  Shield: Icons.Shield,
  AlertTriangle: Icons.AlertTriangle,
  Database: Icons.Database,
  FileQuestion: Icons.FileQuestion,
  RefreshCw: Icons.RefreshCw,
  Minus: Icons.Minus,
  Hourglass: Icons.Hourglass,
  Users: Icons.Users,
  Bot: Icons.Bot,
};

const comparisonRows = [
  {
    left: { icon: "Clock", title: "Arbeitet 24/7", highlight: "24/7", subtitle: "Nie krank, nie Urlaub, nie müde" },
    right: { icon: "Clock", title: "Arbeitet 8-9h/Tag", highlight: "8-9h/Tag", subtitle: "Urlaub, Krankheit, Überstunden" }
  },
  {
    left: { icon: "Zap", title: "Reagiert in Minuten", highlight: "in Minuten", subtitle: "Konstant schnelle Bearbeitung" },
    right: { icon: "Hourglass", title: "Reagiert in 2-10 Stunden", highlight: "2-10 Stunden", subtitle: "Je nach Auslastung und Priorität" }
  },
  {
    left: { icon: "TrendingUp", title: "Skaliert ohne Mehrkosten", highlight: "ohne Mehrkosten", subtitle: "Marginale Zusatzkosten bei Wachstum" },
    right: { icon: "TrendingDown", title: "Kosten steigen linear", highlight: "steigen linear", subtitle: "Mehr Kunden = mehr Personal" }
  },
  {
    left: { icon: "Shield", title: "Konstante Qualität", highlight: "Konstante", subtitle: "Keine Schwankungen durch Stress" },
    right: { icon: "AlertTriangle", title: "Variable Qualität", highlight: "Variable", subtitle: "Abhängig von Tagesform" }
  },
  {
    left: { icon: "Database", title: "Lückenlose Dokumentation", highlight: "Lückenlose", subtitle: "Alles automatisch erfasst" },
    right: { icon: "FileQuestion", title: "Unvollständige Doku", highlight: "Unvollständige", subtitle: "Vergessen, keine Zeit" }
  },
  {
    left: { icon: "RefreshCw", title: "Verbessert sich stetig", highlight: "stetig", subtitle: "Lernt und optimiert automatisch" },
    right: { icon: "Minus", title: "Stagniert mit der Zeit", highlight: "Stagniert", subtitle: "Shortcuts und Gewohnheiten" }
  }
];

export const Differentiator = () => {
  return (
    <section className="container py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-elegant mb-4">
            <span className="text-primary">Flowstack</span>
            <span className="text-muted-foreground mx-2 md:mx-3">vs.</span>
            <span className="text-foreground">Manuell</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
            Der strukturelle Unterschied auf einen Blick
          </p>
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="block md:hidden space-y-4 px-2">
          {comparisonRows.map((row, index) => {
            const LeftIcon = iconMap[row.left.icon];
            const RightIcon = iconMap[row.right.icon];
            return (
              <div key={index} className="rounded-xl border border-border overflow-hidden">
                {/* Positive */}
                <div className="p-4 bg-primary/5 border-b border-border">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <LeftIcon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground">
                        {row.left.title.replace(row.left.highlight, "").trim()}{" "}
                        <span className="text-primary">{row.left.highlight}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{row.left.subtitle}</p>
                    </div>
                  </div>
                </div>
                {/* Negative */}
                <div className="p-4 bg-amber-50/50 dark:bg-amber-950/20">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                      <RightIcon className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground/70">
                        {row.right.title.replace(row.right.highlight, "").trim()}{" "}
                        <span className="text-amber-600 dark:text-amber-400">{row.right.highlight}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{row.right.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: Side-by-Side Table */}
        <div className="hidden md:block rounded-2xl border border-border overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-2 bg-muted/50">
            <div className="p-5 border-r border-border">
              <div className="flex items-center gap-2 justify-center">
                <Icons.Bot className="w-5 h-5 text-primary" />
                <span className="font-medium text-primary">Mit Flowstack</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 justify-center">
                <Icons.Users className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span className="font-medium text-muted-foreground">Manueller Betrieb</span>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          {comparisonRows.map((row, index) => {
            const LeftIcon = iconMap[row.left.icon];
            const RightIcon = iconMap[row.right.icon];
            return (
              <div key={index} className="grid grid-cols-2 border-t border-border">
                {/* Left - Positive */}
                <div className="p-5 lg:p-6 border-r border-border bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 flex-shrink-0">
                      <LeftIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {row.left.title.replace(row.left.highlight, "").trim()}{" "}
                        <span className="text-primary">{row.left.highlight}</span>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{row.left.subtitle}</p>
                    </div>
                  </div>
                </div>
                {/* Right - Negative */}
                <div className="p-5 lg:p-6 bg-amber-50/50 dark:bg-amber-950/20 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex-shrink-0">
                      <RightIcon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground/80">
                        {row.right.title.replace(row.right.highlight, "").trim()}{" "}
                        <span className="text-amber-600 dark:text-amber-400">{row.right.highlight}</span>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{row.right.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-muted-foreground mt-8 font-display italic">
          Skalierung entsteht durch Systematisierung — nicht durch mehr Einsatz.
        </p>
      </div>
    </section>
  );
};
