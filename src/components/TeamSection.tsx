import oliverImg from "@/assets/Screenshot_2026-02-26_at_06.23.53.png";
import natalieImg from "@/assets/Screenshot_2026-02-26_at_06.27.58.png";

const team = [
  {
    name: "Oliver Kroll",
    role: "Head Coach & CEO FightSoul GmbH",
    image: oliverImg,
    desc: "Langjährige Erfahrung im Kampfsport und Coaching. Fokus auf Technik, Disziplin und nachhaltige Fortschritte.",
    credentials: [
      "Wettkampftrainer Swissboxing",
      "Swiss Olympic Langhanteltrainer",
      "Trainer Fitnessboxing",
      "J+S Leiter Kickboxing Light",
      "Eidg. dipl. Schneesportlehrer",
    ],
  },
  {
    name: "Natalie Kravets",
    role: "Yoga-Trainerin & Coach für persönliche Entwicklung",
    image: natalieImg,
    desc: "Unterstützt Menschen dabei, körperlich und mental stärker zu werden.",
    credentials: [
      "Über 10 Jahre Erfahrung als Yogatrainerin",
      "Zertifizierte Coachin für persönliche Entwicklung",
      "Ganzheitlicher Coaching Ansatz",
      "Integralcoach Ausbildung (Living Sense)",
    ],
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-center text-white mb-14 scroll-fade-in">
          DEIN <span className="text-primary">TRAINERTEAM</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((t) => (
            <div
              key={t.name}
              className="scroll-fade-in bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl text-white mb-0.5">{t.name}</h3>
                <p className="text-primary text-sm font-semibold tracking-wide mb-3">{t.role}</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{t.desc}</p>
                <ul className="space-y-1.5">
                  {t.credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-xs text-zinc-500">
                      <span className="text-primary mt-0.5">▸</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
