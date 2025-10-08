import Navbar from "@/components/Navbar";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import { KeybindingsReference } from "@/components/KeybindingsReference";

const Interactive = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 gradient-glow pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <Navbar />
      
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Experience FKvim
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Try out the FKvim Neovim configuration interactively in your browser
            </p>
          </div>

          {/* Interactive Terminal */}
          <InteractiveTerminal />

          {/* Keybindings Reference */}
          <KeybindingsReference />
        </div>
      </main>
    </div>
  );
};

export default Interactive;
