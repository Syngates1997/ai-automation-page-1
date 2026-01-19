/**
 * Landing Page Content Configuration
 * Style: jousefmurad.com (elegant dark theme with gold accents)
 * Content: German - B2B Process Architecture for Agencies
 * Framework: 14-section psychological conversion sequence
 */

// ============================================
// Section 1: Hero (Site Configuration)
// Psychology: Attention capture + Positioning
// ============================================
export const siteConfig = {
  name: "Jousef Murad",
  title: "Skalieren ohne Neueinstellungen.",
  titleAccent: "Wachsen ohne Mehrarbeit.", // Displayed in italic serif font
  tagline:
    "Dein Fulfillment läuft manuell. Deshalb wächst dein Aufwand mit jedem neuen Kunden – statt deine Marge.",
  // ABTF Bullet Points: Symptome & Frustrationen (keine Lösungen!)
  bulletPoints: [
    "Du bist in jedem Projekt der Engpass",
    "Mehr Umsatz bedeutet mehr Stress, nicht mehr Gewinn",
    "Dein Team fragt dich bei jeder Kleinigkeit",
    "Urlaub? Theoretisch möglich. Praktisch ein Risiko.",
  ],
  cta: {
    text: "Unverbindliche Analyse anfragen",
    href: "https://calendly.com/your-link/30min",
  },
  available: true,
};

