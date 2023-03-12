"use client";
import { useTheme } from "next-themes";
const FooterShell = ({ children, themeColor }) => {
  const { theme } = useTheme();
  const bgColor = theme == "dark" ? "#18181b" : themeColor;
  return (
    <footer
      style={{ backgroundColor: bgColor }}
      className="transition-colors duration-200 font-sans border-t-2 border-t-theme-blue-deep dark:border-t-zinc-700 py-8 "
    >
      {children}
    </footer>
  );
};

export default FooterShell;
