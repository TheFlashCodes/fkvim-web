import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search, FileText, Book, Puzzle, Home, Keyboard } from "lucide-react";

const keybindings = [
  // Editor Essentials
  { label: "Insert mode", keys: "i", category: "Editor" },
  { label: "Normal mode", keys: "Esc", category: "Editor" },
  { label: "Visual mode", keys: "v", category: "Editor" },
  { label: "Visual line", keys: "V", category: "Editor" },
  { label: "Visual block", keys: "Ctrl+v", category: "Editor" },
  { label: "Command mode", keys: ":", category: "Editor" },
  
  // File Explorer
  { label: "Toggle file explorer", keys: "Space+e", category: "Explorer" },
  { label: "Create new file", keys: "a", category: "Explorer" },
  { label: "Delete file", keys: "d", category: "Explorer" },
  { label: "Rename file", keys: "r", category: "Explorer" },
  { label: "Refresh explorer", keys: "R", category: "Explorer" },
  
  // Search & Navigation
  { label: "Find files", keys: "Space+f", category: "Navigation" },
  { label: "Live grep", keys: "Space+/", category: "Navigation" },
  { label: "Grep in buffer", keys: "Space+//", category: "Navigation" },
  { label: "Switch buffers", keys: "Space+b", category: "Navigation" },
  { label: "Go to definition", keys: "gd", category: "Navigation" },
  { label: "Go to references", keys: "gr", category: "Navigation" },
  { label: "Go to implementation", keys: "gi", category: "Navigation" },
  
  // Git
  { label: "LazyGit", keys: "Space+gg", category: "Git" },
  { label: "Git blame", keys: "Space+gb", category: "Git" },
  { label: "Git diff", keys: "Space+gd", category: "Git" },
  { label: "Git status", keys: "Space+gs", category: "Git" },
  
  // Themes & UI
  { label: "Theme picker", keys: "Space+t", category: "Themes" },
  { label: "Navigate left", keys: "Ctrl+h", category: "Window" },
  { label: "Navigate right", keys: "Ctrl+l", category: "Window" },
  { label: "Navigate up", keys: "Ctrl+k", category: "Window" },
  { label: "Navigate down", keys: "Ctrl+j", category: "Window" },
  
  // LSP & Code Actions
  { label: "Code actions", keys: "Space+ca", category: "LSP" },
  { label: "Rename symbol", keys: "Space+rn", category: "LSP" },
  { label: "Format code", keys: "Space+cf", category: "LSP" },
  { label: "Hover documentation", keys: "K", category: "LSP" },
  { label: "Show diagnostics", keys: "Space+cd", category: "LSP" },
  
  // Plugin Management
  { label: "Update plugins", keys: "Space+u", category: "Plugins" },
  { label: "Lazy plugin manager", keys: "Space+l", category: "Plugins" },
];

const searchItems = [
  { title: "Home", href: "/", icon: Home, category: "Pages" },
  { title: "Interactive Demo", href: "/interactive", icon: Keyboard, category: "Pages" },
  { title: "Documentation", href: "/docs", icon: Book, category: "Pages" },
  { title: "Installation", href: "/docs/installation", icon: FileText, category: "Docs" },
  { title: "Quick Start", href: "/docs/quick-start", icon: FileText, category: "Docs" },
  { title: "Configuration", href: "/docs/configuration", icon: FileText, category: "Docs" },
  { title: "Plugins", href: "/docs/plugins", icon: Puzzle, category: "Docs" },
  { title: "FKThemes", href: "/docs/plugins/fkthemes", icon: Puzzle, category: "Plugins" },
  { title: "FKNotes", href: "/docs/plugins/fknotes", icon: Puzzle, category: "Plugins" },
  { title: "FKai", href: "/docs/plugins/fkai", icon: Puzzle, category: "Plugins" },
  { title: "FKRunner", href: "/docs/plugins/fkrunner", icon: Puzzle, category: "Plugins" },
];

export const SearchCommand = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  const groupedPages = searchItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof searchItems>);

  const groupedKeybindings = keybindings.reduce((acc, binding) => {
    if (!acc[binding.category]) {
      acc[binding.category] = [];
    }
    acc[binding.category].push(binding);
    return acc;
  }, {} as Record<string, typeof keybindings>);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative flex h-9 w-full items-center justify-between rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground md:w-64"
      >
        <span className="flex items-center gap-2">
          <Search className="h-4 w-4" />
          <span className="hidden md:inline">Search...</span>
        </span>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 md:inline-flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search keybindings, pages, and documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          {/* Keybindings */}
          {Object.entries(groupedKeybindings).map(([category, bindings]) => (
            <CommandGroup key={`kb-${category}`} heading={`Keybindings: ${category}`}>
              {bindings.map((binding, idx) => (
                <CommandItem
                  key={`${binding.label}-${idx}`}
                  value={`${binding.label} ${binding.keys}`}
                >
                  <Keyboard className="mr-2 h-4 w-4" />
                  <span className="flex-1">{binding.label}</span>
                  <kbd className="ml-2 px-2 py-0.5 text-xs font-mono bg-muted border border-border rounded">
                    {binding.keys}
                  </kbd>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}

          {/* Pages & Docs */}
          {Object.entries(groupedPages).map(([category, items]) => (
            <CommandGroup key={category} heading={category}>
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <CommandItem
                    key={item.href}
                    value={item.title}
                    onSelect={() => handleSelect(item.href)}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};
