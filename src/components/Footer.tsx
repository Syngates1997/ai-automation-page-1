import { Link } from "react-router-dom";
import { siteConfig, footerLinks } from "@/config/content";
import { Linkedin, Twitter, Youtube } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Linkedin,
  Twitter,
  Youtube,
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-border/50">
      <div className="container py-12 md:py-16">
        {/* Pre-Footer CTA */}
        <div className="text-center mb-12 pb-12 border-b border-border/30">
          <p className="text-muted-foreground mb-4">
            Bereit für effizientere Prozesse?
          </p>
          <Link
            to="/kostenlose-beratung"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Kostenloses Erstgespräch
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="text-xl font-light tracking-elegant hover:text-primary transition-colors"
            >
              {siteConfig.name}
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              {siteConfig.title}{" "}
              <span className="font-display italic">{siteConfig.titleAccent}</span>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Startseite
            </Link>
            <Link
              to="/kostenlose-beratung"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Erstgespräch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {footerLinks.social.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </a>
              );
            })}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/impressum"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {siteConfig.name}. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
