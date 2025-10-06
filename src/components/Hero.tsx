import { Button } from "@/components/ui/button";
import { Terminal, Github, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const [step, setStep] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 2500),
      setTimeout(() => setStep(3), 3500),
      setTimeout(() => {
        setStep(4);
        setIsExpanded(true);
      }, 4500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const screenshots = [
    { title: "Dashboard View", description: "Beautiful and intuitive interface" },
    { title: "Code Editor", description: "Powerful LSP integration" },
    { title: "File Explorer", description: "Fast file navigation" },
    { title: "Terminal", description: "Integrated terminal" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 gradient-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative z-10 px-6 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-primary/20 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Part of the FKvim Ecosystem</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Modern Neovim IDE
            </span>
            <br />
            <span className="text-foreground">for Developers</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A blazingly fast, feature-rich Neovim configuration that transforms your editor into a powerful IDE. 
            Built for productivity and aesthetics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity glow-primary px-8 h-12 text-base" asChild>
              <Link to="/docs/installation">
                <Terminal className="mr-2 h-5 w-5" />
                Get Started
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 px-8 h-12 text-base" asChild>
              <a href="https://github.com/TheFlashCodes/FKvim" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>

          {/* Interactive Terminal Preview */}
          <div className="relative mt-16 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className={`relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-700 ${isExpanded ? 'min-h-[600px]' : ''}`}>
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-sm text-muted-foreground font-mono">FKvim</span>
              </div>
              
              <div className="p-6">
                {/* Terminal Commands */}
                <div className="font-mono text-sm space-y-2 text-left mb-6">
                  {step >= 1 && (
                    <div className="flex gap-2 animate-fade-in">
                      <span className="text-accent">→</span>
                      <span className="text-muted-foreground">git clone https://github.com/TheFlashCodes/FKvim.git</span>
                    </div>
                  )}
                  {step >= 2 && (
                    <div className="flex gap-2 animate-fade-in">
                      <span className="text-secondary">✓</span>
                      <span className="text-foreground">FKvim successfully installed</span>
                    </div>
                  )}
                  {step >= 3 && (
                    <div className="flex gap-2 animate-fade-in">
                      <span className="text-primary">→</span>
                      <span className="text-muted-foreground">:FKvim</span>
                    </div>
                  )}
                </div>

                {/* Expanded Content with Carousel */}
                {isExpanded && (
                  <div className="space-y-6 animate-fade-in">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {screenshots.map((screenshot, index) => (
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <div className="bg-muted/50 rounded-lg p-8 min-h-[300px] flex flex-col items-center justify-center border border-border/50">
                                <Terminal className="h-24 w-24 text-primary mb-4" />
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                  {screenshot.title}
                                </h3>
                                <p className="text-muted-foreground text-center">
                                  {screenshot.description}
                                </p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>

                    {/* Interactive Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity glow-primary w-full sm:w-auto"
                        asChild
                      >
                        <Link to="/docs/quick-start">
                          <Terminal className="mr-2 h-5 w-5" />
                          Try FKvim Interactive
                        </Link>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-primary/30 hover:bg-primary/10 w-full sm:w-auto"
                        asChild
                      >
                        <Link to="/docs/introduction">
                          <Zap className="mr-2 h-5 w-5" />
                          Learn FKvim
                        </Link>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
