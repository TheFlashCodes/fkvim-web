import { Button } from "@/components/ui/button";
import { Terminal, Github, Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ children }) => {

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-white/5 backdrop-blur-sm min-h-screen">
      {children && (
        <div className="absolute inset-0 z-0">
          {children}
        </div>
      )}
      <div className="container relative z-10 px-6 py-32 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-primary/20 backdrop-blur-sm">
            <Zap className="mr-2 h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Part of the FKvim Ecosystem</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight px-4">
            <span className="text-gradient">
              Modern Neovim IDE
            </span>
            <br />
            <span className="text-foreground">for Developers</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            A blazingly fast, feature-rich Neovim configuration that transforms your editor into a powerful IDE. 
            Built for productivity and aesthetics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 w-full px-4">
            <Button size="lg" className="bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300 ease-in-out hover:scale-105 glow-primary px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base w-full sm:w-auto" asChild>
              <Link to="/docs/installation">
                <Terminal className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Get Started
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base w-full sm:w-auto" asChild>
              <a href="https://github.com/TheFlashCodes/FKvim" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
