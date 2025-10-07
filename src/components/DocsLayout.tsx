import { ReactNode } from "react";
import Navbar from "./Navbar";
import DocsSidebar from "./DocsSidebar";

interface DocsLayoutProps {
  children: ReactNode;
  tableOfContents?: ReactNode;
}

const DocsLayout = ({ children, tableOfContents }: DocsLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[280px_1fr_280px] pt-16 h-[calc(100vh-4rem)] overflow-hidden">
        {/* Left Sidebar - Fixed/Sticky */}
        <aside className="hidden lg:block sticky top-16 h-[calc(100vh-4rem)] overflow-hidden">
          <DocsSidebar />
        </aside>

        {/* Center Content - Scrollable */}
        <main className="overflow-y-auto h-[calc(100vh-4rem)]">
          {children}
        </main>

        {/* Right Sidebar (TOC) - Fixed/Sticky */}
        {tableOfContents && (
          <aside className="hidden xl:block sticky top-16 h-[calc(100vh-4rem)] overflow-hidden">
            {tableOfContents}
          </aside>
        )}
      </div>
    </div>
  );
};

export default DocsLayout;
