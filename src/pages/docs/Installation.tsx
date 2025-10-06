import DocsLayout from "@/components/DocsLayout";
import TableOfContents from "@/components/TableOfContents";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, AlertTriangle, CheckCircle } from "lucide-react";
import { useState } from "react";

const tocItems = [
  { id: "prerequisites", title: "Prerequisites", level: 2 },
  { id: "installation", title: "Installation", level: 2 },
  { id: "backup", title: "Backup Existing Config", level: 3 },
  { id: "clone", title: "Clone FKvim", level: 3 },
  { id: "verification", title: "Verify Installation", level: 2 },
  { id: "removal", title: "Removal Instructions", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
];

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="flex items-center justify-between px-4 py-3 border border-border bg-muted/30 rounded-t-lg">
        <span className="text-sm text-muted-foreground font-mono">bash</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-8 hover:bg-muted"
        >
          {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <div className="bg-card border border-t-0 border-border rounded-b-lg p-4 overflow-x-auto">
        <code className="text-sm font-mono text-foreground">{code}</code>
      </div>
    </div>
  );
};

const Installation = () => {
  return (
    <DocsLayout>
      <div className="flex">
        <div className="flex-1 max-w-4xl mx-auto px-8 py-12">
          <div className="space-y-2 mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Installation
            </h1>
            <p className="text-xl text-muted-foreground">
              Get FKvim up and running in minutes
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section id="prerequisites" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Prerequisites</h2>
              <p className="text-muted-foreground">
                Before installing FKvim, ensure you have the following installed:
              </p>
              
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold">Neovim 0.9.0+</p>
                      <p className="text-sm text-muted-foreground">
                        Latest stable version recommended
                      </p>
                      <CodeBlock code="nvim --version" />
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold">Git</p>
                      <p className="text-sm text-muted-foreground">
                        For cloning the repository and managing plugins
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold">Node.js (Optional)</p>
                      <p className="text-sm text-muted-foreground">
                        Required for some LSP servers and plugins
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold">A Nerd Font</p>
                      <p className="text-sm text-muted-foreground">
                        For proper icon rendering (recommended: JetBrains Mono Nerd Font)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="installation" className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Installation Steps</h2>

              <div id="backup" className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">1. Backup Existing Configuration</h3>
                <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <p className="text-sm">
                      <strong>Important:</strong> Back up your existing Neovim configuration before proceeding.
                    </p>
                  </div>
                </div>
                <CodeBlock code="mv ~/.config/nvim ~/.config/nvim.backup" />
              </div>

              <div id="clone" className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">2. Clone FKvim Repository</h3>
                <p className="text-muted-foreground">
                  Clone the FKvim repository to your Neovim configuration directory:
                </p>
                <CodeBlock code="git clone https://github.com/TheFlashCodes/FKvim.git ~/.config/nvim" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">3. Launch Neovim</h3>
                <p className="text-muted-foreground">
                  Start Neovim and let the plugins install automatically:
                </p>
                <CodeBlock code="nvim" />
                <p className="text-sm text-muted-foreground">
                  The first launch will take a few moments as plugins are installed. 
                  Once complete, restart Neovim to ensure all plugins are loaded correctly.
                </p>
              </div>
            </section>

            <section id="verification" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Verify Installation</h2>
              <p className="text-muted-foreground">
                To verify that FKvim is installed correctly, check the following:
              </p>
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6 space-y-3">
                  <p className="font-semibold">Run health check:</p>
                  <CodeBlock code=":checkhealth" />
                  <p className="text-sm text-muted-foreground">
                    This command will show you any missing dependencies or configuration issues.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section id="removal" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Removal Instructions</h2>
              <p className="text-muted-foreground">
                If you need to uninstall FKvim and restore your previous configuration:
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">1. Remove FKvim configuration:</p>
                  <CodeBlock code="rm -rf ~/.config/nvim" />
                </div>

                <div>
                  <p className="font-semibold mb-2">2. Remove plugin data:</p>
                  <CodeBlock code="rm -rf ~/.local/share/nvim" />
                </div>

                <div>
                  <p className="font-semibold mb-2">3. Restore your backup (if you created one):</p>
                  <CodeBlock code="mv ~/.config/nvim.backup ~/.config/nvim" />
                </div>
              </div>
            </section>

            <section id="troubleshooting" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Troubleshooting</h2>
              
              <div className="space-y-4">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <h4 className="font-semibold">Plugins not loading?</h4>
                    <p className="text-sm text-muted-foreground">
                      Try running <code className="bg-muted px-2 py-1 rounded">:Lazy sync</code> to update all plugins.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <h4 className="font-semibold">LSP not working?</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensure you have installed the required language servers. Run <code className="bg-muted px-2 py-1 rounded">:Mason</code> to install them.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <h4 className="font-semibold">Icons not displaying?</h4>
                    <p className="text-sm text-muted-foreground">
                      Install a Nerd Font and configure your terminal to use it.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default Installation;
