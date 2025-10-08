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
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary group-hover:glow-primary transition-all duration-300">
              <Terminal className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FKvim
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <a href="/#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="/#installation" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Installation
            </a>
            <Link to="/docs" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Docs
            </Link>
            <Link to="/docs/quick-start" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors inline-flex items-center gap-2">
              Try FKvim Interactive
              <Badge variant="default" className="text-xs px-2 py-0">New</Badge>
            </Link>
          </div>

          <div className="flex-1 max-w-md mx-8 hidden lg:block">
            <SearchCommand />
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="hover:bg-muted">
              <a href="https://github.com/TheFlashCodes/FKvim" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <Link to="/docs/installation">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
