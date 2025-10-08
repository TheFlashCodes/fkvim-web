import { Card } from "@/components/ui/card";
import { Keyboard } from "lucide-react";

interface Keybinding {
  label: string;
  keys: string;
}

interface KeybindingSection {
  title: string;
  bindings: Keybinding[];
}

const keybindingSections: KeybindingSection[] = [
  {
    title: "Editor Essentials",
    bindings: [
      { label: "Insert mode", keys: "i" },
      { label: "Normal mode", keys: "Esc" },
      { label: "Visual mode", keys: "v" },
      { label: "Visual line", keys: "V" },
    ],
  },
  {
    title: "File Explorer",
    bindings: [
      { label: "Toggle explorer", keys: "Space + e" },
      { label: "New file", keys: "a" },
      { label: "Delete", keys: "d" },
      { label: "Rename", keys: "r" },
    ],
  },
  {
    title: "Search & Navigation",
    bindings: [
      { label: "Find files", keys: "Space + f" },
      { label: "Live grep", keys: "Space + /" },
      { label: "Buffers", keys: "Space + b" },
      { label: "Go to definition", keys: "gd" },
    ],
  },
  {
    title: "Git Integration",
    bindings: [
      { label: "LazyGit", keys: "Space + gg" },
      { label: "Git blame", keys: "Space + gb" },
      { label: "Git diff", keys: "Space + gd" },
    ],
  },
  {
    title: "Themes & UI",
    bindings: [
      { label: "Theme picker", keys: "Space + t" },
      { label: "Window navigation", keys: "Ctrl + h/l" },
    ],
  },
  {
    title: "Config & Actions",
    bindings: [
      { label: "Code actions", keys: "Space + ca" },
      { label: "Rename", keys: "Space + rn" },
      { label: "Update plugins", keys: "Space + u" },
      { label: "Hover docs", keys: "K" },
    ],
  },
];

export const KeybindingsReference = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Keybindings Reference
        </h2>
        <p className="text-muted-foreground text-lg">
          Master FKvim with these essential keyboard shortcuts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {keybindingSections.map((section, index) => (
          <Card
            key={index}
            className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
              <Keyboard className="h-5 w-5" />
              {section.title}
            </h3>
            <div className="space-y-3">
              {section.bindings.map((binding, bindingIndex) => (
                <div
                  key={bindingIndex}
                  className="flex justify-between items-center group"
                >
                  <span className="text-foreground/80 text-sm">
                    {binding.label}
                  </span>
                  <kbd className="px-2 py-1 text-xs font-mono bg-muted border border-border rounded group-hover:border-primary/50 transition-colors">
                    {binding.keys}
                  </kbd>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Press <kbd className="px-2 py-1 text-xs font-mono bg-muted border border-border rounded">Ctrl</kbd> +{" "}
          <kbd className="px-2 py-1 text-xs font-mono bg-muted border border-border rounded">K</kbd> to search all keybindings
        </p>
      </div>
    </div>
  );
};
