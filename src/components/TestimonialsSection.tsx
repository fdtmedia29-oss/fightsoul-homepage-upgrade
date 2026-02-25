import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marco T.",
    text: "FightSoul hat mein Leben verändert. Die Trainer sind unglaublich motivierend und das Training ist auf höchstem Niveau.",
    stars: 5,
  },
  {
    name: "Sarah K.",
    text: "Mein Sohn trainiert seit einem Jahr J+S Kickboxing – er ist selbstbewusster und disziplinierter geworden. Absolut empfehlenswert!",
    stars: 5,
  },
  {
    name: "Lukas M.",
    text: "Tolles Studio, familiäre Atmosphäre und professionelle Betreuung. Hier fühlt man sich sofort willkommen.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-center text-foreground mb-14 scroll-fade-in">
          Das sagen unsere <span className="text-primary">Mitglieder</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="scroll-fade-in bg-card border border-border rounded-lg p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 italic leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>
              <span className="text-sm font-semibold text-muted-foreground">— {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
