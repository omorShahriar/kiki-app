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
  const hompageData = await getHomePageData(lng);
  const { newsLinks } = await getMarqueeNews(lng);

  return (
    <>
      <Container>
        {" "}
        <div className="">
          {hompageData?.hero_slider ? (
            <Slider slides={hompageData?.hero_slider.slides} />
          ) : null}
        </div>
      </Container>

      <section className="mt-16 mb-20 md:mb-40 md:mt-32 min-h-[100px] ">
        <MarqueeContainer>
          {newsLinks.map((news) => (
            <p
              key={news.id}
              className="px-12 border-theme-purple-light border-t-4 border-b-4 border-r-4 py-8  md:text-6xl text-3xl font-bold  overflow-hidden"
            >
              <Link
                href={news.href}
                className="text-theme-purple-light dark:hover:text-theme-purple-deep hover:text-dark transition-colors duration-200 "
              >
                {news.label}
              </Link>
            </p>
          ))}
        </MarqueeContainer>
      </section>
      <Container>
        <section className="py-20">
          <PrimaryHeading>{t("recent-articles")}</PrimaryHeading>{" "}
          <RecentArticles lang={lng} />
          <div className="mt-12 flex justify-end  ">
            <ViewAll lang={lng} page="articles" />
          </div>
        </section>
        <section className="py-20">
          <PrimaryHeading>{t("recent-products")}</PrimaryHeading>
          <RecentProducts lang={lng} />
          <div className="mt-12 flex justify-end">
            <ViewAll lang={lng} page="products" />
          </div>
        </section>
      </Container>
    </>
  );
}
