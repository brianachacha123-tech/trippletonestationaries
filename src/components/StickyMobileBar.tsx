import { Phone, MessageCircle, FileText } from "lucide-react";
import { BUSINESS, waLink } from "@/lib/business";

const scrollToQuote = () => {
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
};

export const StickyMobileBar = () => (
  <div className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-border bg-card/95 backdrop-blur-md shadow-elevated">
    <div className="grid grid-cols-3 divide-x divide-border">
      <a
        href={`tel:${BUSINESS.phoneTel}`}
        className="flex flex-col items-center justify-center py-3 text-primary active:bg-primary/5 transition-smooth"
        aria-label="Call now"
      >
        <Phone className="w-5 h-5" />
        <span className="text-xs font-semibold mt-1">Call</span>
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        className="flex flex-col items-center justify-center py-3 text-whatsapp active:bg-whatsapp/5 transition-smooth"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-xs font-semibold mt-1">WhatsApp</span>
      </a>
      <button
        onClick={scrollToQuote}
        className="flex flex-col items-center justify-center py-3 text-accent-foreground bg-accent active:brightness-95 transition-smooth"
        aria-label="Request a quote"
      >
        <FileText className="w-5 h-5" />
        <span className="text-xs font-semibold mt-1">Quote</span>
      </button>
    </div>
  </div>
);
