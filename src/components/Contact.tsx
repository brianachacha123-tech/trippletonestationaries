import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { BUSINESS, waLink } from "@/lib/business";

const items = [
  { icon: Phone, label: "Call us", value: BUSINESS.phoneDisplay, href: `tel:${BUSINESS.phoneTel}`, color: "primary" },
  { icon: MessageCircle, label: "WhatsApp", value: BUSINESS.phoneDisplay, href: waLink(), color: "whatsapp", external: true },
  { icon: Mail, label: "Email us", value: BUSINESS.email, href: `mailto:${BUSINESS.email}`, color: "secondary" },
  { icon: MapPin, label: "Visit us", value: BUSINESS.location, href: "https://maps.google.com/?q=Katito+Junction+Kisumu", color: "accent", external: true },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  whatsapp: "bg-whatsapp/10 text-whatsapp",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/15 text-accent-foreground",
};

export const Contact = () => (
  <section id="contact" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-5">
      <div className="max-w-2xl mb-10 md:mb-12">
        <p className="text-sm font-bold uppercase tracking-wider text-secondary mb-3">Get in touch</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          We're here to help — reach out today.
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          Call, message or visit us at Katito Junction in Kisumu. We're ready to equip your institution.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, label, value, href, color, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener" } : {})}
            className="group bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-smooth"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorMap[color]}`}>
              <Icon className="w-6 h-6" />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">{label}</p>
            <p className="font-bold text-foreground break-words group-hover:text-secondary transition-smooth">{value}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);
