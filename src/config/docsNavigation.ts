import { Book, Download, Code, Settings, Package, Palette, StickyNote, Sparkles, Play } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface DocPage {
  path: string;
  title: string;
  section: string;
  icon: LucideIcon;
}

export const docsPages: DocPage[] = [
  // Getting Started
  { path: "/docs", title: "Introduction", section: "Getting Started", icon: Book },
  { path: "/docs/installation", title: "Installation", section: "Getting Started", icon: Download },
  { path: "/docs/quick-start", title: "Quick Start", section: "Getting Started", icon: Code },
  
  // Configuration
  { path: "/docs/configuration", title: "Basic Setup", section: "Configuration", icon: Settings },
  { path: "/docs/plugins", title: "Plugins Overview", section: "Configuration", icon: Package },
  
  // Plugins
  { path: "/docs/plugins/fkthemes", title: "FkThemes", section: "Plugins", icon: Palette },
  { path: "/docs/plugins/fknotes", title: "FkNotes", section: "Plugins", icon: StickyNote },
  { path: "/docs/plugins/fkai", title: "FkAI", section: "Plugins", icon: Sparkles },
  { path: "/docs/plugins/fkrunner", title: "FkRunner", section: "Plugins", icon: Play },
];

export const getNavigation = (currentPath: string) => {
  const currentIndex = docsPages.findIndex(page => page.path === currentPath);
  
  if (currentIndex === -1) {
    return { previous: undefined, next: undefined };
  }
  
  return {
    previous: currentIndex > 0 ? docsPages[currentIndex - 1] : undefined,
    next: currentIndex < docsPages.length - 1 ? docsPages[currentIndex + 1] : undefined,
  };
};
