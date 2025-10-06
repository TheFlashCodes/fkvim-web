import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { 
        rootMargin: "-20% 0px -35% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden xl:block w-64 bg-card/30 backdrop-blur-sm sticky top-16 h-[calc(100vh-4rem)] overflow-hidden">
      <div className="p-6 space-y-4 h-full overflow-y-auto">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">On this page</h3>
        <ul className="space-y-3 text-sm">
          {items.map((item) => (
            <li
              key={item.id}
              style={{ paddingLeft: `${(item.level - 2) * 16}px` }}
              className="relative"
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-left w-full hover:text-primary transition-all duration-200 flex items-center gap-3 group relative",
                  activeId === item.id
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                )}
              >
                <span 
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all duration-200 flex-shrink-0",
                    activeId === item.id
                      ? "bg-primary scale-100"
                      : "bg-muted-foreground/40 scale-75 group-hover:scale-90 group-hover:bg-primary/60"
                  )}
                />
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default TableOfContents;
