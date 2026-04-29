import { QuoteForm } from "./QuoteForm";

export const QuoteSection = () => (
  <section id="quote" className="py-16 md:py-24 bg-soft-gradient">
    <div className="container mx-auto px-5">
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2">
          <p className="text-sm font-bold uppercase tracking-wider text-secondary mb-3">Request a quote</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Tell us what you need. We'll send a price.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Share your item list — single order or institutional supply — and we'll respond with a clear, friendly quote.
          </p>
        </div>
        <div className="lg:col-span-3">
          <QuoteForm />
        </div>
      </div>
    </div>
  </section>
);
