import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavPage {
  path: string;
  title: string;
  section: string;
  icon: LucideIcon;
}

interface DocsNavigationProps {
  previous?: NavPage;
  next?: NavPage;
}

const DocsNavigation = ({ previous, next }: DocsNavigationProps) => {
  if (!previous && !next) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 pb-12 border-t border-border">
      {/* Previous Page */}
      {previous ? (
        <Link to={previous.path} className="group">
          <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <ChevronLeft className="h-3 w-3" />
                <span className="uppercase tracking-wide">Previous</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <previous.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground mb-1">{previous.section}</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {previous.title}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {/* Next Page */}
      {next && (
        <Link to={next.path} className="group">
          <Card className={cn(
            "h-full bg-card/50 border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10",
            !previous && "sm:col-start-2"
          )}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground mb-2">
                <span className="uppercase tracking-wide">Next</span>
                <ChevronRight className="h-3 w-3" />
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0 text-right">
                  <p className="text-xs text-muted-foreground mb-1">{next.section}</p>
                  <p className="font-semibold text-foreground group-hover:text-secondary transition-colors truncate">
                    {next.title}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                  <next.icon className="h-5 w-5 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      )}
    </div>
  );
};

export default DocsNavigation;
