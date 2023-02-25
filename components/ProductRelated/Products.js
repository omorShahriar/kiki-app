"use client";
import useSWR from "swr";
import Card from "@/components/Card";
import { useState } from "react";
import { fetcher } from "@/lib/api";
import Pagination from "../Pagination";
const Products = ({ products, lang }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const decreasePageIndex = () => setPageIndex((p) => p - 1);
  const increasePageIndex = () => setPageIndex((p) => p + 1);
  const { data, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products?pagination[page]=${pageIndex}&pagination[pageSize]=8&populate[0]=media&populate[1]=category`,
    fetcher,
    {
      fallbackData: products,
    }
  );

  return (
    <>
      {" "}
      <div className="grid grid-cols-12 md:gap-16 gap-8 ">
        {isLoading && (
          <div className="col-span-12 flex items-center justify-center min-h-[400px]">
            <p>Loading ......</p>
          </div>
        )}
        {!isLoading &&
          data.data.map((product) => {
            return (
              <div key={product.id} className="col-span-12 md:col-span-3 ">
                <Card
                  info={product.attributes}
                  cardType="product"
                  lang={lang}
                />
              </div>
            );
          })}
      </div>
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
