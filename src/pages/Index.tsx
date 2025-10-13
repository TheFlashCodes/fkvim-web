import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Installation from "@/components/Installation";
import Footer from "@/components/Footer";
import Prism from '@/components/Prism';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0.5}
            glow={1}
          />
        </div>
        <Hero />
        <Features />
        <Installation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
