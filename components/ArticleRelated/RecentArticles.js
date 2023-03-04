import { use } from "react";
import { getRecentArticles } from "@/lib/api";

import CardSlider from "../sliders/CardSlider";
import { FadeInTopWrapper } from "../InViewAnimatedWrappers/Wrapper";

const RecentArticles = ({ lang }) => {
  const { data: articles } = use(getRecentArticles());

  return (
    <FadeInTopWrapper>
      {" "}
      <CardSlider lang={lang} slides={articles} cardType="article" />
    </FadeInTopWrapper>
  );
};

export default RecentArticles;
