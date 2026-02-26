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

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-zinc-900/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 scroll-fade-in">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-3">
            DAS SAGEN UNSERE <span className="text-primary">MITGLIEDER</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-bold text-white">5.0</span>
            <span>Sterne auf Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="scroll-fade-in bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col hover:border-primary/30 transition-colors"
            >
              <StarRow count={t.stars} />
              <p className="text-zinc-300 italic leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>
              <span className="text-sm font-semibold text-zinc-500">— {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
