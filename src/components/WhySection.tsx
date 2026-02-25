import { Target, Heart, Repeat } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Dein Erfolg im Fokus",
    desc: "Professionelles Coaching, das sich an deinen Zielen orientiert. Wir begleiten dich auf jedem Schritt.",
  },
  {
    icon: Heart,
    title: "Gemeinschaft & Motivation",
    desc: "Trainiere in einer starken Community, die dich pusht und unterstützt – wie eine zweite Familie.",
  },
  {
    icon: Repeat,
    title: "Flexibilität",
    desc: "Für jedes Alter, jedes Level und jeden Zeitplan. Wir passen uns dir an, nicht umgekehrt.",
  },
];

export default function WhySection() {
  return (
    <section id="warum" className="py-20 lg:py-28 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-center text-foreground mb-14 scroll-fade-in">
          Warum <span className="text-primary">FightSoul</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="scroll-fade-in bg-card border-l-4 border-primary rounded-lg p-8 hover:shadow-[0_10px_40px_-10px_hsl(355_72%_56%/0.15)] transition-shadow"
            >
              <b.icon className="w-12 h-12 text-primary mb-5" />
              <h3 className="font-heading text-2xl text-foreground mb-3">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
