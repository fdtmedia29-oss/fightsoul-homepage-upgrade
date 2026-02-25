import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const SPORTSNOW_URL = "https://www.sportsnow.ch/de/s/fightsoul";

const navLinks = [
  { label: "Angebot", href: "#angebote" },
  { label: "Über uns", href: "#warum" },
  { label: "Team", href: "#team" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <a href="#" className="font-heading text-3xl text-foreground tracking-wider">
          FIGHT<span className="text-primary">SOUL</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Phone className="w-3 h-3" />
            <span>079 935 53 03</span>
          </div>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold animate-pulse-glow">
            <a href={SPORTSNOW_URL} target="_blank" rel="noopener noreferrer">
              Jetzt Probieren!
            </a>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border w-72">
            <SheetTitle className="font-heading text-2xl text-foreground">
              FIGHT<span className="text-primary">SOUL</span>
            </SheetTitle>
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>079 935 53 03</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Seestrasse 14, 3600 Thun</span>
              </div>
              <Button asChild className="bg-primary text-primary-foreground w-full mt-2">
                <a href={SPORTSNOW_URL} target="_blank" rel="noopener noreferrer">
                  Jetzt kostenlos Probieren!
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
