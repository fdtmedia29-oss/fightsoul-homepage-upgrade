import { Users, TrendingUp, UserCheck } from "lucide-react";

const benefits = [
  {
    icon: UserCheck,
    title: "Persönliche Betreuung",
    headline: "Keine Massenabfertigung.",
    desc: "Unsere Trainer helfen dir, echte Fortschritte zu machen.",
  },
  {
    icon: Users,
    title: "Starke Community",
    headline: "Familiäre Atmosphäre statt anonymes Fitnessstudio.",
    desc: "Viele Mitglieder trainieren seit Jahren bei uns.",
  },
  {
    icon: TrendingUp,
    title: "Sichtbare Resultate",
    headline: "Mehr Fitness, mehr Kraft und mehr Selbstvertrauen.",
    desc: "Du wirst schnell Fortschritte merken.",
  },
];

export default function WhySection() {
  return (
    <section className="py-20 lg:py-28 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-center text-white mb-14 scroll-fade-in">
          WARUM <span className="text-primary">FIGHTSOUL?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="scroll-fade-in bg-zinc-900 border-l-4 border-primary rounded-lg p-8 hover:shadow-[0_10px_40px_-10px_hsl(355_72%_56%/0.2)] transition-shadow"
            >
              <b.icon className="w-10 h-10 text-primary mb-5" />
              <h3 className="font-heading text-2xl text-white mb-2">{b.title}</h3>
              <p className="text-white/90 font-semibold mb-2 text-sm">{b.headline}</p>
              <p className="text-zinc-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
