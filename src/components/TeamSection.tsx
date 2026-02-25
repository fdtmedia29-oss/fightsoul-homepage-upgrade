const team = [
  {
    name: "Amir Hamzic",
    role: "Head Coach / Inhaber",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Trainer 2",
    role: "Kickboxing / Fitness Coach",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Trainer 3",
    role: "J+S Jugendcoach",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop&crop=face",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-center text-foreground mb-14 scroll-fade-in">
          Unser <span className="text-primary">Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {team.map((t) => (
            <div key={t.name} className="scroll-fade-in text-center group">
              <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-xl text-foreground">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
