import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Installation from "@/components/Installation";
import Footer from "@/components/Footer";
import Prism from '@/components/Prism';
import TerminalSection from '@/components/TerminalSection'; // New import

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero>
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
          />
        </Hero>
        <TerminalSection /> {/* New component */}
        <Features />
        <Installation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
