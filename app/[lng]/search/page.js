import Card from "@/components/Card";
import Container from "@/components/Container";
import { PrimaryHeading } from "@/components/Heading";
import { getproductSearchResult } from "@/lib/api";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Search",
};
const page = async ({ searchParams }) => {
  const searchResults = await getproductSearchResult(searchParams.query);

  return (
    <div>
      <Container>
        <PrimaryHeading>Products found : {searchResults.length}</PrimaryHeading>
        <div className="grid grid-cols-12 gap-4 pb-16">
          {searchResults.map((product) => (
            <div key={product.id} className=" md:col-span-3 col-span-12 ">
              {" "}
              <Card info={product.attributes} cardType="product" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
