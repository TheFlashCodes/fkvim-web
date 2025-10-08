import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Terminal, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { SearchCommand } from "@/components/SearchCommand";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="https://fkvim.netlify.app/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary group-hover:glow-primary transition-all duration-300">
              <Terminal className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FKvim
            </span>
          </a>

          <div className="flex items-center gap-3 md:gap-6 ml-auto">
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              <a href="https://fkvim.netlify.app/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Home
              </a>
              <a href="https://fkvim.netlify.app/#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Features
              </a>
              <a href="https://fkvim.netlify.app/#installation" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Installation
              </a>
              <a href="https://fkvim.netlify.app/docs" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Docs
              </a>
              <a href="https://fkvim-playground.lovable.app/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors inline-flex items-center gap-2">
                <span className="hidden xl:inline">Try FKvim Interactive</span>
                <span className="xl:hidden">Try Interactive</span>
                <Badge variant="default" className="text-xs px-2 py-0 animate-pulse">New</Badge>
              </a>
            </div>

            <div className="hidden md:block">
              <SearchCommand />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" asChild className="hover:bg-muted h-9 w-9 md:h-10 md:w-10">
              <a href="https://github.com/TheFlashCodes/FKvim" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-xs md:text-sm h-9 md:h-10 px-3 md:px-4">
              <a href="https://fkvim.netlify.app/docs/installation">
                <span className="hidden sm:inline">Get Started</span>
                <span className="sm:hidden">Start</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
