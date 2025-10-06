import DocsLayout from "@/components/DocsLayout";
import TableOfContents from "@/components/TableOfContents";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, StickyNote, Sparkles, Play, Package } from "lucide-react";

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "fkthemes", title: "FkThemes", level: 2 },
  { id: "fknotes", title: "FkNotes", level: 2 },
  { id: "fkai", title: "FkAI", level: 2 },
  { id: "fkrunner", title: "FkRunner", level: 2 },
];

const Plugins = () => {
  return (
    <DocsLayout>
      <div className="flex">
        <div className="flex-1 max-w-4xl mx-auto px-8 py-12">
          <div className="space-y-2 mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Plugins Overview
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore the powerful FKvim plugin ecosystem
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section id="overview" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                FKvim comes with a curated collection of custom plugins designed to enhance your development 
                workflow. Each plugin is built to work seamlessly with the others, providing a cohesive and 
                powerful development environment.
              </p>
            </section>

            <section id="fkthemes" className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">FkThemes</h2>
                  <p className="text-sm text-muted-foreground">Advanced theme manager</p>
                </div>
              </div>

              <Card className="bg-card/50 border-border">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground">
                    A powerful theme manager that allows you to easily switch between multiple color schemes 
                    with seamless integration. Built with nui.nvim for a modern UI experience.
                  </p>

                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Quick theme switching with instant feedback
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Live preview as you navigate through themes
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Telescope integration for fuzzy finding
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Transparency support for various UI components
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Custom keymaps and theme cycling
                      </li>
                    </ul>
                  </div>

                  <div className="bg-background/50 p-4 rounded-lg">
                    <p className="text-xs font-semibold mb-2">Usage Example:</p>
                    <pre className="text-xs font-mono">
{`:FkThemePicker          -- Open theme picker
:FkTheme catppuccin    -- Set specific theme
:FkThemeToggle         -- Toggle between themes`}
                    </pre>
                  </div>

                  <a
                    href="/docs/fkthemes"
                    className="inline-block text-sm text-primary hover:text-secondary transition-colors"
                  >
                    Read full documentation →
                  </a>
                </CardContent>
              </Card>
            </section>

            <section id="fknotes" className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <StickyNote className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">FkNotes</h2>
                  <p className="text-sm text-muted-foreground">Note-taking & task management</p>
                </div>
              </div>

              <Card className="bg-card/50 border-border">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground">
                    A lightweight note-taking and task management plugin that helps you organize tasks, 
                    reminders, and notes without leaving your editor.
                  </p>

                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        Quick note creation and management
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        Task tracking with checkboxes
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        Categorize notes with tags
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        Search and filter notes
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        Clean, interactive UI
                      </li>
                    </ul>
                  </div>

                  <div className="bg-background/50 p-4 rounded-lg">
                    <p className="text-xs font-semibold mb-2">Usage Example:</p>
                    <pre className="text-xs font-mono">
{`:FkNotes              -- Open notes interface
:FkNotesNew           -- Create new note
:FkNotesSearch        -- Search notes`}
                    </pre>
                  </div>

                  <a
                    href="/docs/fknotes"
                    className="inline-block text-sm text-primary hover:text-secondary transition-colors"
                  >
                    Read full documentation →
                  </a>
                </CardContent>
              </Card>
            </section>

            <section id="fkai" className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">FkAI</h2>
                  <p className="text-sm text-muted-foreground">AI-powered coding assistant</p>
                </div>
              </div>

              <Card className="bg-card/50 border-border">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Integrate AI-powered code assistance directly into your workflow with intelligent 
                    suggestions and completions.
                  </p>

                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        AI-powered code completion
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        Code explanation and documentation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        Refactoring suggestions
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        Bug detection and fixes
                      </li>
                    </ul>
                  </div>

                  <a
                    href="/docs/fkai"
                    className="inline-block text-sm text-primary hover:text-secondary transition-colors"
                  >
                    Read full documentation →
                  </a>
                </CardContent>
              </Card>
            </section>

            <section id="fkrunner" className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Play className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">FkRunner</h2>
                  <p className="text-sm text-muted-foreground">Code execution & testing</p>
                </div>
              </div>

              <Card className="bg-card/50 border-border">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Execute code snippets and run tests directly from Neovim with instant feedback.
                  </p>

                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Run code snippets in multiple languages
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Test execution with result display
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Output window integration
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Support for popular test frameworks
                      </li>
                    </ul>
                  </div>

                  <a
                    href="/docs/fkrunner"
                    className="inline-block text-sm text-primary hover:text-secondary transition-colors"
                  >
                    Read full documentation →
                  </a>
                </CardContent>
              </Card>
            </section>

            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <Package className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-2">Additional Plugins</h4>
                  <p className="text-sm text-muted-foreground">
                    FKvim also includes many other essential plugins like Telescope, LSP configurations, 
                    Git integration, and more. Check the plugins directory for the complete list.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default Plugins;
