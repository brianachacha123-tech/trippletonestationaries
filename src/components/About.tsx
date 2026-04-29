import { BUSINESS } from "@/lib/business";

export const About = () => (
  <section id="about" className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/15 blur-3xl" aria-hidden />
    <div className="container mx-auto px-5 relative">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wider text-accent mb-3">About us</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Your trusted local supply partner in Kisumu.
        </h2>
        <div className="space-y-4 text-primary-foreground/85 text-base md:text-lg leading-relaxed">
          <p>
            {BUSINESS.name} is a locally-owned supplier based at <strong className="text-primary-foreground">Katito Junction, Kisumu</strong>. We help schools, laboratories, institutions and offices stay equipped with the practical tools and stationery they need to run smoothly day-to-day.
          </p>
          <p>
            From science practicals and lab apparatus to exercise books, charts and office supplies, our promise is simple — quality items, fair prices and friendly service every time you reach out.
          </p>
          <p className="text-accent font-bold text-xl md:text-2xl pt-2">"{BUSINESS.motto}"</p>
        </div>
      </div>
    </div>
  </section>
);
