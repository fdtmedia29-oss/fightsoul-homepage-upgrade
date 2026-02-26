import { Users, Star, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Aktive Mitglieder" },
  { icon: Star, value: "5.0", label: "Sterne auf Google" },
  { icon: Award, value: "J+S", label: "Zertifizierte Trainer" },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-10 border-y border-zinc-800 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 scroll-fade-in">
              <stat.icon className="w-8 h-8 text-primary" />
              <div>
                <div className="font-heading text-2xl text-white">{stat.value}</div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
