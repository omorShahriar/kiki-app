"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children, themeColor }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}
