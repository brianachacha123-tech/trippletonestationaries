import { ShieldCheck, MessageCircle, School, Layers, Smile, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, waLink } from "@/lib/business";

const points = [
  { icon: ShieldCheck, title: "Reliable local supplier", desc: "A trusted name based right here in Kisumu — not a distant warehouse." },
  { icon: MessageCircle, title: "Easy ordering by phone or WhatsApp", desc: "No complicated portals. Send us a list and we'll handle the rest." },
  { icon: School, title: "Suitable for schools and institutions", desc: "Experience servicing primary, secondary and tertiary institutions." },
  { icon: Layers, title: "Practical items and stationery in one place", desc: "Save time and procurement costs by sourcing everything from us." },
  { icon: Smile, title: "Friendly service and quick response", desc: "Real people, fast quotes and follow-through you can count on." },
];

export const WhyChooseUs = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-5">
      <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <p className="text-sm font-bold uppercase tracking-wider text-secondary mb-3">Why choose us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            A supplier that actually picks up the phone.
          </h2>
          <p className="text-muted-foreground mb-6">
            We've built {BUSINESS.name} on dependable service and honest pricing for institutions across Kisumu.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-primary hover:bg-primary-glow text-primary-foreground">
              <a href={`tel:${BUSINESS.phoneTel}`}><Phone className="w-4 h-4" /> Call {BUSINESS.phoneDisplay}</a>
            </Button>
            <Button asChild variant="outline" className="border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-whatsapp-foreground">
              <a href={waLink()} target="_blank" rel="noopener"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
            </Button>
          </div>
        </div>

        <ul className="lg:col-span-2 space-y-4">
          {points.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="flex gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:border-accent/50 transition-smooth">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
