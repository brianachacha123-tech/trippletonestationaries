import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { About } from "@/components/About";
import { QuoteSection } from "@/components/QuoteSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Hero />
    <TrustBar />
    <Services />
    <WhyChooseUs />
    <About />
    <QuoteSection />
    <Contact />
    <Footer />
    <StickyMobileBar />
  </main>
);

export default Index;
