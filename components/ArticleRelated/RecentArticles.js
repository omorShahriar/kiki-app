import { getRecentArticles } from "@/lib/api";

import CardSlider from "../sliders/CardSlider";
import { FadeInTopWrapper } from "../InViewAnimatedWrappers/Wrapper";

const RecentArticles = async ({ lang }) => {
  const { data: articles } = await getRecentArticles(lang);

  return (
    <FadeInTopWrapper>
      {" "}
      <CardSlider lang={lang} slides={articles} cardType="article" />
    </FadeInTopWrapper>
  );
};

export default RecentArticles;
