import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { Josefin_Sans } from "next/font/google";
import { getHomePageData, getSiteInfo } from "@/lib/api";
const JosefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

import SearchBar from "@/components/SearchBar";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Providers } from "@/components/Providers";
import Footer from "@/components/Footer";
import NavHeader from "@/components/shell/NavHeader";
import Main from "@/components/shell/Main";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({ params: { lng } }) {
  const { SEO } = await getHomePageData(lng);

  return {
    title: {
      default: SEO?.metaTitle ?? "Kiki and Ami",
      template: SEO?.metaTitle ? `%s | ${SEO.metaTitle}` : "%s | Kiki and Ami",
    },
    description:
      SEO?.metaDescription ??
      "KiKi & Ami,  a company and brand for breath-taking innovative products.",
  };
}

export default async function RootLayout({ children, params: { lng } }) {
  const { themeColor } = await getSiteInfo(lng);

  return (
    <html lang={lng} dir={dir(lng)}>
      <head />

      <body className={`${JosefinSans.variable} font-sans`}>
        <Providers>
          <NavHeader themeColor={themeColor}>
            <Navigation lang={lng} />
            <SearchBar lang={lng} />
          </NavHeader>
          <Main themeColor={themeColor}> {children}</Main>

          <Footer lang={lng} themeColor={themeColor} />
        </Providers>
      </body>
    </html>
  );
}
