import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { BUSINESS, waLink } from "@/lib/business";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-14 pb-24 md:pb-10">
    <div className="container mx-auto px-5">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="font-extrabold text-xl mb-2">{BUSINESS.name}</h3>
          <p className="text-accent font-semibold italic mb-4">"{BUSINESS.motto}"</p>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Trusted local supplier of school practical equipment, lab supplies and stationery in Kisumu.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-accent">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#services" className="hover:text-accent transition-smooth">Products & Services</a></li>
            <li><a href="#about" className="hover:text-accent transition-smooth">About Us</a></li>
            <li><a href="#quote" className="hover:text-accent transition-smooth">Request a Quote</a></li>
            <li><a href="#contact" className="hover:text-accent transition-smooth">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-accent">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li><a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-2 hover:text-accent transition-smooth"><Phone className="w-4 h-4" /> {BUSINESS.phoneDisplay}</a></li>
            <li><a href={waLink()} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-accent transition-smooth"><MessageCircle className="w-4 h-4" /> WhatsApp us</a></li>
            <li><a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 hover:text-accent transition-smooth break-all"><Mail className="w-4 h-4 shrink-0" /> {BUSINESS.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {BUSINESS.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </div>
    </div>
  </footer>
);
