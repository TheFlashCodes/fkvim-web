
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import dashboardImg from "@/assets/fkvim-dashboard.png";
import editorImg from "@/assets/fkvim-editor.png";
import explorerImg from "@/assets/fkvim-explorer.png";
import finderImg from "@/assets/fkvim-finder.png";
import searchImg from "@/assets/fkvim-search.png"; // 🆕 new import

type TerminalState =
  | "welcome"
  | "quit"
  | "dashboard"
  | "editor"
  | "explorer"
  | "finder"
  | "search"; // 🆕 new state

export const Terminal = () => {
  const [state, setState] = useState<TerminalState>("welcome");
  const [input, setInput] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loadingDots, setLoadingDots] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Animated loading dots
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingDots((prev) => {
          if (prev.length >= 4) return "";
          return prev + ".";
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Handle :q command
      if (
        e.key === ":" &&
        (state === "editor" ||
          state === "dashboard" ||
          state === "explorer" ||
          state === "finder" ||
          state === "search")
      ) {
        e.preventDefault();
        const handleQ = (ev: KeyboardEvent) => {
          ev.preventDefault();
          if (ev.key === "q") {
            if (state === "explorer" || state === "finder" || state === "search") {
              setState("editor");
            } else {
              setState("quit");
            }
          }
          window.removeEventListener("keydown", handleQ);
        };
        window.addEventListener("keydown", handleQ);
        setTimeout(() => window.removeEventListener("keydown", handleQ), 1000);
        return;
      }

      // From dashboard: go to editor
      if (state === "dashboard" && e.key === "i") {
        setState("editor");
      }

      // Editor / Explorer / Finder / Search keybindings
      else if (
        state === "editor" ||
        state === "explorer" ||
        state === "finder" ||
        state === "search"
      ) {
        if (e.key === " ") {
          e.preventDefault(); // Prevent page scroll

          const handleSpace = (ev: KeyboardEvent) => {
            ev.preventDefault();

            if (ev.key === "e") {
              setState(state === "explorer" ? "editor" : "explorer");
            } else if (ev.key === "/") {
              // Wait for possible second slash
              const handleSecondSlash = (ev2: KeyboardEvent) => {
                ev2.preventDefault();
                if (ev2.key === "/") {
                  setState(state === "search" ? "editor" : "search");
                }
                window.removeEventListener("keydown", handleSecondSlash);
              };
              window.addEventListener("keydown", handleSecondSlash);
              setTimeout(() => window.removeEventListener("keydown", handleSecondSlash), 600);

              // Single slash = finder
              setState(state === "finder" ? "editor" : "finder");
            }

            window.removeEventListener("keydown", handleSpace);
          };

          window.addEventListener("keydown", handleSpace);
          setTimeout(() => window.removeEventListener("keydown", handleSpace), 1000);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (["fkvim", "nvim", "neovim"].includes(cmd)) {
      setIsLoading(true);
      setLoadingDots("");
      setInput("");

      setTimeout(() => {
        setIsLoading(false);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setState("dashboard");
        }, 600);
      }, 1200);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="space-y-4">
          <div className="text-terminal-text font-mono text-sm">
            <div className="flex items-center gap-2">
              <span className="text-success">→</span>
              <span>Welcome to FKvim Interactive Demo</span>
            </div>
            <div className="mt-4 text-muted-foreground">
              Type <span className="text-primary font-semibold">fkvim</span>,{" "}
              <span className="text-primary font-semibold">nvim</span>, or{" "}
              <span className="text-primary font-semibold">neovim</span> to get started
            </div>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <span className="text-success">→</span>
            <span className="text-terminal-text font-mono">fkvim</span>
          </div>
          <div className="flex items-center gap-2 mt-4 text-primary font-mono">
            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span>Opening FKvim{loadingDots}</span>
          </div>
        </div>
      );
    }

    if (showSuccess) {
      return (
        <div className="space-y-4">
          <div className="text-terminal-text font-mono text-sm">
            <div className="flex items-center gap-2">
              <span className="text-success">→</span>
              <span>Welcome to FKvim Interactive Demo</span>
            </div>
            <div className="mt-4 text-muted-foreground">
              Type <span className="text-primary font-semibold">fkvim</span>,{" "}
              <span className="text-primary font-semibold">nvim</span>, or{" "}
              <span className="text-primary font-semibold">neovim</span> to get started
            </div>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <span className="text-success">→</span>
            <span className="text-terminal-text font-mono">fkvim</span>
          </div>
          <div className="flex items-center gap-2 mt-4 text-success font-mono animate-fade-in">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Successfully opened FKvim</span>
          </div>
        </div>
      );
    }

    switch (state) {
      case "welcome":
      case "quit":
        return (
          <div className="space-y-4">
            <div className="text-terminal-text font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="text-success">→</span>
                <span>
                  {state === "quit" ? "FKvim quit successfully" : "Welcome to FKvim Interactive Demo"}
                </span>
              </div>
              <div className="mt-4 text-muted-foreground">
                Type <span className="text-primary font-semibold">fkvim</span>,{" "}
                <span className="text-primary font-semibold">nvim</span>, or{" "}
                <span className="text-primary font-semibold">neovim</span> to get started
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-6">
              <span className="text-success">→</span>
              {showCursor && !input && <span className="w-2 h-4 bg-terminal-cursor animate-pulse" />}
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-terminal-text font-mono"
                autoFocus
                spellCheck={false}
              />
            </form>
          </div>
        );

      case "dashboard":
        return (
          <div className="relative group h-full w-full animate-fade-in">
            <img src={dashboardImg} alt="FKvim Dashboard" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm p-3 border-t border-terminal-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-sm font-mono text-muted-foreground">
                Press <kbd className="px-2 py-1 bg-secondary rounded text-primary">i</kbd> to enter editor • 
                Type <kbd className="px-2 py-1 bg-secondary rounded text-primary">:q</kbd> to quit
              </div>
            </div>
          </div>
        );

      case "editor":
        return (
          <div className="relative group h-full w-full animate-fade-in">
            <img src={editorImg} alt="FKvim Editor" className="w-full h-full object-cover transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm p-3 border-t border-terminal-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-sm font-mono text-muted-foreground space-y-1">
                <div>
                  <kbd className="px-2 py-1 bg-secondary rounded text-primary">Space</kbd> +{" "}
                  <kbd className="px-2 py-1 bg-secondary rounded text-primary">e</kbd> for file explorer • 
                  <kbd className="px-2 py-1 bg-secondary rounded text-primary ml-2">Space</kbd> +{" "}
                  <kbd className="px-2 py-1 bg-secondary rounded text-primary">/</kbd> for fuzzy finder • 
                  <kbd className="px-2 py-1 bg-secondary rounded text-primary ml-2">Space</kbd> +{" "}
                  <kbd className="px-2 py-1 bg-secondary rounded text-primary">/</kbd> +{" "}
                  <kbd className="px-2 py-1 bg-secondary rounded text-primary">/</kbd> for search • 
                  <kbd className="px-2 py-1 bg-secondary rounded text-primary ml-2">:q</kbd> to quit
                </div>
              </div>
            </div>
          </div>
        );

      case "explorer":
        return (
          <div className="relative group h-full w-full animate-fade-in">
            <img src={explorerImg} alt="FKvim Explorer" className="w-full h-full object-cover transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm p-3 border-t border-terminal-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-sm font-mono text-muted-foreground">
                <kbd className="px-2 py-1 bg-secondary rounded text-primary">Space</kbd> +{" "}
                <kbd className="px-2 py-1 bg-secondary rounded text-primary">e</kbd> or{" "}
                <kbd className="px-2 py-1 bg-secondary rounded text-primary">:q</kbd> to return to editor
              </div>
            </div>
          </div>
        );

      case "finder":
        return (
          <div className="relative group h-full w-full animate-fade-in">
            <img src={finderImg} alt="FKvim Finder" className="w-full h-full object-cover transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm p-3 border-t border-terminal-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-sm font-mono text-muted-foreground">
                <kbd className="px-2 py-1 bg-secondary rounded text-primary">Space</kbd> +{" "}
                <kbd className="px-2 py-1 bg-secondary rounded text-primary">/</kbd> or{" "}
                <kbd className="px-2 py-1 bg-secondary rounded text-primary">:q</kbd> to return to editor
              </div>
            </div>
          </div>
        );

      case "search":
        return (
          <div className="relative group h-full w-full animate-fade-in">
            <img
              src={searchImg}
              alt="FKvim Search"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm p-3 border-t border-terminal-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-sm font-mono text-muted-foreground">
                <kbd className="px-2 py-1 bg-secondary rounded text-primary">Space</kbd> +{" "}
                <kbd className="px-2 py-1 bg-secondary rounded text-primary">/</kbd> +{" "}
                <kbd className="px-2 py-1 bg-secondary rounded text-primary">/</kbd> or{" "}
                <kbd className="px-2 py-1 bg-secondary rounded text-primary">:q</kbd> to return to editor
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={cn(
        "w-full rounded-lg border border-terminal-border bg-terminal-bg shadow-terminal overflow-hidden",
        "transition-all duration-300"
      )}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-terminal-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <div className="w-3 h-3 rounded-full bg-warning" />
          <div className="w-3 h-3 rounded-full bg-success" />
        </div>
        <div className="flex-1 flex justify-between items-center px-4">
          <span className="text-sm font-mono text-muted-foreground">Terminal</span>
          <span className="text-sm font-mono font-semibold text-muted-foreground">FKvim</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        className={cn(
          "flex flex-col",
          state === "welcome" || state === "quit" || isLoading || showSuccess
            ? "p-6 min-h-[600px]"
            : "min-h-[600px]"
        )}
      >
        {renderContent()}
      </div>
    </div>
  );
};
