import { NextSeo } from "next-seo";

export default async function Head({ params: { lng } }) {
  const SEO_STRAPI = {
    title: "About",
  };
  return (
    <>
      <NextSeo {...SEO_STRAPI} useAppDir={true} />
    </>
  );
}
