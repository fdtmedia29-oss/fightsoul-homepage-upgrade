const steps = [
  { number: "01", title: "Probetraining buchen" },
  { number: "02", title: "Vorbeikommen und Training ausprobieren" },
  { number: "03", title: "Trainer kennenlernen" },
  { number: "04", title: "Training starten" },
];

export default function HowToStart() {
  return (
    <section className="py-16 lg:py-28 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-center text-white mb-10 sm:mb-14 scroll-fade-in">
          SO STARTET DEIN <span className="text-primary">TRAINING</span>
        </h2>

        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.number} className="scroll-fade-in relative flex sm:flex-col items-center sm:text-center gap-4 sm:gap-0 bg-zinc-900/60 sm:bg-transparent rounded-lg sm:rounded-none p-4 sm:p-0">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-zinc-800" />
              )}
              <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center sm:mb-4 relative z-10">
                <span className="font-heading text-xl sm:text-2xl text-primary">{step.number}</span>
              </div>
              <p className="text-white font-semibold text-sm sm:text-base leading-snug">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
