import { Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const SPORTSNOW_URL = "https://www.sportsnow.ch/de/s/fightsoul";

const socials = [
  { label: "Instagram", url: "https://www.instagram.com/fightsoul.ch/" },
  { label: "Facebook", url: "https://www.facebook.com/fightsoul.ch" },
  { label: "YouTube", url: "https://www.youtube.com/@FightSoul" },
  { label: "TikTok", url: "https://www.tiktok.com/@fightsoul" },
];

export default function Footer() {
  return (
    <footer id="kontakt" className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl text-foreground mb-4">
              FIGHT<span className="text-primary">SOUL</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dein Kampfsportstudio in Thun. Fitness, Kampfsport & persönliche Entwicklung für alle.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">Kontakt</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Seestrasse 14, 3600 Thun</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+41799355303" className="hover:text-primary transition-colors">
                  +41 (0) 79 935 53 03
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@fightsoul.ch" className="hover:text-primary transition-colors">
                  info@fightsoul.ch
                </a>
              </div>
            </div>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">Folge uns</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-md px-3 py-1.5 hover:border-primary/50"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
              <a href={SPORTSNOW_URL} target="_blank" rel="noopener noreferrer">
                Kostenloses Probetraining
              </a>
            </Button>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="w-full h-48 rounded-lg bg-secondary/50 border border-border flex items-center justify-center mb-8">
          <span className="text-muted-foreground text-sm">📍 Karte – Seestrasse 14, 3600 Thun</span>
        </div>

        <div className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} FightSoul Kampfsportstudio. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
