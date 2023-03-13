import Header from "@/components/Header";
import { getCategories, getCategoryBySlug } from "@/lib/api";
import Card from "@/components/Card";
import Container from "@/components/Container";

export async function generateStaticParams() {
  const categoryData = await getCategories();

  return categoryData.map((category) => ({
    slug: category.attributes.slug,
  }));
}

const page = async ({ params }) => {
  const categoryData = await getCategoryBySlug(params.lng, params.slug);

  return (
    <div>
      <Container>
        <Header>{categoryData?.name}</Header>
        <div className="grid grid-cols-12 gap-4">
          {categoryData?.products.data.map((product) => {
            return (
              <div key={product?.id} className="md:col-span-3 col-span-12">
                <Card info={product?.attributes} cardType="product" />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default page;
