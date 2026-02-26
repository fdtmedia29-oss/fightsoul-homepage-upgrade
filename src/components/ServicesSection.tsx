import { Swords, Users, Dumbbell, Zap, Monitor, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BOOKING_URL = "https://www.sportsnow.ch/de/centers/fightsoul-gmbh/offers";

const mainServices = [
  {
    icon: Swords,
    title: "Kickboxen & Boxen",
    desc: "Technik, Ausdauer und Kraft verbessern.",
  },
  {
    icon: Users,
    title: "Kinder Kickboxen",
    badge: "6–16 Jahre",
    desc: "Kickboxen für Kinder und Jugendliche.",
  },
  {
    icon: Zap,
    title: "Functional Training",
    desc: "Intensive Ganzkörper Workouts.",
  },
  {
    icon: Dumbbell,
    title: "Personaltraining",
    desc: "Individuelles Coaching.",
  },
];

const secondaryServices = [
  {
    icon: Monitor,
    title: "Online Coaching",
    desc: "Professionelle Betreuung von überall.",
  },
  {
    icon: Brain,
    title: "Integral Coaching",
    desc: "Ganzheitliches Coaching für Körper und Geist.",
  },
];

export default function ServicesSection() {
  return (
    <section id="training" className="py-20 lg:py-28 bg-zinc-900/30">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-center text-white mb-4 scroll-fade-in">
          UNSER <span className="text-primary">TRAINING</span>
        </h2>
        <p className="text-center text-zinc-400 mb-14 max-w-lg mx-auto scroll-fade-in">
          Von Kampfsport bis Coaching – für jeden das Richtige.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {mainServices.map((s) => (
            <div
              key={s.title}
              className="scroll-fade-in group relative bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_hsl(355_72%_56%/0.25)] flex flex-col"
            >
              {s.badge && (
                <Badge className="absolute top-4 right-4 bg-primary/20 text-primary border-primary/30 text-xs">
                  {s.badge}
                </Badge>
              )}
              <s.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-2xl text-white mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">{s.desc}</p>
              <Button
                asChild
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide w-full"
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Probetraining
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {secondaryServices.map((s) => (
            <div
              key={s.title}
              className="scroll-fade-in group bg-zinc-900/60 border border-zinc-800 rounded-lg p-5 hover:border-primary/40 transition-all duration-300 flex items-start gap-4"
            >
              <s.icon className="w-8 h-8 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-heading text-xl text-white mb-1">{s.title}</h3>
                <p className="text-sm text-zinc-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
