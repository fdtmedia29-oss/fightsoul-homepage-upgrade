import gym1 from "@/assets/Screenshot_2026-02-26_at_06.21.59.png";
import gym2 from "@/assets/Screenshot_2026-02-26_at_06.29.05.png";
import coach1 from "@/assets/Screenshot_2026-02-26_at_06.23.53.png";
import coach2 from "@/assets/Screenshot_2026-02-26_at_06.27.58.png";

const photos = [
  { src: gym1, label: "Training Area", span: "col-span-2 row-span-2" },
  { src: coach1, label: "Coach Oliver", span: "col-span-1 row-span-1" },
  { src: coach2, label: "Coach Natalie", span: "col-span-1 row-span-1" },
  { src: gym2, label: "The Gym", span: "col-span-2 row-span-1" },
];

export default function GallerySection() {
  return (
    <section className="py-20 lg:py-28 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-center text-white mb-4 scroll-fade-in">
          EINDRÜCKE AUS DEM{" "}
          <span className="text-primary">TRAINING</span>
        </h2>
        <p className="text-center text-zinc-400 mb-12 scroll-fade-in">
          Training, Equipment, Coaching, Classes
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 h-[480px] md:h-[560px] scroll-fade-in">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg group ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
