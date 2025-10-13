import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Github, Menu } from "lucide-react"; // Removed Terminal
import favicon from "../assets/favicon.svg"; // Import favicon

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SearchCommand } from "@/components/SearchCommand";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <RouterLink to="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 ">
              <img src={favicon} alt="FKvim Logo" className="h-6 w-6" /> {/* Replaced Terminal with favicon */}
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-fuchsia-500 to-indigo-600 bg-clip-text text-transparent">
              FKvim
            </span>
          </RouterLink>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-3 md:gap-6 ml-auto">
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              <RouterLink
                to="/#home"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Home
              </RouterLink>
              <RouterLink
                to="/#features"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Features
              </RouterLink>
              <RouterLink
                to="/#installation"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Installation
              </RouterLink>
              <RouterLink
                to="/docs"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Docs
              </RouterLink>
              <RouterLink
                to="/interactive"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                <span className="hidden xl:inline">Try FKvim Interactive</span>
                <span className="xl:hidden">Try Interactive</span>
                <Badge variant="default" className="text-xs px-2 py-0 animate-pulse">
                  New
                </Badge>
              </RouterLink>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:block">
              <SearchCommand />
            </div>
          </div>

          {/* Right-side buttons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[280px] sm:w-[350px] bg-background border-border"
              >
                <div className="flex flex-col gap-6 mt-8">
                  <RouterLink
                    to="/#home"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </RouterLink>
                  <RouterLink
                    to="/#features"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Features
                  </RouterLink>
                  <RouterLink
                    to="/#installation"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Installation
                  </RouterLink>
                  <RouterLink
                    to="/docs"
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Docs
                  </RouterLink>
                  <RouterLink
                    to="/interactive"
                    className="text-base font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Try FKvim Interactive
                    <Badge variant="default" className="text-xs px-2 py-0">
                      New
                    </Badge>
                  </RouterLink>

                  {/* Search */}
                  <div className="pt-4 border-t border-border">
                    <SearchCommand />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3 pt-4">
                    <Button variant="outline" asChild className="w-full" aria-label="View on GitHub">
                      <a
                        href="https://github.com/TheFlashCodes/FKvim"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-5 w-5" />
                        View on GitHub
                      </a>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    >
                      <RouterLink to="/docs/installation">Get Started</RouterLink>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* GitHub Button (Desktop) */}
            <Button
              variant="ghost" 
              size="icon"
              asChild
              className="h-9 w-9 md:h-10 md:w-10 hidden sm:flex"
              aria-label="View on GitHub"
            >
              <a
                href="https://github.com/TheFlashCodes/FKvim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4 md:h-5 md:w-5 text-foreground" />
              </a>
            </Button>

            {/* Get Started Button (Desktop) */}
            <Button
              asChild
              className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 transition-all duration-300 ease-in-out text-xs md:text-sm h-9 md:h-10 px-3 md:px-4 hidden sm:flex"
            >
              <RouterLink to="/docs/installation">
                <span className="hidden sm:inline">Get Started</span>
                <span className="sm:hidden">Start</span>
              </RouterLink>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
