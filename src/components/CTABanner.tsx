import { Button } from "@/components/ui/button";

const SPORTSNOW_URL = "https://www.sportsnow.ch/de/s/fightsoul";

export default function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      <div className="relative z-10 container mx-auto px-4 text-center scroll-fade-in">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
          Starte jetzt – <span className="text-primary">dein Erfolg wartet!</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Buche dein kostenloses Probetraining und erlebe FightSoul live.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-6 font-semibold rounded-lg animate-pulse-glow"
        >
          <a href={SPORTSNOW_URL} target="_blank" rel="noopener noreferrer">
            Jetzt kostenlos Probieren!
          </a>
        </Button>
      </div>
    </section>
  );
}
