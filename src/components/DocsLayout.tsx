import { ReactNode } from "react";
import Navbar from "./Navbar";
import DocsSidebar from "./DocsSidebar";

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 pt-16 h-[calc(100vh-4rem)] overflow-hidden">
        <DocsSidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DocsLayout;
