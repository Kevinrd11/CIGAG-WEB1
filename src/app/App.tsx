import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { HowWeWork } from "./components/HowWeWork";
import { Institutional } from "./components/Institutional";
import { GeneticCatalog } from "./components/GeneticCatalog";
import { Testimonials } from "./components/Testimonials";
import { CTAFinal } from "./components/CTAFinal";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#f4f5f3" }}>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <HowWeWork />
        <Institutional />
        <GeneticCatalog />
        <Testimonials />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
