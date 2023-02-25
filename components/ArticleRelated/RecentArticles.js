import { use } from "react";
import { getRecentArticles } from "@/lib/api";

import CardSlider from "../sliders/CardSlider";

const RecentArticles = ({ lang }) => {
  const { data: articles } = use(getRecentArticles());

  return (
    <div>
      <CardSlider lang={lang} slides={articles} cardType="article" />
    </div>
  );
};

export default RecentArticles;
