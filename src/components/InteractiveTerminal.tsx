import { useState, useRef, useEffect } from "react";
import { Terminal, Info, Loader2 } from "lucide-react";
import dashboardImg from "@/assets/fkvim-dashboard.png";
import insertImg from "@/assets/fkvim-insert.png";
import explorerImg from "@/assets/fkvim-explorer.png";
import searchImg from "@/assets/fkvim-search.png";
import grepImg from "@/assets/fkvim-grep.png";

interface TerminalLine {
  type: "input" | "output" | "welcome" | "screenshot";
  content: string;
  screenshot?: string;
}

const WELCOME_MESSAGE = `→ Welcome to FKvim Interactive Demo - Type fkvim, nvim, or neovim to get started`;

type ScreenState = "welcome" | "loading" | "dashboard" | "insert" | "explorer" | "search" | "grep";

export const InteractiveTerminal = () => {
  const [screenState, setScreenState] = useState<ScreenState>("welcome");
  const [currentInput, setCurrentInput] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " " && e.target === document.body) {
        e.preventDefault();
      }
    };
    
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      // Preload dashboard and insert first (critical)
      const criticalImages = [dashboardImg, insertImg];
      const criticalPromises = criticalImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      await Promise.all(criticalPromises);
      setImagesLoaded(true);

      // Then preload other images in background
      const otherImages = [explorerImg, searchImg, grepImg];
      otherImages.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();
  }, []);

  const handleCommand = (key: string) => {
    const k = key.toLowerCase();
    
    if (screenState === "welcome") {
      if (k === "fkvim" || k === "nvim" || k === "neovim") {
        if (imagesLoaded) {
          setScreenState("dashboard");
        } else {
          setScreenState("loading");
        }
      }
    } else if (screenState === "dashboard") {
      if (k === "i") {
        setScreenState("insert");
      } else if (k === " e" || k === "e") {
        setScreenState("explorer");
      } else if (k === " /" || k === "/") {
        setScreenState("search");
      } else if (k === " //" || k === "//") {
        setScreenState("grep");
      }
    } else if (screenState === "insert") {
      if (k === "escape" || k === "esc") {
        setScreenState("dashboard");
      } else if (k === " e") {
        setScreenState("explorer");
      } else if (k === " /") {
        setScreenState("search");
      } else if (k === " //") {
        setScreenState("grep");
      } else if (k === ":q") {
        setScreenState("welcome");
      }
    } else if (screenState === "explorer" || screenState === "search" || screenState === "grep") {
      if (k === "escape" || k === "esc" || k === " e" || k === ":q") {
        setScreenState("insert");
      } else if (k === "i") {
        setScreenState("insert");
      } else if (k === " /") {
        setScreenState("search");
      } else if (k === " //") {
        setScreenState("grep");
      }
    }
    
    setCurrentInput("");
  };

  // Auto-transition from loading to dashboard when images are ready
  useEffect(() => {
    if (screenState === "loading" && imagesLoaded) {
      const timer = setTimeout(() => {
        setScreenState("dashboard");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [screenState, imagesLoaded]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (screenState === "welcome") {
      if (e.key === "Enter" && currentInput.trim()) {
        handleCommand(currentInput.trim());
      }
    } else if (screenState === "loading") {
      // Ignore input during loading
      e.preventDefault();
    } else {
      // For other states, respond to immediate key presses
      if (e.key === "Escape") {
        e.preventDefault();
        handleCommand("escape");
      } else if (e.key === "i" && !e.shiftKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        handleCommand("i");
      } else if (e.key === " " && e.code === "Space") {
        e.preventDefault();
        // Track what was typed before space
        if (currentInput === "e") {
          handleCommand(" e");
          setCurrentInput("");
        } else if (currentInput === "/") {
          handleCommand(" /");
          setCurrentInput("");
        } else if (currentInput === "//") {
          handleCommand(" //");
          setCurrentInput("");
        }
      } else if (e.key === "e" && !e.shiftKey && !e.ctrlKey && !e.altKey && screenState === "dashboard") {
        e.preventDefault();
        setCurrentInput("e");
      } else if (e.key === "/" && !e.shiftKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        if (currentInput === "/") {
          setCurrentInput("//");
        } else {
          setCurrentInput("/");
        }
      } else if (e.key === ":" && !e.shiftKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setCurrentInput(":");
      } else if (e.key === "q" && currentInput === ":") {
        e.preventDefault();
        handleCommand(":q");
        setCurrentInput("");
      }
    }
  };

  const getCurrentImage = () => {
    switch (screenState) {
      case "dashboard":
        return dashboardImg;
      case "insert":
        return insertImg;
      case "explorer":
        return explorerImg;
      case "search":
        return searchImg;
      case "grep":
        return grepImg;
      default:
        return null;
    }
  };

  const getInstructions = () => {
    if (screenState === "welcome") {
      return "Type: fkvim, nvim, or neovim to start";
    } else if (screenState === "dashboard") {
      return "Press: i for Insert Mode";
    } else if (screenState === "insert") {
      return "Press: Space+e (Explorer) | Space+/ (Search) | Space+// (Buffer Search) | :q (Quit)";
    } else if (screenState === "explorer" || screenState === "search" || screenState === "grep") {
      return "Press: Space+e or :q (Close) | Esc (Close) | Space+/ (Search)";
    } else {
      return "Press: Esc (Dashboard) | i (Insert) | Space+e (Explorer) | Space+/ (Search)";
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto" ref={containerRef}>
      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-muted border-b border-border px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              Terminal
            </span>
          </div>
          <span className="text-sm font-medium text-primary">FKvim</span>
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalRef}
          onClick={() => inputRef.current?.focus()}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const isNearBottom = e.clientY > rect.bottom - 100;
            setShowHelp(isNearBottom);
          }}
          onMouseLeave={() => setShowHelp(false)}
          className="relative bg-background font-mono text-sm h-[600px] overflow-hidden cursor-text"
        >
          {screenState === "welcome" ? (
            <div className="p-6">
              <pre className="text-accent whitespace-pre-wrap text-lg">{WELCOME_MESSAGE}</pre>
              
              <div className="mt-8 flex gap-2">
                <span className="text-primary text-lg">→</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-foreground caret-primary text-lg"
                  autoFocus
                  spellCheck={false}
                  placeholder="Type command here..."
                />
              </div>
            </div>
          ) : screenState === "loading" ? (
            <div className="flex items-center justify-center h-full">
              <div className="flex flex-col items-center gap-6">
                <Loader2 className="h-16 w-16 text-primary animate-spin glow-primary" />
                <div className="text-center">
                  <p className="text-primary text-xl font-semibold mb-2 flex items-center gap-2 justify-center">
                    Opening FKvim
                    <span className="inline-flex gap-1">
                      <span className="animate-pulse" style={{ animationDelay: '0ms' }}>.</span>
                      <span className="animate-pulse" style={{ animationDelay: '200ms' }}>.</span>
                      <span className="animate-pulse" style={{ animationDelay: '400ms' }}>.</span>
                    </span>
                  </p>
                  <p className="text-muted-foreground text-sm">Preloading interface...</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <img
                src={getCurrentImage()!}
                alt={`FKvim ${screenState}`}
                className="w-full h-full object-cover animate-fade-in"
                style={{ imageRendering: "crisp-edges" }}
              />
              
              {/* Hidden input to capture keystrokes */}
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="absolute opacity-0 w-0 h-0"
                autoFocus
                spellCheck={false}
              />
            </div>
          )}

          {/* Instructions Popup */}
          {showHelp && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm border border-border rounded-lg px-4 py-2 shadow-lg animate-fade-in">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4" />
                <span>{getInstructions()}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
