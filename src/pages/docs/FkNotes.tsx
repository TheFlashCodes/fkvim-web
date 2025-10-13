import DocsLayout from "@/components/DocsLayout";
import TableOfContents from "@/components/TableOfContents";
import DocsNavigation from "@/components/DocsNavigation";
import { getNavigation } from "@/config/docsNavigation";
import TerminalCodeBlock from "@/components/TerminalCodeBlock";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckSquare, Search, FolderTree } from "lucide-react";

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "features", title: "Features", level: 2 },
  { id: "installation", title: "Installation", level: 2 },
  { id: "usage", title: "Usage", level: 2 },
  { id: "keybindings", title: "Keybindings", level: 2 },
];

const FkNotes = () => {
  const { previous, next } = getNavigation("/docs/plugins/fknotes");
  
  return (
    <DocsLayout tableOfContents={<TableOfContents items={tocItems} />}>
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
          <div className="space-y-2 mb-8">
            <h1 className="text-5xl font-bold text-gradient">
              FkNotes
            </h1>
            <p className="text-xl text-muted-foreground">
              Lightweight note-taking and task management without leaving Neovim
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section id="overview" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                FkNotes is a minimalist note-taking plugin that integrates seamlessly with your Neovim workflow. 
                Capture ideas, create tasks, and organize your thoughts without context-switching.
              </p>
            </section>

            <section id="features" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Quick Notes</h3>
                    <p className="text-sm text-muted-foreground">
                      Create notes instantly with simple commands
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <CheckSquare className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold">Task Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Built-in todo lists with checkbox support
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Search className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold">Fast Search</h3>
                    <p className="text-sm text-muted-foreground">
                      Telescope integration for quick note searching
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <FolderTree className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Organization</h3>
                    <p className="text-sm text-muted-foreground">
                      Organize notes with tags and categories
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="installation" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Installation</h2>
              <p className="text-muted-foreground leading-relaxed">
                FkNotes comes pre-installed with FKvim. For standalone installation:
              </p>
              <TerminalCodeBlock 
                code={`-- Using lazy.nvim
{
  "flashcodes-themayankjha/fknotes.nvim",
  dependencies = { "nvim-telescope/telescope.nvim" },
  config = function()
    require("fknotes").setup()
  end
}`}
                language="lua"
                filename="lua/plugins/fknotes.lua"
              />
            </section>

            <section id="usage" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Usage</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Create a New Note</h3>
                  <TerminalCodeBlock 
                    code=":FkNote new"
                    language="vim"
                    filename="neovim"
                  />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Search Notes</h3>
                  <TerminalCodeBlock 
                    code=":FkNote search"
                    language="vim"
                    filename="neovim"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Toggle Todo</h3>
                  <TerminalCodeBlock 
                    code=":FkNote toggle"
                    language="vim"
                    filename="neovim"
                  />
                </div>
              </div>
            </section>

            <section id="keybindings" className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Keybindings</h2>
              <div className="bg-card/50 border border-border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 text-foreground">Key</th>
                      <th className="text-left p-3 text-foreground">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border">
                      <td className="p-3 font-mono text-primary">&lt;leader&gt;nn</td>
                      <td className="p-3">Create new note</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-mono text-primary">&lt;leader&gt;ns</td>
                      <td className="p-3">Search notes</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-mono text-primary">&lt;leader&gt;nt</td>
                      <td className="p-3">Toggle todo checkbox</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-mono text-primary">&lt;leader&gt;nd</td>
                      <td className="p-3">Delete note</td>
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

export default FkNotes;
