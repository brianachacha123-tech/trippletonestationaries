import { Phone, MessageCircle, FileText, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, waLink } from "@/lib/business";
import heroVideo from "@/assets/hero-bg.mp4";

const scrollToQuote = () =>
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });

export const Hero = () => (
  <section className="relative overflow-hidden text-primary-foreground min-h-[92vh] flex items-center">
    {/* Background video */}
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={heroVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />

    {/* Soft accent glows */}
    <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl" aria-hidden />
    <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-secondary/30 blur-3xl" aria-hidden />

    <div className="relative container mx-auto px-5 py-14 md:py-24 w-full">
      <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-xs font-medium mb-5 backdrop-blur-sm">
          <MapPin className="w-3.5 h-3.5 text-accent" />
          <span>Kisumu • Katito Junction</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-4">
          {BUSINESS.name}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-5 max-w-2xl md:mx-0 mx-auto">
          Quality School Practical Equipment, Lab Supplies and Stationery in Kisumu.
        </p>

        <div className="inline-flex items-center gap-2 text-accent font-semibold mb-7 justify-center md:justify-start">
          <Sparkles className="w-4 h-4" />
          <span className="italic">{BUSINESS.motto}</span>
        </div>

        <a
          href={`tel:${BUSINESS.phoneTel}`}
          className="flex md:inline-flex items-center justify-center gap-2 text-accent font-bold text-lg md:text-xl mb-7 hover:underline"
        >
          <Phone className="w-5 h-5" /> {BUSINESS.phoneDisplay}
        </a>

        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-accent-glow">
            <a href={`tel:${BUSINESS.phoneTel}`}>
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </Button>
          <Button asChild size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold">
            <a href={waLink()} target="_blank" rel="noopener">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </Button>
          <Button
            onClick={scrollToQuote}
            size="lg"
            variant="outline"
            className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold backdrop-blur-sm"
          >
            <FileText className="w-4 h-4" /> Request a Quote
          </Button>
        </div>
      </div>
    </div>
  </section>
);
