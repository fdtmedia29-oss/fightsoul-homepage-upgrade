import { Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://www.sportsnow.ch/de/centers/fightsoul-gmbh/offers";

const socials = [
  { label: "Instagram", url: "https://www.instagram.com/fightsoul.ch/" },
  { label: "Facebook", url: "https://www.facebook.com/fightsoul.ch" },
  { label: "TikTok", url: "https://www.tiktok.com/@fightsoul" },
  { label: "YouTube", url: "https://www.youtube.com/@FightSoul" },
];

export default function Footer() {
  return (
    <footer id="kontakt" className="py-16 border-t border-zinc-800 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-heading text-3xl text-white mb-4">
              FIGHT<span className="text-primary">SOUL</span>
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Dein Kampfsportstudio in Thun.<br />
              Kampfsport & Fitness für alle.
            </p>
            <Button asChild className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wide">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Probetraining buchen
              </a>
            </Button>
          </div>

          <div>
            <h4 className="font-heading text-xl text-white mb-4">Kontakt</h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Seestrasse 14<br />3600 Thun</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+41799355303" className="hover:text-white transition-colors">
                  +41 79 935 53 03
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@fightsoul.ch" className="hover:text-white transition-colors">
                  info@fightsoul.ch
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl text-white mb-4">Folge uns</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-white transition-colors border border-zinc-700 hover:border-primary/50 rounded-md px-3 py-1.5"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <div className="text-xs text-zinc-600 space-y-1">
              <p className="font-semibold text-zinc-500 uppercase tracking-wide mb-2">Legal</p>
              {["Impressum", "Datenschutz", "AGB"].map((item) => (
                <a key={item} href="#" className="block hover:text-zinc-300 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} FightSoul GmbH. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
