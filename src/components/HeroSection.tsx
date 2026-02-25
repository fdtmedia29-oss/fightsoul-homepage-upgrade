import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const SPORTSNOW_URL = "https://www.sportsnow.ch/de/s/fightsoul";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-6 animate-fade-up">
          Dein Kampfsport&shy;studio
          <br />
          <span className="text-primary">für echte Resultate</span>
          <br />
          in Thun
        </h1>
        <p className="text-lg sm:text-xl text-foreground/70 max-w-xl mx-auto mb-10 font-body" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          Fitness, Kampfsport & persönliche Entwicklung – für jedes Alter und jedes Level.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 font-semibold rounded-lg animate-pulse-glow"
          style={{ animationDelay: "0.4s" }}
        >
          <a href={SPORTSNOW_URL} target="_blank" rel="noopener noreferrer">
            Jetzt kostenlos Probieren!
          </a>
        </Button>
      </div>

      {/* Scroll indicator */}
      <a
        href="#social-proof"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce-down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
