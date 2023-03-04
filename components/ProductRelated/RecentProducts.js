import { use } from "react";
import { getRecentProducts } from "@/lib/api";

import CardSlider from "../sliders/CardSlider";
import { FadeInTopWrapper } from "../InViewAnimatedWrappers/Wrapper";

const RecentProducts = ({ lang }) => {
  const { data: products } = use(getRecentProducts());

  return (
    <FadeInTopWrapper>
      <CardSlider lang={lang} slides={products} cardType="product" />
    </FadeInTopWrapper>
  );
};

export default RecentProducts;
