import DocsLayout from "@/components/DocsLayout";
import TableOfContents from "@/components/TableOfContents";
import DocsNavigation from "@/components/DocsNavigation";
import { getNavigation } from "@/config/docsNavigation";
import TerminalCodeBlock from "@/components/TerminalCodeBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Sparkles, Eye, Zap, ExternalLink } from "lucide-react";

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "features", title: "Features", level: 2 },
  { id: "installation", title: "Installation", level: 2 },
  { id: "usage", title: "Usage", level: 2 },
  { id: "configuration", title: "Configuration", level: 2 },
];

const FkThemes = () => {
  const { previous, next } = getNavigation("/docs/plugins/fkthemes");
  
  return (
    <DocsLayout tableOfContents={<TableOfContents items={tocItems} />}>
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
          <div className="space-y-2 mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FkThemes
            </h1>
            <p className="text-xl text-muted-foreground">
              Advanced theme manager with live preview and seamless switching
            </p>
            <a
              href="https://fkthemes.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Visit FkThemes Website <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section id="overview" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                FkThemes is a powerful Neovim theme manager that provides an intuitive interface for 
                browsing, previewing, and switching between colorschemes. Built with Telescope integration, 
                it offers live preview capabilities and seamless theme management.
              </p>
            </section>

            <section id="features" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Eye className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Live Preview</h3>
                    <p className="text-sm text-muted-foreground">
                      Preview themes in real-time before applying them
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Palette className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold">Theme Collection</h3>
                    <p className="text-sm text-muted-foreground">
                      Access to a curated collection of beautiful themes
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold">Telescope Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Native Telescope picker for smooth theme browsing
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Fast Switching</h3>
                    <p className="text-sm text-muted-foreground">
                      Instant theme switching with no lag
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="installation" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Installation</h2>
              <p className="text-muted-foreground leading-relaxed">
                FkThemes comes pre-installed with FKvim. If you need to install it separately:
              </p>
              <TerminalCodeBlock 
                code={`-- Using lazy.nvim
{
  "flashcodes-themayankjha/fkthemes.nvim",
  dependencies = { "nvim-telescope/telescope.nvim" },
  config = function()
    require("fkthemes").setup()
  end
}`}
                language="lua"
                filename="lua/plugins/fkthemes.lua"
              />
            </section>

            <section id="usage" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Usage</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Open the theme picker with:
                </p>
                <TerminalCodeBlock 
                  code=":FkThemes"
                  language="vim"
                  filename="neovim"
                />
                <p className="text-muted-foreground leading-relaxed">
                  Or use the default keybinding: <code className="text-sm font-mono text-primary bg-card/50 px-2 py-1 rounded">&lt;Leader&gt;th</code>
                </p>
              </div>
            </section>

            <section id="configuration" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Configuration</h2>
              <TerminalCodeBlock 
                code={`require("fkthemes").setup({
  -- Enable live preview
  live_preview = true,
  
  -- Default theme
  default_theme = "catppuccin",
  
  -- Theme list (optional)
  themes = {
    "catppuccin",
    "tokyonight",
    "gruvbox",
    "nord",
  }
})`}
                language="lua"
                filename="lua/plugins/fkthemes.lua"
              />
            </section>
          </div>
          
          <DocsNavigation previous={previous} next={next} />
        </div>
    </DocsLayout>
  );
};

export default FkThemes;
