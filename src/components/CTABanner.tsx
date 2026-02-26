import { Button } from "@/components/ui/button";
import gymImg from "@/assets/Screenshot_2026-02-26_at_06.29.05.png";

const BOOKING_URL = "https://www.sportsnow.ch/de/centers/fightsoul-gmbh/offers";

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${gymImg})` }}
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 container mx-auto px-4 text-center scroll-fade-in">
        <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl text-white mb-4">
          STARTE JETZT MIT DEINEM
          <br />
          <span className="text-primary">PROBETRAINING</span>
        </h2>
        <p className="text-zinc-300 mb-8 max-w-md mx-auto text-base sm:text-lg">
          Teste FightSoul kostenlos und unverbindlich.
        </p>
        <div className="px-4 sm:px-0">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-base sm:text-xl px-8 sm:px-14 py-5 sm:py-8 font-bold rounded-lg uppercase tracking-wide animate-pulse-glow shadow-[0_0_40px_hsl(355_72%_56%/0.5)]"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Kostenloses Probetraining sichern
            </a>
          </Button>
        </div>
        <p className="text-zinc-500 text-sm mt-5">
          Kostenlos &bull; Unverbindlich &bull; Ohne Verpflichtung
        </p>
      </div>
    </section>
  );
}
