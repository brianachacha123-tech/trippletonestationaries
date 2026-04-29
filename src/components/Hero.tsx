import { Phone, MessageCircle, FileText, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, waLink } from "@/lib/business";
import heroImg from "@/assets/hero.jpg";

const scrollToQuote = () => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });

export const Hero = () => (
  <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
    <div className="absolute inset-0 opacity-15 mix-blend-overlay">
      <img src={heroImg} alt="" className="w-full h-full object-cover" width={1536} height={1024} />
    </div>
    <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl" aria-hidden />
    <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-secondary/30 blur-3xl" aria-hidden />

    <div className="relative container mx-auto px-5 pt-10 pb-14 md:pt-20 md:pb-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-xs font-medium mb-5">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>Kisumu • Katito Junction</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-5">
            Quality School Practical Equipment, Lab Supplies <span className="text-accent">and Stationery</span> in Kisumu.
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/85 mb-6 max-w-xl">
            {BUSINESS.name} supplies schools, institutions and offices with practical equipment, laboratory apparatus, teaching materials and everyday stationery — all in one place.
          </p>

          <a href={`tel:${BUSINESS.phoneTel}`} className="inline-flex items-center gap-2 text-accent font-bold text-lg md:text-xl mb-6 hover:underline">
            <Phone className="w-5 h-5" /> {BUSINESS.phoneDisplay}
          </a>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-accent-glow">
              <a href={`tel:${BUSINESS.phoneTel}`}><Phone className="w-4 h-4" /> Call Now</a>
            </Button>
            <Button asChild size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold">
              <a href={waLink()} target="_blank" rel="noopener"><MessageCircle className="w-4 h-4" /> WhatsApp Us</a>
            </Button>
            <Button onClick={scrollToQuote} size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold">
              <FileText className="w-4 h-4" /> Request a Quote
            </Button>
          </div>
        </div>

        <div className="hidden md:block animate-fade-in">
          <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-primary-foreground/10">
            <img src={heroImg} alt="School laboratory equipment, stationery and learning materials" width={1536} height={1024} className="w-full h-[440px] object-cover" />
            <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm text-card-foreground rounded-2xl p-4 flex items-center gap-3 shadow-card">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Phone className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Talk to us today</p>
                <p className="font-bold">{BUSINESS.phoneDisplay}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
