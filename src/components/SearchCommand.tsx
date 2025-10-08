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
import { Search, FileText, Book, Puzzle, Home } from "lucide-react";

const searchItems = [
  { title: "Home", href: "/", icon: Home, category: "Pages" },
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

  const groupedItems = searchItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof searchItems>);

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
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(groupedItems).map(([category, items]) => (
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
