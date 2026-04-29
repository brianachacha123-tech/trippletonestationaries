import { GraduationCap, FlaskConical, BookOpen, MapPin } from "lucide-react";

const items = [
  { icon: GraduationCap, label: "Serving schools & institutions" },
  { icon: FlaskConical, label: "Lab & stationery supplies" },
  { icon: BookOpen, label: "School practical equipment" },
  { icon: MapPin, label: "Katito Junction, Kisumu" },
];

export const TrustBar = () => (
  <section className="border-y border-border bg-card">
    <div className="container mx-auto px-5 py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="w-10 h-10 shrink-0 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-semibold text-foreground leading-tight">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
