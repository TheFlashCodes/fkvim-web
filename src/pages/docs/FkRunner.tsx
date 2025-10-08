import DocsLayout from "@/components/DocsLayout";
import TableOfContents from "@/components/TableOfContents";
import DocsNavigation from "@/components/DocsNavigation";
import { getNavigation } from "@/config/docsNavigation";
import TerminalCodeBlock from "@/components/TerminalCodeBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Terminal, FileCode, Zap } from "lucide-react";

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "features", title: "Features", level: 2 },
  { id: "installation", title: "Installation", level: 2 },
  { id: "usage", title: "Usage", level: 2 },
  { id: "supported-languages", title: "Supported Languages", level: 2 },
];

const FkRunner = () => {
  const { previous, next } = getNavigation("/docs/plugins/fkrunner");
  
  return (
    <DocsLayout tableOfContents={<TableOfContents items={tocItems} />}>
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
          <div className="space-y-2 mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FkRunner
            </h1>
            <p className="text-xl text-muted-foreground">
              Execute code snippets and run tests directly from Neovim
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section id="overview" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                FkRunner is a versatile code execution plugin that lets you run code snippets, entire files, 
                or test suites without leaving Neovim. Perfect for rapid prototyping and testing.
              </p>
            </section>

            <section id="features" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Play className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Quick Execution</h3>
                    <p className="text-sm text-muted-foreground">
                      Run code with a single keypress
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Terminal className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold">Integrated Output</h3>
                    <p className="text-sm text-muted-foreground">
                      View output in a floating window or split
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <FileCode className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold">Multiple Languages</h3>
                    <p className="text-sm text-muted-foreground">
                      Support for Python, JavaScript, Rust, and more
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Test Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Run unit tests and see results instantly
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="installation" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Installation</h2>
              <p className="text-muted-foreground leading-relaxed">
                FkRunner comes pre-installed with FKvim. For standalone installation:
              </p>
              <TerminalCodeBlock 
                code={`-- Using lazy.nvim
{
  "flashcodes-themayankjha/fkrunner.nvim",
  config = function()
    require("fkrunner").setup()
  end
}`}
                language="lua"
                filename="lua/plugins/fkrunner.lua"
              />
            </section>

            <section id="usage" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Usage</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Run Current File</h3>
                  <TerminalCodeBlock 
                    code=":FkRun file"
                    language="vim"
                    filename="neovim"
                  />
                  <p className="text-muted-foreground mt-2">
                    Or use keybinding: <code className="text-sm font-mono text-primary bg-card/50 px-2 py-1 rounded">&lt;leader&gt;rf</code>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Run Selection</h3>
                  <p className="text-muted-foreground mb-2">
                    Select code in visual mode, then:
                  </p>
                  <TerminalCodeBlock 
                    code=":FkRun selection"
                    language="vim"
                    filename="neovim"
                  />
                  <p className="text-muted-foreground mt-2">
                    Or use: <code className="text-sm font-mono text-primary bg-card/50 px-2 py-1 rounded">&lt;leader&gt;rs</code>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Run Tests</h3>
                  <TerminalCodeBlock 
                    code=":FkRun test"
                    language="vim"
                    filename="neovim"
                  />
                  <p className="text-muted-foreground mt-2">
                    Keybinding: <code className="text-sm font-mono text-primary bg-card/50 px-2 py-1 rounded">&lt;leader&gt;rt</code>
                  </p>
                </div>
              </div>
            </section>

            <section id="supported-languages" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Supported Languages</h2>
              <div className="bg-card/50 border border-border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 text-foreground">Language</th>
                      <th className="text-left p-3 text-foreground">Command</th>
                      <th className="text-left p-3 text-foreground">Test Framework</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border">
                      <td className="p-3 font-semibold">Python</td>
                      <td className="p-3 font-mono text-sm">python3</td>
                      <td className="p-3">pytest</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-semibold">JavaScript</td>
                      <td className="p-3 font-mono text-sm">node</td>
                      <td className="p-3">jest</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-semibold">Rust</td>
                      <td className="p-3 font-mono text-sm">cargo run</td>
                      <td className="p-3">cargo test</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-semibold">Go</td>
                      <td className="p-3 font-mono text-sm">go run</td>
                      <td className="p-3">go test</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-semibold">C++</td>
                      <td className="p-3 font-mono text-sm">g++</td>
                      <td className="p-3">Google Test</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
          
          <DocsNavigation previous={previous} next={next} />
        </div>
    </DocsLayout>
  );
};

export default FkRunner;
