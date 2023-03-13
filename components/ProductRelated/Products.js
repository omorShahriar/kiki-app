"use client";
import useSWR from "swr";
import Card from "@/components/Card";
import { useState } from "react";
import { fetcher } from "@/lib/api";
import Pagination from "../Pagination";
import {
  FadeInWrapper,
  GridElementWrapper,
  GridFadeInWrapper,
} from "../InViewAnimatedWrappers/Wrapper";
const Products = ({ products, lang }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const decreasePageIndex = () => setPageIndex((p) => p - 1);
  const increasePageIndex = () => setPageIndex((p) => p + 1);
  const { data, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products?pagination[page]=${pageIndex}&pagination[pageSize]=8&populate[0]=media&populate[1]=category&locale=${lang}`,
    fetcher,
    {
      fallbackData: products,
    }
  );

  return (
    <>
      {isLoading ? (
        <div className="w-full flex items-center justify-center min-h-[400px]">
          <p>Loading ......</p>
        </div>
      ) : (
        <GridFadeInWrapper>
          {data.data.map((product) => (
            <GridElementWrapper key={product.id}>
              {" "}
              <Card info={product.attributes} cardType="product" lang={lang} />
            </GridElementWrapper>
          ))}
        </GridFadeInWrapper>
      )}

      <Pagination
        data={data}
        pageIndex={pageIndex}
        decreasePageIndex={decreasePageIndex}
        increasePageIndex={increasePageIndex}
        lang={lang}
      />
    </>
  );
};

export default Products;
