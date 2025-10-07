import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Book, Download, Settings, Code, Package, ChevronDown, ChevronRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocSection {
  title: string;
  items: { title: string; path: string; icon?: any }[];
}

const sections: DocSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", path: "/docs", icon: Book },
      { title: "Installation", path: "/docs/installation", icon: Download },
      { title: "Quick Start", path: "/docs/quick-start", icon: Code },
    ],
  },
  {
    title: "Configuration",
    items: [
      { title: "Basic Setup", path: "/docs/configuration", icon: Settings },
      { title: "Plugins Overview", path: "/docs/plugins", icon: Package },
    ],
  },
  {
    title: "Plugins",
    items: [
      { title: "FkThemes", path: "/docs/plugins/fkthemes" },
      { title: "FkNotes", path: "/docs/plugins/fknotes" },
      { title: "FkAI", path: "/docs/plugins/fkai" },
      { title: "FkRunner", path: "/docs/plugins/fkrunner" },
    ],
  },
];

const DocsSidebar = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(["Getting Started", "Configuration", "Plugins"]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  return (
    <aside className="w-64 border-r border-border bg-card/30 backdrop-blur-sm h-[calc(100vh-4rem)] flex flex-col">
      <div className="p-6 space-y-6 flex-1 overflow-y-auto">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </NavLink>

        <NavLink
          to="/docs/introduction"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary hover:from-primary/20 hover:to-secondary/20 transition-all font-medium"
        >
          <Zap className="h-4 w-4" />
          Learn FKvim
        </NavLink>

        {sections.map((section) => (
          <div key={section.title} className="space-y-2">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              {section.title}
              {expandedSections.includes(section.title) ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>

            {expandedSections.includes(section.title) && (
              <ul className="space-y-1 ml-2">
                {section.items.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )
                      }
                    >
                      {item.icon && <item.icon className="h-4 w-4" />}
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default DocsSidebar;