// ============================================
// Navigation Links
// ============================================
export const navLinks = [
  { label: "Leistungen", href: "#services" },
  { label: "Prozess", href: "#process" },
  { label: "Referenzen", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

// ============================================
// Section 2: Trust Strip
// Psychology: Credibility anchor with specific numbers
// ============================================
export const trustMetrics = {
  headline: "Seit 8 Jahren. Für über 100 Unternehmen.",
  metrics: [
    { value: "100+", label: "Systeme implementiert" },
    { value: "50.000+", label: "manuelle Stunden ersetzt" },
    { value: "8+ Jahre", label: "Erfahrung in Prozessarchitektur" },
  ],
};

export const clientLogos = [
  { name: "Company 1", logo: "https://via.placeholder.com/150x50?text=Logo+1" },
  { name: "Company 2", logo: "https://via.placeholder.com/150x50?text=Logo+2" },
  { name: "Company 3", logo: "https://via.placeholder.com/150x50?text=Logo+3" },
  { name: "Company 4", logo: "https://via.placeholder.com/150x50?text=Logo+4" },
  { name: "Company 5", logo: "https://via.placeholder.com/150x50?text=Logo+5" },
  { name: "Company 6", logo: "https://via.placeholder.com/150x50?text=Logo+6" },
];

// ============================================
// Section 3: Emotional Reframe
// Psychology: Remove self-blame, create safety
// ============================================
export const emotionalReframe = {
  headline: "Du hast alles richtig gemacht.",
  subheadline: "Trotzdem funktioniert es nicht.",
  content: `Du hast akquiriert. Geliefert. Ein Team aufgebaut. Umsatz gemacht.

Aber irgendwann hast du gemerkt: Je mehr du wächst, desto mehr arbeitest du. Nicht weniger. Jeder neue Kunde bringt Umsatz – aber auch Aufwand. Die Marge? Bleibt gleich. Oder sinkt.

Das Problem ist nicht dein Einsatz. Das Problem ist, dass dein Unternehmen auf dir basiert – statt auf Systemen.`,
};

// ============================================
// Section 4: Problem Mirror
// Psychology: Recognition ("Das bin ich!")
// ============================================
export const problemMirror = {
  headline: "Die Symptome, die niemand ausspricht:",
  problems: [
    {
      title: "Zeitverlust",
      description: "Du verbringst Stunden mit Koordination, Rückfragen, Nachfassen. Wertschöpfung? Später.",
      icon: "UserX",
    },
    {
      title: "Kontrollverlust",
      description: "Du weißt nicht, wo Projekte stehen – bis jemand eskaliert.",
      icon: "TrendingDown",
    },
    {
      title: "Mitarbeiter-Abhängigkeit",
      description: "Wenn dein bester Mann kündigt, bricht die Hälfte deines Fulfillments weg.",
      icon: "AlertTriangle",
    },
    {
      title: "Manuelle Prozesse",
      description: "Jede Übergabe ist ein Risiko. Jede Aufgabe braucht Erklärung. Jedes Mal von vorn.",
      icon: "Flame",
    },
    {
      title: "Skalierungsproblem",
      description: "Mehr Kunden = mehr Chaos. Nicht mehr Marge.",
      icon: "Database",
    },
    {
      title: "Operative Überlastung",
      description: "Du arbeitest IM Unternehmen. Nie AM Unternehmen.",
      icon: "RefreshCw",
    },
  ],
};

// ============================================
// Section 4b: Target Audience
// Psychology: Clear qualification / disqualification
// ============================================
export const targetAudience = {
  headline: "Für wen das ist – und für wen nicht.",
  forWhom: {
    title: "Das ist für dich, wenn:",
    items: [
      "Du eine Agentur, Beratung oder B2B-Dienstleistung führst",
      "Du zwischen 500K und 10M Umsatz machst",
      "Du merkst, dass Wachstum Chaos bringt statt Freiheit",
      "Du bereit bist, Prozesse zu ändern – nicht nur Tools zu kaufen",
    ],
  },
  notForWhom: {
    title: "Das ist nichts für dich, wenn:",
    items: [
      "Du gerade erst startest und noch keine funktionierenden Prozesse hast",
      "Du nach einem Quick-Fix oder einer Wunderwaffe suchst",
      "Du nicht bereit bist, in die Infrastruktur deines Unternehmens zu investieren",
    ],
  },
};

// ============================================
// Section 5: Consequences
// Psychology: Cost of inaction (loss aversion)
// ============================================
export const consequences = {
  headline: "Ohne Veränderung passiert Folgendes:",
  subheadline: "Mehr vom Gleichen führt zu mehr vom Gleichen.",
  items: [
    "Du arbeitest härter, aber der Gewinn bleibt gleich",
    "Deine besten Leute kündigen – innerlich oder offiziell",
    "Wettbewerber mit besseren Systemen ziehen an dir vorbei",
    "Jede Neueinstellung macht das Chaos teurer, nicht besser",
  ],
  costPerDay: {
    headline: "Was dich jeder Tag kostet:",
    items: [
      { metric: "2+ Stunden", description: "für Koordination statt Wertschöpfung" },
      { metric: "500€+", description: "Marge, die durch Reibung verloren geht" },
      { metric: "1 Tag", description: "näher am Burnout – deinem oder dem deines Teams" },
    ],
  },
};

// ============================================
// Section 6: False Solutions
// Psychology: Disqualify what they've already tried
// ============================================
export const falseSolutions = {
  headline: "Das hast du wahrscheinlich schon versucht:",
  subheadline: "Und es hat nicht funktioniert.",
  solutions: [
    {
      title: "Mehr Leute einstellen",
      problem: "Ergebnis: Höhere Kosten, gleiche Probleme. Koordination skaliert schneller als Output.",
      icon: "Users",
    },
    {
      title: "Noch ein Tool einführen",
      problem: "Ergebnis: Tool Nr. 13 redet nicht mit Tool Nr. 12. Mehr Komplexität, nicht weniger.",
      icon: "Puzzle",
    },
    {
      title: "Einzelne Schritte automatisieren",
      problem: "Ergebnis: Automation ohne Architektur macht Chaos schneller – nicht besser.",
      icon: "Zap",
    },
  ],
  conclusion: "Das Problem ist nicht die Ausführung. Das Problem ist die fehlende Struktur.",
};

// ============================================
// Section 7: Core Differentiator
// Psychology: Your unique insight/approach
// ============================================
export const differentiator = {
  headline: "Warum bisherige Ansätze scheitern",
  insight: {
    left: {
      title: "Der alte Weg",
      description: "Manuell. Reaktiv. Personenabhängig. Jede Aufgabe braucht einen Menschen. Jede Entscheidung geht durch dich.",
    },
    right: {
      title: "Der systemische Weg",
      description: "Strukturiert. Planbar. Automatisiert. Das System weiß, was zu tun ist – auch wenn du nicht da bist.",
    },
  },
  conclusion: `Du brauchst keine besseren Mitarbeiter. Du brauchst bessere Infrastruktur.

Wir bauen die Prozessarchitektur, die dein Wachstum trägt – nicht limitiert.`,
  keyInsight: "Systeme skalieren. Menschen nicht.",
};

// ============================================
// Section 8: Outcomes
// Psychology: Tangible results they'll achieve
// ============================================
export const outcomes = {
  headline: "Was du bekommst:",
  items: [
    {
      title: "Kapazität ohne Headcount",
      description: "Mehr Kunden, gleiches Team. Dein Output skaliert, deine Kosten nicht.",
      icon: "TrendingUp",
    },
    {
      title: "Planbare Qualität",
      description: "Das Ergebnis hängt vom Prozess ab – nicht von der Tagesform.",
      icon: "CheckCircle",
    },
    {
      title: "Höhere Marge",
      description: "Weniger Reibung, weniger Nacharbeit, mehr Gewinn pro Projekt.",
      icon: "PiggyBank",
    },
    {
      title: "Deine Zeit zurück",
      description: "Du arbeitest am Unternehmen – nicht mehr nur darin.",
      icon: "Clock",
    },
  ],
};

// ============================================
// Section 8b: Relief / What goes away
// Psychology: "Du musst nicht mehr..." - very powerful
// ============================================
export const relief = {
  headline: "Was wegfällt:",
  items: [
    "Du musst nicht mehr bei jeder Übergabe dabei sein",
    "Du musst nicht mehr jeden Morgen Slack-Brände löschen",
    "Du musst nicht mehr erklären, was 'eigentlich gemeint war'",
    "Du musst nicht mehr hoffen, dass niemand kündigt",
    "Du musst nicht mehr zwischen Akquise und Fulfillment wählen",
    "Du musst nicht mehr Sonntags E-Mails vorbereiten",
  ],
};

// ============================================
// Section 9: Implementation Areas (Services)
// Psychology: Scope clarity
// ============================================
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Vertrieb",
    description: "Lead rein, Abschluss raus. Ohne manuelles Nachfassen.",
    icon: "Target",
  },
  {
    title: "Fulfillment",
    description: "Projekte laufen nach Plan – auch wenn du nicht hinschaust.",
    icon: "FolderKanban",
  },
  {
    title: "Kundenkommunikation",
    description: "Professionelle Touchpoints. Automatisch. Ohne Copy-Paste.",
    icon: "MessageSquare",
  },
  {
    title: "Interne Übergaben",
    description: "Von Team A zu Team B – ohne Informationsverlust.",
    icon: "ArrowLeftRight",
  },
  {
    title: "Reporting",
    description: "Zahlen auf Knopfdruck. Keine Excel-Akrobatik mehr.",
    icon: "BarChart3",
  },
  {
    title: "KI-Workflows",
    description: "Wiederkehrende Entscheidungen trifft das System. Nicht du.",
    icon: "Bot",
  },
];

