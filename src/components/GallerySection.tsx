import gym1 from "@/assets/Screenshot_2026-02-26_at_06.21.59.png";
import gym2 from "@/assets/Screenshot_2026-02-26_at_06.29.05.png";
import coach1 from "@/assets/Screenshot_2026-02-26_at_06.23.53.png";
import coach2 from "@/assets/Screenshot_2026-02-26_at_06.27.58.png";

export default function GallerySection() {
  return (
    <section className="py-16 lg:py-28 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-center text-white mb-4 scroll-fade-in">
          EINDRÜCKE AUS DEM{" "}
          <span className="text-primary">TRAINING</span>
        </h2>
        <p className="text-center text-zinc-400 mb-10 scroll-fade-in">
          Training, Equipment, Coaching, Classes
        </p>

        <div className="scroll-fade-in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="relative overflow-hidden rounded-lg group aspect-video sm:aspect-auto sm:row-span-2 sm:h-full min-h-[220px]">
            <img
              src={gym1}
              alt="Training Area"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          <div className="relative overflow-hidden rounded-lg group aspect-video min-h-[200px]">
            <img
              src={coach1}
              alt="Coach Oliver"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          <div className="relative overflow-hidden rounded-lg group aspect-video min-h-[200px]">
            <img
              src={coach2}
              alt="Coach Natalie"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          <div className="relative overflow-hidden rounded-lg group aspect-video sm:col-span-1 lg:col-span-2 min-h-[200px]">
            <img
              src={gym2}
              alt="The Gym"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
