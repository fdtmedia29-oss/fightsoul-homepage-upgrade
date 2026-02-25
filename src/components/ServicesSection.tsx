import { Swords, Dumbbell, Users, Zap, Monitor, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Swords,
    title: "Kampfsport",
    desc: "Kickboxen, Boxen und MMA – lerne effektive Techniken in einer motivierenden Umgebung.",
  },
  {
    icon: Users,
    title: "J+S Kickboxing Light",
    desc: "Für Kinder und Jugendliche von 6-16 Jahren. Disziplin, Spass und Selbstvertrauen.",
    badge: "6-16 Jahre",
  },
  {
    icon: Dumbbell,
    title: "Personaltraining",
    desc: "1:1 Coaching, massgeschneidert auf deine Ziele – ob Abnehmen, Muskelaufbau oder Wettkampf.",
  },
  {
    icon: Zap,
    title: "Functional Training / HIIT",
    desc: "Hochintensive Workouts für maximale Fettverbrennung und Ausdauer.",
  },
  {
    icon: Monitor,
    title: "Onlinecoaching",
    desc: "Professionelle Betreuung von überall – flexible Trainings- und Ernährungspläne.",
  },
  {
    icon: Brain,
    title: "Integralcoaching",
    desc: "Ganzheitliches Coaching für Körper und Geist. Persönliche Entwicklung auf jedem Level.",
    badge: "Coming Soon",
  },
];

export default function ServicesSection() {
  return (
    <section id="angebote" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-center text-foreground mb-4 scroll-fade-in">
          Unsere <span className="text-primary">Angebote</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-lg mx-auto scroll-fade-in">
          Von Kampfsport bis Coaching – wir bieten dir das volle Programm.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="scroll-fade-in group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_hsl(355_72%_56%/0.2)]"
            >
              {s.badge && (
                <Badge className="absolute top-4 right-4 bg-primary/20 text-primary border-primary/30 text-xs">
                  {s.badge}
                </Badge>
              )}
              <s.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-2xl text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
