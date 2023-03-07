"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <div className="bg-theme-purple-deep dark:bg-zinc-900 transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}
