import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://www.sportsnow.ch/de/centers/fightsoul-gmbh/offers";

const navLinks = [
  { label: "Startseite", href: "#home" },
  { label: "Training", href: "#training" },
  { label: "Team", href: "#team" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/95 backdrop-blur-md shadow-xl shadow-black/50"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center">
            <span className="font-heading text-2xl md:text-3xl tracking-widest text-white">
              FIGHT<span className="text-primary">SOUL</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+41799355303"
              className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Phone size={14} />
              079 935 53 03
            </a>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-bold text-sm px-5 py-2 tracking-wide uppercase"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Probetraining
              </a>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-950 border-zinc-800 w-72">
              <SheetTitle className="font-heading text-2xl text-white">
                FIGHT<span className="text-primary">SOUL</span>
              </SheetTitle>
              <nav className="flex flex-col gap-5 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-zinc-300 hover:text-white transition-colors tracking-wide uppercase border-b border-zinc-800 pb-4"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:+41799355303"
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  <Phone size={15} />
                  079 935 53 03
                </a>
                <Button
                  asChild
                  className="bg-primary text-white font-bold hover:bg-primary/90 w-full uppercase tracking-wide"
                >
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Probetraining buchen
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
