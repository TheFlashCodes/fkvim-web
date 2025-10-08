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
      
      <main className="pt-24 pb-16 px-6 relative z-10">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Experience FKvim
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
