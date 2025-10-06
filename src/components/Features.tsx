import { Zap, Palette, Puzzle, Settings, Telescope, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Blazingly Fast",
    description: "Optimized for speed with lazy loading and efficient plugin management.",
  },
  {
    icon: Palette,
    title: "Beautiful Themes",
    description: "Stunning themes with the FkThemes plugin for seamless customization.",
  },
  {
    icon: Puzzle,
    title: "Plugin Ecosystem",
    description: "Curated collection of the best Neovim plugins for modern development.",
  },
  {
    icon: Telescope,
    title: "Fuzzy Finding",
    description: "Powerful telescope integration for lightning-fast file navigation.",
  },
  {
    icon: Settings,
    title: "Highly Configurable",
    description: "Easily customize every aspect to match your workflow and preferences.",
  },
  {
    icon: Package,
    title: "LSP Support",
    description: "Built-in LSP configuration for intelligent code completion and diagnostics.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything you need for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              modern development
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            FKvim comes packed with features to boost your productivity and enhance your coding experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
