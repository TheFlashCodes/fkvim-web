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
      { rootMargin: "0px 0px -80% 0px" }
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
    <aside className="hidden xl:block w-64 border-l border-border bg-card/30 backdrop-blur-sm overflow-y-auto h-[calc(100vh-4rem)] sticky top-16">
      <div className="p-6 space-y-4">
        <h3 className="text-sm font-semibold">On this page</h3>
        <ul className="space-y-2 text-sm">
          {items.map((item) => (
            <li
              key={item.id}
              style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-left w-full hover:text-primary transition-colors",
                  activeId === item.id
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                )}
              >
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
