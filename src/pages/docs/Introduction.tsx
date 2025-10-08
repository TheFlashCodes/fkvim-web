import DocsLayout from "@/components/DocsLayout";
import TableOfContents from "@/components/TableOfContents";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Palette, Code, Package } from "lucide-react";

const tocItems = [
  { id: "what-is-fkvim", title: "What is FKvim?", level: 2 },
  { id: "key-features", title: "Key Features", level: 2 },
  { id: "ecosystem", title: "FKvim Ecosystem", level: 2 },
  { id: "why-fkvim", title: "Why FKvim?", level: 2 },
];

const Introduction = () => {
  return (
    <DocsLayout tableOfContents={<TableOfContents items={tocItems} />}>
      <div className="max-w-4xl mx-auto px-8 py-12">
          <div className="space-y-2 mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Introduction
            </h1>
            <p className="text-xl text-muted-foreground">
              Welcome to FKvim - A modern, powerful Neovim configuration
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section id="what-is-fkvim" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">What is FKvim?</h2>
              <p className="text-muted-foreground leading-relaxed">
                FKvim is a comprehensive Neovim IDE configuration that transforms your editor into a 
                modern development environment. Built with performance, aesthetics, and productivity in mind, 
                FKvim provides a complete ecosystem of plugins and configurations that work seamlessly together.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're a seasoned Vim user or just getting started, FKvim offers an intuitive 
                setup that combines the power of Neovim with modern IDE features, all while maintaining 
                the speed and efficiency you expect from a terminal-based editor.
              </p>
            </section>

            <section id="key-features" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Lightning Fast</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimized configuration with lazy loading ensures instant startup times
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Palette className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold">Beautiful Themes</h3>
                    <p className="text-sm text-muted-foreground">
                      FkThemes plugin provides seamless theme switching and customization
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Code className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold">Smart Coding</h3>
                    <p className="text-sm text-muted-foreground">
                      Built-in LSP, autocompletion, and intelligent code navigation
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Package className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Plugin Ecosystem</h3>
                    <p className="text-sm text-muted-foreground">
                      Curated collection of powerful plugins that enhance your workflow
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="ecosystem" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">FKvim Ecosystem</h2>
              <p className="text-muted-foreground leading-relaxed">
                FKvim comes with a powerful suite of custom plugins designed to work together seamlessly:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <strong className="text-foreground">FkThemes</strong> - Advanced theme manager with 
                    live preview and Telescope integration
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <div>
                    <strong className="text-foreground">FkNotes</strong> - Lightweight note-taking and 
                    task management without leaving your editor
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <div>
                    <strong className="text-foreground">FkAI</strong> - AI-powered code assistance and 
                    completion integrated directly into your workflow
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <strong className="text-foreground">FkRunner</strong> - Execute code snippets and 
                    run tests directly from Neovim
                  </div>
                </li>
              </ul>
            </section>

            <section id="why-fkvim" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Why FKvim?</h2>
              <p className="text-muted-foreground leading-relaxed">
                FKvim stands out by offering a complete, opinionated configuration that just works out of 
                the box. You don't need to spend hours configuring plugins and keybindings - FKvim provides 
                sensible defaults while remaining highly customizable.
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-sm text-foreground">
                  <strong>Pro Tip:</strong> FKvim is perfect for developers who want the power of Neovim 
                  with modern IDE features, without the complexity of building their own configuration from scratch.
                </p>
              </div>
            </section>
          </div>
        </div>
    </DocsLayout>
  );
};

export default Introduction;
