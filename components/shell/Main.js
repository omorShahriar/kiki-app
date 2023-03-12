"use client";
import { useTheme } from "next-themes";
const Main = ({ children, themeColor }) => {
  const { theme } = useTheme();
  const bgColor = theme == "dark" ? "#18181b" : themeColor;
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="transition-colors duration-200"
    >
      {children}
    </div>
  );
};

export default Main;
