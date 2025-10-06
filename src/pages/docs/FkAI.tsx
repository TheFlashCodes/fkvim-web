import DocsLayout from "@/components/DocsLayout";
import TableOfContents from "@/components/TableOfContents";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code2, MessageSquare, Sparkles } from "lucide-react";

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "features", title: "Features", level: 2 },
  { id: "installation", title: "Installation", level: 2 },
  { id: "configuration", title: "Configuration", level: 2 },
  { id: "usage", title: "Usage", level: 2 },
];

const FkAI = () => {
  return (
    <DocsLayout>
      <div className="flex">
        <div className="flex-1 max-w-4xl mx-auto px-8 py-12">
          <div className="space-y-2 mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FkAI
            </h1>
            <p className="text-xl text-muted-foreground">
              AI-powered code assistance integrated into your workflow
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section id="overview" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                FkAI brings advanced AI capabilities directly into Neovim. Get intelligent code completions, 
                explanations, and refactoring suggestions powered by state-of-the-art language models.
              </p>
            </section>

            <section id="features" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Smart Completion</h3>
                    <p className="text-sm text-muted-foreground">
                      Context-aware AI code completions
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Code2 className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold">Code Generation</h3>
                    <p className="text-sm text-muted-foreground">
                      Generate code from natural language descriptions
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold">Code Explanation</h3>
                    <p className="text-sm text-muted-foreground">
                      Get instant explanations for complex code
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Refactoring</h3>
                    <p className="text-sm text-muted-foreground">
                      AI-assisted code refactoring and optimization
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="installation" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Installation</h2>
              <p className="text-muted-foreground leading-relaxed">
                FkAI comes pre-configured with FKvim. For standalone installation:
              </p>
              <div className="bg-card/50 border border-border rounded-lg p-4">
                <pre className="text-sm font-mono text-foreground overflow-x-auto">
                  <code>{`-- Using lazy.nvim
{
  "flashcodes-themayankjha/fkai.nvim",
  dependencies = { "nvim-lua/plenary.nvim" },
  config = function()
    require("fkai").setup({
      api_key = vim.env.OPENAI_API_KEY,
    })
  end
}`}</code>
                </pre>
              </div>
            </section>

            <section id="configuration" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Configuration</h2>
              <div className="bg-card/50 border border-border rounded-lg p-4">
                <pre className="text-sm font-mono text-foreground overflow-x-auto">
                  <code>{`require("fkai").setup({
  -- API Configuration
  api_key = vim.env.OPENAI_API_KEY,
  model = "gpt-4",
  
  -- UI Settings
  floating_window = {
    width = 80,
    height = 20,
    border = "rounded",
  },
  
  -- Keybindings
  keymaps = {
    complete = "<C-a>",
    explain = "<leader>ae",
    refactor = "<leader>ar",
  }
})`}</code>
                </pre>
              </div>
            </section>

            <section id="usage" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Usage</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Generate Code</h3>
                  <p className="text-muted-foreground mb-2">
                    Type a comment describing what you want, then:
                  </p>
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <code className="text-sm font-mono text-primary">:FkAI generate</code>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Explain Code</h3>
                  <p className="text-muted-foreground mb-2">
                    Select code in visual mode, then:
                  </p>
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <code className="text-sm font-mono text-primary">:FkAI explain</code>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Refactor Code</h3>
                  <p className="text-muted-foreground mb-2">
                    Select code and get refactoring suggestions:
                  </p>
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <code className="text-sm font-mono text-primary">:FkAI refactor</code>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default FkAI;
