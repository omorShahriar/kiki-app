import { use } from "react";
import { getRecentProducts } from "@/lib/api";

import CardSlider from "../sliders/CardSlider";

const RecentProducts = ({ lang }) => {
  const { data: products } = use(getRecentProducts());

  return (
    <div>
      <CardSlider lang={lang} slides={products} cardType="product" />
    </div>
  );
};

export default RecentProducts;