// ============================================
// Section 10: Process (3-Step Methodology)
// Psychology: Reduce uncertainty with simple steps
// ============================================
export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  duration?: string;
  items: string[];
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Anfrage",
    subtitle: "STARTEN",
    description:
      "Du buchst einen Termin. Wir schauen, ob es passt. Kein Pitch, keine Verpflichtung.",
    duration: "2 MINUTEN",
    items: [
      "Einfache Terminbuchung",
      "Keine Vorbereitungszeit nötig",
      "Erste Einschätzung, ob wir helfen können",
    ],
  },
  {
    step: "02",
    title: "Analyse",
    subtitle: "VERSTEHEN",
    description:
      "Wir analysieren deine IST-Situation: Wo verlierst du Zeit? Wo bleibt Marge liegen? Wo sind die echten Engpässe?",
    duration: "KOSTENLOS",
    items: [
      "IST-Analyse deiner kritischen Prozesse",
      "Identifikation der größten Hebel",
      "Klarer Report mit konkreten Zahlen",
    ],
  },
  {
    step: "03",
    title: "Beratung",
    subtitle: "PLANEN",
    description:
      "Wir zeigen dir, wie die Lösung aussieht. Du entscheidest, ob du weitermachen willst.",
    duration: "60 MINUTEN",
    items: [
      "Konkrete Roadmap für dein Unternehmen",
      "Klare Investition und ROI-Rechnung",
      "Entscheidung ohne Druck",
    ],
  },
  {
    step: "04",
    title: "Umsetzung",
    subtitle: "BAUEN",
    description:
      "Wir bauen deine Systeme, schulen dein Team und begleiten den Go-Live. Du gibst Feedback, wir machen die Arbeit.",
    duration: "4-8 WOCHEN",
    items: [
      "Komplette Done-for-you Implementierung",
      "Team-Schulung und Dokumentation",
      "Laufende Optimierung nach Go-Live",
    ],
  },
];

