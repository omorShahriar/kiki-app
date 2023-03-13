import Container from "@/components/Container";
import { getProducts, getProductBySlug } from "@/lib/api";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/media";
import { Title } from "@/components/Heading";
import MarkDown from "@/components/MarkDown";

export async function generateStaticParams() {
  const { data: products } = await getProducts({ pageSize: 5 });

  return products.map((product) => ({
    slug: product.attributes.slug,
  }));
}

export const page = async ({ params }) => {
  const productData = await getProductBySlug(params.lng, params.slug);
  const { imageUrl } = getStrapiMedia(productData.media);
  return (
    <div className="mb-12">
      {" "}
      <Container>
        <div className="flex items-center justify-between my-12  ">
          {" "}
          <Image
            src={imageUrl ?? "/placeholder.jpg"}
            width={1000}
            height={400}
            alt={productData.title}
            className="md:w-3/4 w-full max-w-[450px]  rounded-md object-cover object-center "
            priority
          />
          {productData?.specification && (
            <div className=" prose lg:prose-xl dark:prose-dark ">
              <h3>{productData?.specification.label}</h3>
              <table>
                <thead>
                  {" "}
                  <tr>
                    <th>Value</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {productData.specification.attributes.map((attribute) => (
                    <tr key={attribute.id}>
                      <td>{attribute.name}</td>
                      <td>{attribute.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <Title>{productData.title}</Title>
        <article className=" prose lg:prose-xl max-w-none dark:prose-dark">
          <MarkDown content={productData.description} />
        </article>
      </Container>
    </div>
  );
};

export default page;
