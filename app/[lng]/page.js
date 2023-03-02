import { useTranslation } from "@/app/i18n";

import Link from "next/link";
import Container from "@/components/Container";
import { getHomePageData, getMarqueeNews } from "@/lib/api";
import Slider from "@/components/sliders/MainCarousel";
import { PrimaryHeading } from "@/components/Heading";
import RecentArticles from "@/components/ArticleRelated/RecentArticles";
import RecentProducts from "@/components/ProductRelated/RecentProducts";
import ViewAll from "@/components/ViewAll";
import MarqueeContainer from "@/components/MarqueeContainer";

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  const { hero_slider } = await getHomePageData(lng);
  const { newsLinks } = await getMarqueeNews(lng);

  return (
    <>
      <div className="">
        <Slider slides={hero_slider.slides} />
      </div>

      <section className="mb-40 mt-32 min-h-[100px]">
        <MarqueeContainer>
          {newsLinks.map((news) => (
            <p
              key={news.id}
              className="px-12 border-r py-8  md:text-6xl text-3xl font-bold  overflow-hidden"
            >
              <Link
                href={news.href}
                className="hover:text-blue-700 transition-colors duration-200 "
              >
                {news.label}
              </Link>
            </p>
          ))}
        </MarqueeContainer>
      </section>
      <Container>
        <section className="my-20">
          <PrimaryHeading>{t("recent-articles")}</PrimaryHeading>
          <RecentArticles lang={lng} />
          <div className="mt-12 flex justify-end  ">
            <ViewAll lang={lng} page="articles" />
          </div>
        </section>
        <section className="my-20">
          <PrimaryHeading>{t("recent-products")}</PrimaryHeading>
          <RecentProducts lang={lng} />
          <div className="mt-12 flex justify-end">
            <Link
              className="font-sans font-bold text-theme-purple-deep text-2xl"
              href={`/${lng}/products`}
            >
              {t("to-all")}
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
}
