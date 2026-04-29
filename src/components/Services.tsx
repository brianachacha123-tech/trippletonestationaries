import { Beaker, FlaskConical, PencilRuler, Briefcase, BookOpenCheck, PackageCheck, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/business";

const services = [
  { icon: Beaker, title: "School Practical Equipment", desc: "Geometry sets, measuring tools, science practical kits and classroom essentials." },
  { icon: FlaskConical, title: "Laboratory Equipment & Supplies", desc: "Beakers, test tubes, microscopes, chemicals and lab consumables for schools." },
  { icon: PencilRuler, title: "School Stationery", desc: "Exercise books, pens, pencils, files, charts and everyday classroom stationery." },
  { icon: Briefcase, title: "Office Stationery", desc: "Printer paper, folders, organizers and full office supply replenishment." },
  { icon: BookOpenCheck, title: "Teaching & Learning Materials", desc: "Charts, models, manipulatives and resources that support effective teaching." },
  { icon: PackageCheck, title: "Institution Supply Orders", desc: "Bulk procurement and recurring supply orders tailored to your institution." },
];

export const Services = () => (
  <section id="services" className="py-16 md:py-24 bg-soft-gradient">
    <div className="container mx-auto px-5">
      <div className="max-w-2xl mb-10 md:mb-14">
        <p className="text-sm font-bold uppercase tracking-wider text-secondary mb-3">What we supply</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Everything your school, lab or office needs.
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          From a single exercise book to a full laboratory fit-out — we source it, pack it and deliver it.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated border border-border hover:border-secondary/40 transition-smooth">
            <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center mb-4 shadow-accent-glow">
              <Icon className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
            <a
              href={waLink(`Hello, I'd like to inquire about: ${title}`)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:gap-2.5 transition-all"
            >
              Inquire on WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
