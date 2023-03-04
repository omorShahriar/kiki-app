import { NextSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "@/next-seo-config";
import { getHomePageData } from "@/lib/api";

export default async function Head({ params: { lng } }) {
  const SEO_STRAPI = {
    ...NEXT_SEO_DEFAULT,
  };
  return (
    <>
      <NextSeo {...SEO_STRAPI} titleTemplate="%s" useAppDir={true} />
    </>
  );
}
