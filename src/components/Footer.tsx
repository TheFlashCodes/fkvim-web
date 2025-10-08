import { Github, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FKvim
            </h3>
            <p className="text-sm text-muted-foreground">
              A modern Neovim IDE configuration built for developers who demand both power and beauty.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#installation" className="hover:text-foreground transition-colors">
                  Installation
                </a>
              </li>
              <li>
                <a href="https://github.com/TheFlashCodes/FKvim" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/TheFlashCodes/FKvim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            <p>© 2024 FKvim. Part of the FKvim Ecosystem.</p>
            <p className="flex items-center gap-2 flex-wrap justify-center">
              Built with <Heart className="h-4 w-4 text-red-500" /> by{" "}
              <a
                href="https://github.com/TheFlashCodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                FlashCodes
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
