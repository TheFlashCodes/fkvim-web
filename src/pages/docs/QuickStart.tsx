import DocsLayout from "@/components/DocsLayout";
import TableOfContents from "@/components/TableOfContents";
import DocsNavigation from "@/components/DocsNavigation";
import { getNavigation } from "@/config/docsNavigation";
import TerminalCodeBlock from "@/components/TerminalCodeBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Terminal, Rocket } from "lucide-react";

const tocItems = [
  { id: "first-launch", title: "First Launch", level: 2 },
  { id: "basic-workflow", title: "Basic Workflow", level: 2 },
  { id: "exploring-features", title: "Exploring Features", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const QuickStart = () => {
  const { previous, next } = getNavigation("/docs/quick-start");
  
  return (
    <DocsLayout tableOfContents={<TableOfContents items={tocItems} />}>
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
          <div className="space-y-2 mb-8">
            <h1 className="text-5xl font-bold text-gradient">
              Quick Start
            </h1>
            <p className="text-xl text-muted-foreground">
              Get up and running with FKvim in minutes
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section id="first-launch" className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">First Launch</h2>
              </div>

              <p className="text-muted-foreground">
                After installing FKvim, launch Neovim for the first time. The plugin manager will automatically 
                install all required plugins. This may take a minute or two.
              </p>

              <TerminalCodeBlock 
                code={`# Launch Neovim
nvim

# Wait for plugins to install
# Once complete, quit and restart
:q
nvim`}
                language="bash"
                filename="bash"
              />
            </section>

            <section id="basic-workflow" className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Basic Workflow</h2>
              </div>

              <p className="text-muted-foreground">
                Learn the essential commands to navigate and use FKvim effectively:
              </p>

              <div className="grid gap-4">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold">Opening Files</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between p-3 bg-background/50 rounded">
                        <code className="text-primary">Space + ff</code>
                        <span className="text-muted-foreground">Find and open files</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-background/50 rounded">
                        <code className="text-primary">Space + e</code>
                        <span className="text-muted-foreground">Toggle file explorer</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold">Searching</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between p-3 bg-background/50 rounded">
                        <code className="text-primary">Space + fg</code>
                        <span className="text-muted-foreground">Search text in files (live grep)</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-background/50 rounded">
                        <code className="text-primary">Space + fb</code>
                        <span className="text-muted-foreground">Browse open buffers</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold">Code Navigation</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between p-3 bg-background/50 rounded">
                        <code className="text-primary">gd</code>
                        <span className="text-muted-foreground">Go to definition</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-background/50 rounded">
                        <code className="text-primary">gr</code>
                        <span className="text-muted-foreground">Show references</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-background/50 rounded">
                        <code className="text-primary">K</code>
                        <span className="text-muted-foreground">Show hover documentation</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="exploring-features" className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Exploring Features</h2>
              </div>

              <p className="text-muted-foreground">
                Try out the FKvim ecosystem plugins:
              </p>

              <div className="grid gap-4">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <span className="text-primary">🎨</span> FkThemes
                    </h3>
                    <TerminalCodeBlock 
                      code=":FkThemePicker"
                      language="vim"
                      filename="neovim"
                    />
                    <p className="text-sm text-muted-foreground">
                      Open the theme picker and preview different colorschemes
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <span className="text-secondary">📝</span> FkNotes
                    </h3>
                    <TerminalCodeBlock 
                      code=":FkNotes"
                      language="vim"
                      filename="neovim"
                    />
                    <p className="text-sm text-muted-foreground">
                      Access your notes and tasks directly from the editor
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <span className="text-accent">✨</span> LSP Features
                    </h3>
                    <div className="bg-background/50 p-3 rounded">
                      <code className="text-sm">Space + ca</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Trigger code actions for quick fixes and refactoring
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="next-steps" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Next Steps</h2>
              
              <div className="grid gap-4">
                <Card className="bg-primary/10 border-primary/30">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">📚 Read the Configuration Guide</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Learn how to customize FKvim to match your workflow
                    </p>
                    <a
                      href="/docs/configuration"
                      className="text-sm text-primary hover:text-secondary transition-colors"
                    >
                      View Configuration →
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/10 border-secondary/30">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">🔌 Explore Plugins</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Discover the powerful plugins included in FKvim
                    </p>
                    <a
                      href="/docs/plugins"
                      className="text-sm text-primary hover:text-secondary transition-colors"
                    >
                      View Plugins →
                    </a>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                <p className="text-sm">
                  <strong>Pro Tip:</strong> Press <code className="bg-muted px-2 py-1 rounded">Space</code> 
                  {" "}to see all available keybindings with Which-Key!
                </p>
              </div>
            </section>
          </div>
          
          <DocsNavigation previous={previous} next={next} />
        </div>
    </DocsLayout>
  );
};

export default QuickStart;
