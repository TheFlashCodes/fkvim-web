import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const Installation = () => {
  const [copied, setCopied] = useState(false);
  const installCommand = "git clone https://github.com/TheFlashCodes/FKvim.git ~/.config/nvim";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="installation" className="py-12 sm:py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4">
              Get started in{" "}
              <span className="text-gradient">
                seconds
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Install FKvim and start coding with a powerful Neovim configuration
            </p>
          </div>

          <Card className="bg-card/50 border-border backdrop-blur-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-sm text-muted-foreground font-mono ml-2">bash</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyToClipboard}
                className="h-8 hover:bg-muted"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-accent" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <CardContent className="p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
              <code className="text-foreground break-all sm:break-normal">{installCommand}</code>
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardContent className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  1
                </div>
                <h3 className="text-lg font-semibold">Prerequisites</h3>
                <p className="text-sm text-muted-foreground">
                  Ensure you have Neovim 0.9+ and Git installed on your system
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardContent className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary font-bold text-lg">
                  2
                </div>
                <h3 className="text-lg font-semibold">Clone Repository</h3>
                <p className="text-sm text-muted-foreground">
                  Run the command above to clone FKvim to your Neovim config directory
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardContent className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent font-bold text-lg">
                  3
                </div>
                <h3 className="text-lg font-semibold">Launch Neovim</h3>
                <p className="text-sm text-muted-foreground">
                  Open Neovim and let the plugins install automatically. You're ready!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/TheFlashCodes/FKvim" target="_blank" rel="noopener noreferrer">
                View Full Documentation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
