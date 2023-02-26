"use client";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";

const MarqueeContainer = ({ children }) => {
  const { theme } = useTheme();
  const gradientColor = theme === "dark" ? [24, 24, 27] : [255, 255, 255];
  return (
    <Marquee gradientColor={gradientColor} pauseOnHover speed={30}>
      {children}
    </Marquee>
  );
};

export default MarqueeContainer;
