import DocsLayout from "@/components/DocsLayout";
import TableOfContents from "@/components/TableOfContents";
import TerminalCodeBlock from "@/components/TerminalCodeBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Folder } from "lucide-react";

const tocItems = [
  { id: "structure", title: "Configuration Structure", level: 2 },
  { id: "customization", title: "Basic Customization", level: 2 },
  { id: "keybindings", title: "Keybindings", level: 2 },
  { id: "appearance", title: "Appearance Settings", level: 2 },
];

const Configuration = () => {
  return (
    <DocsLayout>
      <div className="flex">
        <div className="flex-1 max-w-4xl mx-auto px-8 py-12">
          <div className="space-y-2 mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Configuration
            </h1>
            <p className="text-xl text-muted-foreground">
              Customize FKvim to match your workflow
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section id="structure" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Configuration Structure</h2>
              <p className="text-muted-foreground">
                FKvim uses a modular configuration structure for easy customization and maintenance:
              </p>

              <TerminalCodeBlock 
                code={`~/.config/nvim/
├── init.lua              # Entry point
├── lua/
│   ├── core/
│   │   ├── options.lua   # Neovim options
│   │   ├── keymaps.lua   # Key mappings
│   │   └── autocmds.lua  # Auto commands
│   ├── plugins/
│   │   ├── init.lua      # Plugin manager
│   │   ├── lsp.lua       # LSP configuration
│   │   ├── fkthemes.lua  # FkThemes setup
│   │   ├── fknotes.lua   # FkNotes setup
│   │   └── ...           # Other plugins
│   └── utils/            # Utility functions
└── README.md`}
                language="bash"
                filename="directory structure"
              />
            </section>

            <section id="customization" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Basic Customization</h2>
              
              <div className="space-y-6">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Settings className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">Editor Options</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Customize core Neovim settings in <code className="bg-muted px-2 py-1 rounded">lua/core/options.lua</code>
                        </p>
                        <TerminalCodeBlock 
                          code={`-- lua/core/options.lua
vim.opt.number = true          -- Show line numbers
vim.opt.relativenumber = true  -- Relative line numbers
vim.opt.tabstop = 2           -- Tab width
vim.opt.shiftwidth = 2        -- Indent width
vim.opt.expandtab = true      -- Use spaces instead of tabs
vim.opt.smartindent = true    -- Smart auto-indenting`}
                          language="lua"
                          filename="lua/core/options.lua"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <Folder className="h-5 w-5 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">Plugin Configuration</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Configure individual plugins in their respective files under <code className="bg-muted px-2 py-1 rounded">lua/plugins/</code>
                        </p>
                        <TerminalCodeBlock 
                          code={`-- lua/plugins/fkthemes.lua
return {
  "flashcodes-themayankjha/fkthemes.nvim",
  config = function()
    require("fkthemes").setup({
      themes = { "catppuccin", "tokyonight" },
      default_theme = "catppuccin",
      transparent_background = true,
    })
  end,
}`}
                          language="lua"
                          filename="lua/plugins/fkthemes.lua"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="keybindings" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Keybindings</h2>
              <p className="text-muted-foreground">
                FKvim comes with sensible default keybindings. You can customize them in <code className="bg-muted px-2 py-1 rounded">lua/core/keymaps.lua</code>
              </p>

              <Card className="bg-card/50 border-border">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold">Leader Key</h4>
                  <p className="text-sm text-muted-foreground">
                    The leader key is set to <code className="bg-muted px-2 py-1 rounded">Space</code> by default
                  </p>
                  <TerminalCodeBlock 
                    code={`vim.g.mapleader = " "
vim.g.maplocalleader = " "`}
                    language="lua"
                    filename="lua/core/keymaps.lua"
                  />
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold">Common Keybindings</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-2 border-b border-border">
                      <code className="bg-muted px-2 py-1 rounded">Space + e</code>
                      <span className="text-muted-foreground">Toggle file explorer</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <code className="bg-muted px-2 py-1 rounded">Space + ff</code>
                      <span className="text-muted-foreground">Find files</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <code className="bg-muted px-2 py-1 rounded">Space + fg</code>
                      <span className="text-muted-foreground">Live grep</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <code className="bg-muted px-2 py-1 rounded">Space + tp</code>
                      <span className="text-muted-foreground">Theme picker (FkThemes)</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <code className="bg-muted px-2 py-1 rounded">Space + n</code>
                      <span className="text-muted-foreground">Open notes (FkNotes)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="appearance" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Appearance Settings</h2>
              <p className="text-muted-foreground">
                Customize the look and feel of your editor with these settings:
              </p>

              <TerminalCodeBlock 
                code={`-- Transparency
vim.opt.termguicolors = true
vim.opt.background = "dark"

-- Status line
vim.opt.laststatus = 3  -- Global statusline

-- Sign column
vim.opt.signcolumn = "yes"

-- Cursor line
vim.opt.cursorline = true

-- Color column
vim.opt.colorcolumn = "80"`}
                language="lua"
                filename="lua/core/options.lua"
              />

              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-sm">
                  <strong>Tip:</strong> Use the <code className="bg-muted px-2 py-1 rounded">:FkThemePicker</code> command 
                  to preview and switch between themes in real-time!
                </p>
              </div>
            </section>
          </div>
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default Configuration;
