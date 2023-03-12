"use client";

import { useTheme } from "next-themes";

const NavHeader = ({ children, themeColor }) => {
  const { theme } = useTheme();
  const bgColor = theme == "dark" ? "#18181b" : themeColor;
  return (
    <header
      style={{ backgroundColor: bgColor }}
      className="transition-colors duration-200 bg-theme-purple-deep dark:bg-zinc-900 sticky top-0 z-50 border-b-2 border-theme-blue-deep dark:border-b-zinc-700"
    >
      {children}
    </header>
  );
};

export default NavHeader;
