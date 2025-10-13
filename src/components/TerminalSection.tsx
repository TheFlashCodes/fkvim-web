import { Terminal, Github, Zap, Loader2, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

import dashboardImg from "../assets/fkvim-dashboard.png";
import editorImg from "../assets/fkvim-editor.png";
import explorerImg from "../assets/fkvim-explorer.png";
import finderImg from "../assets/fkvim-finder.png";

const TerminalSection = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    const command = "FKvim";
    let currentIndex = 0;

    // Step 0: Show git clone command (1s)
    const step0Timer = setTimeout(() => setAnimationStep(1), 1000);
    
    // Step 1: Show loading (2s)
    const step1Timer = setTimeout(() => setAnimationStep(2), 3000);
    
    // Step 2: Show success checkmark (1s)
    const step2Timer = setTimeout(() => setAnimationStep(3), 4000);
    
    // Step 3: Start typing FKvim
    const step3Timer = setTimeout(() => {
      setAnimationStep(3);
      const typingInterval = setInterval(() => {
        if (currentIndex <= command.length) {
          setTypedCommand(command.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setAnimationStep(4), 500); // Show "Opening FKvim..."
        }
      }, 150);
      
      return () => clearInterval(typingInterval);
    }, 5000);
    
    // Step 4: Show carousel
    const step4Timer = setTimeout(() => setAnimationStep(5), 7000);

    return () => {
      clearTimeout(step0Timer);
      clearTimeout(step1Timer);
      clearTimeout(step2Timer);
      clearTimeout(step3Timer);
      clearTimeout(step4Timer);
    };
  }, []);

  // Auto-scroll carousel infinitely
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  const screenshots = [
    { title: "Dashboard View", description: "Beautiful and intuitive interface", image: dashboardImg },
    { title: "Code Editor", description: "Powerful LSP integration", image: editorImg },
    { title: "File Explorer", description: "Fast file navigation", image: explorerImg },
    { title: "Terminal", description: "Integrated terminal", image: finderImg },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-8">Interactive Terminal Preview</h2>
          <div className="relative mt-12 sm:mt-16 group w-full px-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className={`relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-700 ${animationStep >= 5 ? 'min-h-[400px] sm:min-h-[500px] md:min-h-[600px]' : 'min-h-[100px]'}`}>
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-sm text-muted-foreground font-mono">Terminal</span>
              </div>
              
              {animationStep < 5 && (
                <div className="p-4 font-mono text-sm">
                  {/* Step 0: Git clone command */}
                  {animationStep >= 0 && (
                    <div className="flex items-center gap-2 mb-2 animate-fade-in">
                      <span className="text-primary">→</span>
                      <span className="text-foreground">git clone https://github.com/TheFlashCodes/FKvim.git</span>
                    </div>
                  )}

                  {/* Step 1: Loading spinner */}
                  {animationStep >= 1 && animationStep < 2 && (
                    <div className="flex items-center gap-2 mb-2 animate-fade-in">
                      <Loader2 className="h-4 w-4 text-accent animate-spin" />
                      <span className="text-muted-foreground">Installing FKvim......</span>
                    </div>
                  )}

                  {/* Step 2: Success checkmark */}
                  {animationStep >= 2 && (
                    <div className="flex items-center gap-2 mb-2 animate-fade-in">
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span className="text-green-500">FKvim successfully installed</span>
                    </div>
                  )}

                  {/* Step 3: Typing FKvim command */}
                  {animationStep >= 3 && animationStep < 4 && (
                    <div className="flex items-center gap-2 mb-2 animate-fade-in">
                      <span className="text-primary">:</span>
                      <span className="text-foreground">{typedCommand}</span>
                      <span className="inline-block w-2 h-4 bg-primary animate-pulse"></span>
                    </div>
                  )}

                  {/* Step 4: Opening FKvim */}
                  {animationStep >= 4 && animationStep < 5 && (
                    <div className="flex items-center gap-2 mb-2 animate-fade-in">
                      <span className="text-accent">Opening FKvim...</span>
                    </div>
                  )}
                </div>
              )}
              
              {/* Step 5: FKvim Carousel - Full Coverage */}
              {animationStep >= 5 && (
                <div className="animate-fade-in absolute inset-0 top-[52px]">
                  <Carousel 
                    className="w-full h-full"
                    setApi={setApi}
                    opts={{
                      loop: true,
                      align: "start",
                    }}
                  >
                    <CarouselContent>
                      {screenshots.map((screenshot, index) => (
                        <CarouselItem key={index} className="group">
                          <div className="relative w-full h-[348px] sm:h-[448px] md:h-[548px]">
                            <img src={screenshot.image} alt={screenshot.title} className="w-full h-full object-cover" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 sm:left-4" />
                    <CarouselNext className="right-2 sm:right-4" />
                  </Carousel>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;