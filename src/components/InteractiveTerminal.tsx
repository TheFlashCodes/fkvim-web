import { useState, useRef, useEffect } from "react";
import { Terminal } from "lucide-react";

interface TerminalLine {
  type: "input" | "output" | "welcome";
  content: string;
}

const WELCOME_MESSAGE = `→ Welcome to FKvim Interactive Demo

Type fkvim, nvim, or neovim to get started`;

const FKVIM_ASCII = `
███████╗██╗  ██╗██╗   ██╗██╗███╗   ███╗
██╔════╝██║ ██╔╝██║   ██║██║████╗ ████║
█████╗  █████╔╝ ██║   ██║██║██╔████╔██║
██╔══╝  ██╔═██╗ ╚██╗ ██╔╝██║██║╚██╔╝██║
██║     ██║  ██╗ ╚████╔╝ ██║██║ ╚═╝ ██║
╚═╝     ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═╝     ╚═╝

Welcome to FKvim - Modern Neovim IDE for Developers
Version 1.0.0 | Type 'help' for available commands
`;

export const InteractiveTerminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "welcome", content: WELCOME_MESSAGE },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (command: string) => {
    const cmd = command.trim().toLowerCase();
    
    setLines((prev) => [...prev, { type: "input", content: command }]);

    if (cmd === "fkvim" || cmd === "nvim" || cmd === "neovim") {
      setLines((prev) => [...prev, { type: "output", content: FKVIM_ASCII }]);
    } else if (cmd === "help") {
      setLines((prev) => [
        ...prev,
        {
          type: "output",
          content: `Available commands:
  fkvim, nvim, neovim - Launch FKvim
  help - Show this help message
  clear - Clear terminal
  exit - Exit terminal`,
        },
      ]);
    } else if (cmd === "clear") {
      setLines([{ type: "welcome", content: WELCOME_MESSAGE }]);
    } else if (cmd === "exit") {
      setLines((prev) => [
        ...prev,
        { type: "output", content: "Goodbye! Type any command to continue..." },
      ]);
    } else if (cmd === "") {
      // Do nothing for empty input
    } else {
      setLines((prev) => [
        ...prev,
        { type: "output", content: `Command not found: ${command}\nType 'help' for available commands` },
      ]);
    }

    setCurrentInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(currentInput);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
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
          className="bg-background p-6 font-mono text-sm h-[500px] overflow-y-auto cursor-text"
        >
          {lines.map((line, index) => (
            <div key={index} className="mb-2">
              {line.type === "input" && (
                <div className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span className="text-foreground">{line.content}</span>
                </div>
              )}
              {line.type === "output" && (
                <pre className="text-muted-foreground whitespace-pre-wrap">{line.content}</pre>
              )}
              {line.type === "welcome" && (
                <pre className="text-accent whitespace-pre-wrap">{line.content}</pre>
              )}
            </div>
          ))}

          {/* Input Line */}
          <div className="flex gap-2">
            <span className="text-primary">→</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-foreground caret-primary"
              autoFocus
              spellCheck={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
