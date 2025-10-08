import { useState, useRef, useEffect } from "react";
import { Terminal, Info } from "lucide-react";
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

const WELCOME_MESSAGE = `→ Welcome to FKvim Interactive Demo

Type fkvim, nvim, or neovim to get started`;

type ScreenState = "welcome" | "dashboard" | "insert" | "explorer" | "search" | "grep";

export const InteractiveTerminal = () => {
  const [screenState, setScreenState] = useState<ScreenState>("welcome");
  const [currentInput, setCurrentInput] = useState("");
  const [showHelp, setShowHelp] = useState(false);
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

  const handleCommand = (key: string) => {
    const k = key.toLowerCase();
    
    if (screenState === "welcome") {
      if (k === "fkvim" || k === "nvim" || k === "neovim") {
        setScreenState("dashboard");
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
      } else if (k === " e" || k === "e") {
        setScreenState("explorer");
      } else if (k === " /" || k === "/") {
        setScreenState("search");
      } else if (k === " //" || k === "//") {
        setScreenState("grep");
      }
    } else if (screenState === "explorer" || screenState === "search" || screenState === "grep") {
      if (k === "escape" || k === "esc") {
        setScreenState("dashboard");
      } else if (k === "i") {
        setScreenState("insert");
      } else if (k === " e" || k === "e") {
        setScreenState("explorer");
      } else if (k === " /" || k === "/") {
        setScreenState("search");
      } else if (k === " //" || k === "//") {
        setScreenState("grep");
      }
    }
    
    setCurrentInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (screenState === "welcome") {
      if (e.key === "Enter" && currentInput.trim()) {
        handleCommand(currentInput.trim());
      }
    } else {
      // For other states, respond to immediate key presses
      if (e.key === "Escape") {
        handleCommand("escape");
      } else if (e.key === "i") {
        e.preventDefault();
        handleCommand("i");
      } else if (e.key === "e" && !e.shiftKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        handleCommand("e");
      } else if (e.key === "/" && !e.shiftKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        handleCommand("/");
      } else if (e.key === " ") {
        e.preventDefault();
        const nextChar = currentInput;
        if (nextChar === "e") {
          handleCommand(" e");
        } else if (nextChar === "/") {
          handleCommand(" /");
        } else if (nextChar === "//") {
          handleCommand(" //");
        }
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