// ============================================
// Section 11: Social Proof (Testimonials)
// Psychology: Proof it works for people like them
// ============================================
export interface Testimonial {
  companyLogo: string;
  quote: string;
  description: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    companyLogo: "https://via.placeholder.com/150x45?text=Agentur+A",
    quote: "3x Kapazität. Null Neueinstellungen.",
    description:
      "Vorher: Jeder neue Kunde bedeutete Überstunden. Jetzt läuft das Fulfillment systematisch durch – und ich habe wieder Zeit für Akquise.",
    author: {
      name: "Thomas M.",
      title: "Geschäftsführer, Performance-Agentur",
      image: "https://via.placeholder.com/60x60?text=TM",
    },
  },
  {
    companyLogo: "https://via.placeholder.com/150x45?text=Beratung+B",
    quote: "Drei gescheiterte Automatisierungen vorher. Diese hat funktioniert.",
    description:
      "Der Unterschied: Erst die Architektur, dann die Technik. Zum ersten Mal laufen unsere Prozesse wirklich – nicht nur auf dem Papier.",
    author: {
      name: "Sandra W.",
      title: "COO, Beratungsunternehmen",
      image: "https://via.placeholder.com/60x60?text=SW",
    },
  },
  {
    companyLogo: "https://via.placeholder.com/150x45?text=Scale+Up+C",
    quote: "Von 60 auf 40 Stunden. Bei 40% mehr Umsatz.",
    description:
      "Ich dachte, mehr Wachstum bedeutet automatisch mehr Stress. Falsch. Mit den richtigen Systemen bedeutet es mehr Kontrolle.",
    author: {
      name: "Markus S.",
      title: "Gründer, B2B-Dienstleister",
      image: "https://via.placeholder.com/60x60?text=MS",
    },
  },
];

// ============================================
// Section 12: ROI / Decision Urgency
// Psychology: Make the cost of waiting visible
// ============================================
export const roiSection = {
  headline: "Jeder Tag ohne System kostet dich:",
  items: [
    { metric: "2+ Stunden", cost: "für Koordination statt Wertschöpfung" },
    { metric: "500€+", cost: "Marge, die durch Reibung verloren geht" },
    { metric: "1 Stück", cost: "Energie, die du nie zurückbekommst" },
  ],
  cta: {
    headline: "In 90 Tagen stehst du hier:",
    options: [
      "Entweder: Gleiches Chaos, weniger Marge, mehr Stress",
      "Oder: Systeme, die laufen – auch ohne dich",
    ],
  },
};

