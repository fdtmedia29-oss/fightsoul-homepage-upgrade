import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import gymImg from "@/assets/Screenshot_2026-02-26_at_06.21.59.png";

const BOOKING_URL = "https://www.sportsnow.ch/de/centers/fightsoul-gmbh/offers";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${gymImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        <p className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up">
          Thun — Seestrasse 14
        </p>
        <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl text-white leading-[0.9] mb-6 animate-fade-up">
          KAMPFSPORT & FITNESS
          <br />
          <span className="text-primary">IN THUN</span>
          <br />
          FÜR ECHTE RESULTATE
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto mb-10 font-body">
          Kickboxen, Boxen und Functional Training für Anfänger und Fortgeschrittene.
        </p>

        <div className="flex flex-col items-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-12 py-7 font-bold rounded-lg uppercase tracking-wide animate-pulse-glow shadow-[0_0_30px_hsl(355_72%_56%/0.4)]"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Kostenloses Probetraining
            </a>
          </Button>
          <p className="text-white/60 text-sm tracking-wide">
            Kostenlos &bull; Unverbindlich &bull; Ohne Verpflichtung
          </p>
          <p className="text-white/50 text-xs">
            Über 100 Mitglieder trainieren bereits bei FightSoul
          </p>
        </div>
      </div>

      <a
        href="#warum"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce-down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
