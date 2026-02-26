import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://www.sportsnow.ch/de/centers/fightsoul-gmbh/offers";

const items = [
  "Du willst fitter werden",
  "Du willst Kampfsport lernen",
  "Du willst Selbstvertrauen aufbauen",
  "Du suchst eine neue Herausforderung",
  "Du willst wieder in Form kommen",
];

export default function IsRightForYou() {
  return (
    <section id="warum" className="py-20 lg:py-28 bg-zinc-950">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4 scroll-fade-in">
          IST FIGHTSOUL DAS RICHTIGE{" "}
          <span className="text-primary">FÜR DICH?</span>
        </h2>
        <p className="text-zinc-400 mb-10 text-lg scroll-fade-in">
          Bei uns trainieren Menschen mit ganz unterschiedlichen Zielen.
        </p>

        <ul className="space-y-4 mb-10 text-left max-w-md mx-auto">
          {items.map((item) => (
            <li key={item} className="scroll-fade-in flex items-center gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </span>
              <span className="text-white text-lg font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-xl font-bold text-white mb-8 scroll-fade-in">
          Dann bist du bei FightSoul genau richtig.
        </p>

        <Button
          asChild
          size="lg"
          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg scroll-fade-in"
        >
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Probetraining buchen
          </a>
        </Button>
      </div>
    </section>
  );
}