// ============================================
// Section 13: FAQ
// Psychology: Objection handling
// ============================================
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Ist das für mich geeignet?",
    answer:
      "Wenn du eine Agentur, Beratung oder B2B-Dienstleistung führst, zwischen 500K und 10M Umsatz machst und merkst, dass mehr Wachstum mehr Chaos bedeutet – ja. Wenn du gerade erst startest oder keine operativen Engpässe hast – nein.",
  },
  {
    question: "Was macht euch anders als andere Automatisierungsanbieter?",
    answer:
      "Die meisten automatisieren bestehende Prozesse. Problem: Wenn der Prozess kaputt ist, wird er nur schneller kaputt. Wir bauen zuerst die Architektur – die Struktur, die definiert, wer was wann wie macht. Dann automatisieren wir.",
  },
  {
    question: "Wie schnell sehe ich Ergebnisse?",
    answer:
      "Die Analyse dauert 1-2 Stunden. Die Architektur 1-2 Wochen. Die Umsetzung 4-8 Wochen. Erste spürbare Entlastung erlebst du oft schon nach 2-3 Wochen.",
  },
  {
    question: "Was kostet das?",
    answer:
      "Die Analyse ist kostenlos. Danach hast du einen klaren Report mit ROI-Rechnung. Projekte liegen typischerweise zwischen 10K und 50K – amortisieren sich aber meist in 2-3 Monaten durch eingesparte Koordinationszeit und höhere Margen.",
  },
  {
    question: "Was, wenn es bei mir nicht funktioniert?",
    answer:
      "100+ Projekte. Kein einziges gescheitert. Aber: Wenn wir in der Analyse sehen, dass Prozessarchitektur nicht dein Problem löst, sagen wir dir das. Wir arbeiten nur mit Unternehmen, bei denen wir sicher sind, Ergebnisse zu liefern.",
  },
  {
    question: "Wie viel meiner Zeit kostet das?",
    answer:
      "Analyse: 1-2 Stunden. Architektur-Phase: 2-3 Stunden pro Woche für Abstimmungen. Umsetzung: Minimal. Wir machen die Arbeit. Insgesamt weniger Zeit als du aktuell mit Feuerlöschen verbringst.",
  },
];

// ============================================
// Section 14: Final CTA
// Psychology: Clear, single action to close
// ============================================
export const finalCta = {
  headline: "Bereit für den nächsten Schritt?",
  subheadline: "Kostenlose IST-Analyse",
  description:
    "Wir schauen uns an, wo du Zeit und Marge verlierst. Du bekommst einen klaren Report – auch wenn wir nicht zusammenarbeiten.",
  cta: {
    text: "Jetzt Termin buchen",
    href: "https://calendly.com/your-link/30min",
  },
  trust: "30 Minuten. Kein Pitch. Keine Verpflichtung. Nur Klarheit.",
  riskReversals: [
    "Kostenlos und unverbindlich",
    "Kein Verkaufsdruck",
    "Du bekommst echten Mehrwert – egal ob du buchst",
  ],
};

// ============================================
// Footer
// ============================================
export const footerLinks = {
  social: [
    { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
    { label: "YouTube", href: "https://youtube.com", icon: "Youtube" },
  ],
  legal: [
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
    { label: "Impressum", href: "/impressum" },
  ],
};

// ============================================
// About Section (kept for compatibility)
// ============================================
export const aboutContent = {
  title: "Über",
  description: `Wir bauen Systeme, die manuelle Prozesse ersetzen. Keine Berater, die Slides liefern. Keine Tool-Verkäufer mit einer Lösung für alles.

Sondern Architekten, die verstehen, wie Agenturen und B2B-Dienstleister wirklich operieren – und was sie brauchen, um ohne mehr Headcount zu skalieren.`,
  stats: [
    { value: "100+", label: "Systeme gebaut" },
    { value: "50.000+", label: "Stunden eliminiert" },
    { value: "3x", label: "mehr Kapazität" },
    { value: "8+", label: "Jahre Erfahrung" },
  ],
};

// Legacy exports for backward compatibility
export const caseStudies = [];
